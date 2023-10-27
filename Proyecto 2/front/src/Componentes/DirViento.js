import { React, useState } from 'react';
import { ReactP5Wrapper } from "react-p5-wrapper";


function DirVento() {

    const [angle, setAngle] = useState(0);
 
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
                    if(response[response.length - 1].DV === "Este"){
                        setAngle(90);
                    }else if(response[response.length - 1].DV === "Oeste"){
                        setAngle(270);
                    }else if(response[response.length - 1].DV === "Norte"){
                        setAngle(0);
                    }else if(response[response.length - 1].DV === "Sur"){
                        setAngle(180);
                    }  
                } else {
                    console.log("No hay respuesta");
                }
            })  
    }, 1000); 


    const sketch = (p) => {
        p.setup = () => {
            p.createCanvas(400, 200);
            p.smooth();
        };

        p.draw = () => {
            let colorEnd;
            if (angle === 0) {  
                colorEnd = p.color(128, 0, 128); 
            } else if (angle === 90) {  
                colorEnd = p.color(0, 128, 100); 
            } else if (angle === 180) {  
                colorEnd = p.color(128, 128, 128); 
            } else if (angle === 270) {  
                colorEnd = p.color(135, 206, 235); 
            }  
            p.background(colorEnd);

            p.translate(200, 100);
            p.rotate(p.radians(angle));
            p.fill(255);
            p.triangle(0, -50, -40, 50, 40, 50);


            p.push();
            p.rotate(-p.radians(angle));

            p.strokeWeight(3);
            p.stroke(3);
            p.textSize(30);
            p.fill(0);
            p.textAlign(p.CENTER, p.CENTER);
            var direccion;
            if (angle === 0) {
                direccion = "Norte";
                p.text("N", 0, 15);
            } else if (angle === 90) {
                direccion = "Este";
                p.text("E", -15, 0);
            } else if (angle === 180) {
                direccion = "Sur";
                p.text("S", 0, -15);
            } else if (angle === 270) {
                direccion = "Oeste";
                p.text("O", 15, 0);
            }


            p.fill(0);
            p.strokeWeight(0);
            p.stroke(0);
            p.textSize(27);
            p.textAlign(p.CENTER, p.CENTER);
            p.fill(0);
            p.text("Dirección del Viento: "+direccion, 0, -70);

            p.pop();
            

        };
    };

    return (
        <div className="App">
            <header className="App-header">
                <ReactP5Wrapper sketch={sketch} />
            </header>
        </div>
    );
}

export default DirVento;
