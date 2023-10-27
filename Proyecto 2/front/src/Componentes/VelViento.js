import { React, useState } from 'react';
import { ReactP5Wrapper } from "react-p5-wrapper";


function VelViento() {
 
    const [vel2, setVel2] = useState(0);


    setTimeout(() => { 
        fetch("http://localhost:5000/ObtenerInformacion", {
            method: "GET",
            headers: { "Content-type": "application/json;charset=UTF-8" }
        })
            .then(res => res.json())
            .catch(err => {
                console.log('Error:', err);
            })
            .then(response => {
                if (response) {
                    setVel2(response[response.length - 1].VV); 
                } else {
                    console.log("No hay respuesta");
                }
            })  
    }, 1000); 
 
    function sketch(p5, canvasParentRef) {
        p5.setup = () => {
            p5.createCanvas(400, 200).parent(canvasParentRef);
            p5.noStroke();
        }

        p5.draw = () => {
            p5.background(0);
            p5.strokeWeight(5);
            p5.stroke(255);
            p5.line(0, 100, 100 + vel2, 100);
            p5.fill(255);
            p5.triangle(100 + vel2, 100, 80 + vel2, 90, 80 + vel2, 110);

            p5.fill(0);
            p5.strokeWeight(0);
            p5.stroke(0);
            p5.textSize(25);
            p5.textAlign(p5.CENTER, p5.CENTER);
            p5.fill(255);
            p5.text("Velocidad del viento: " + vel2 + " km/h", 200, 30);
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

export default VelViento;
