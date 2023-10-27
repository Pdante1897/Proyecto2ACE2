import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const AirQualityBarChart = () => {
    const canvasRef = useRef(null);
    const qualityValuesRef = useRef([]);
    const p5InstanceRef = useRef(null);

    useEffect(() => {
        const sketch = (p) => {
            let maxValue = 100;

            p.setup = () => {
                p.createCanvas(400, 250).parent(canvasRef.current);
            };

            p.draw = () => {
                p.background(220);
                p.noStroke();
                const barWidth = p.width / qualityValuesRef.current.length;

                for (let i = 0; i < qualityValuesRef.current.length; i++) {
                    const x = i * barWidth;
                    const barHeight = p.map(qualityValuesRef.current[i], 0, maxValue, 0, p.height - 50);
                    p.fill(100, p.map(qualityValuesRef.current[i], 0, maxValue, 255, 0), 0);
                    p.rect(x, p.height - barHeight - 50, barWidth, barHeight);
                }

                p.fill(0);
                p.textAlign(p.CENTER);
                p.textSize(30);
                p.text(`CO2 Value: ${qualityValuesRef.current[qualityValuesRef.current.length - 1]}`, p.width / 2, p.height - 10);
            };
        };

        p5InstanceRef.current = new p5(sketch);

        return () => {
            p5InstanceRef.current.remove();
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
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
                        const updatedQualityValues = [...qualityValuesRef.current];
                        const size = response.length;
                        const tmp = response[size - 1];
                        console.log(response);
                        console.log("size->>>>>>>> ", size);
                        console.log("infooo->>>>>>>> ", tmp);
                        

                        updatedQualityValues.push(response[size - 1].CO2);
                        if (updatedQualityValues.length > 10) {
                            updatedQualityValues.shift();
                        }
                        qualityValuesRef.current = updatedQualityValues;

                        if (p5InstanceRef.current) {
                            p5InstanceRef.current.redraw();
                        }
                    } else {
                        console.log("No hay respuesta");
                    }
                });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Calidad del Aire</h1>
                <div ref={canvasRef}></div>
            </header>
        </div>
    );
}

export default AirQualityBarChart;
