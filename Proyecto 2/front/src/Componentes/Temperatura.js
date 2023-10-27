import React, { useState, useEffect } from 'react';
import Sketch from "react-p5";

function Temperatura() {
    const [temperature, setTemperature] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/ObtenerInformacion", {
                    method: "GET",
                    headers: { "Content-type": "application/json;charset=UTF-8" }
                });
                const data = await response.json();
                if (data && data.length > 0) {
                    const latestTemperature = data[data.length - 1].Temperatura;
                    setTemperature(latestTemperature);
                } else {
                    console.log("No hay respuesta");
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };

        const interval = setInterval(fetchData, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(400, 200).parent(canvasParentRef);
        p5.noStroke();
    };

    const draw = (p5) => {
        let colorStart, colorEnd, colorPercent;
        if (temperature > 40) {
            colorStart = p5.color(255, 165, 0);
            colorEnd = p5.color(255, 0, 0);
            colorPercent = p5.map(temperature, 40, 100, 0, 1);
        } else if (temperature <= 0) {
            colorStart = p5.color(255, 165, 0);
            colorEnd = p5.color(0, 0, 255);
            colorPercent = 1;
        } else if (temperature <= 35) {
            colorStart = p5.color(0, 0, 255);
            colorEnd = p5.color(255, 165, 0);
            colorPercent = p5.map(temperature, 0, 35, 0, 1);
        } else {
            colorStart = p5.color(255, 165, 0);
            colorEnd = p5.color(255, 165, 0);
            colorPercent = 0;
        }

        let color = p5.lerpColor(colorStart, colorEnd, colorPercent);
        p5.background(color);
        p5.fill(255);
        p5.ellipse(200, 100, 100, 100);
        p5.fill(0);
        p5.textSize(30);
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.text(`${temperature}°c`, 200, 100);
        p5.text("Temperatura del ambiente", 200, 30);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Sketch setup={setup} draw={draw} />
            </header>
        </div>
    );
}

export default Temperatura;
