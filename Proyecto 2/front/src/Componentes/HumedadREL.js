import React, { useState, useEffect } from 'react';
import { ReactP5Wrapper } from "react-p5-wrapper";

function HumedadREL() {
    const [humRel, setHumRel] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/ObtenerInformacion", {
                    method: "GET",
                    headers: { "Content-type": "application/json;charset=UTF-8" }
                });
                const data = await response.json();
                if (data && data.length > 0) {
                    const latestHumRel = data[data.length - 1].Humedad;
                    setHumRel(latestHumRel);
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

    function sketch(p5) {
        p5.setup = () => {
            p5.createCanvas(400, 200);
            p5.noStroke();
        };

        p5.draw = () => {
            p5.background(0);
            p5.fill(135, 206, 235);
            const ellipseSize = p5.map(humRel, 0, 100, 0, 200);
            p5.ellipse(200, 100, ellipseSize, ellipseSize);
            p5.fill(255);
            p5.textSize(25);
            p5.textAlign(p5.CENTER, p5.CENTER);
            p5.text("Humedad Relativa: " + humRel + "%", 200, 30);
        };
    }

    return (
        <div className="App">
            <header className="App-header">
                <ReactP5Wrapper sketch={sketch} />
            </header>
        </div>
    );
}

export default HumedadREL;
