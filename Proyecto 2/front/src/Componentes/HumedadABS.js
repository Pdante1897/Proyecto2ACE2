import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';

const App = () => {
    const canvasRef = useRef(null);
    const [calidad, setCalidad] = useState(0);
    const numPoints = 200; // Número de puntos en la gráfica
    const history = Array.from({ length: numPoints }, () => 0); // Historial de valores
    const p5Instance = useRef(null); // Referencia a la instancia de p5

    useEffect(() => {
        const fetchData = () => {
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
                        const size = response.length;
                        const tmp = response[size - 1];
                        console.log(response);
                        console.log("size->>>>>>>> ", size);
                        console.log("infooo->>>>>>>> ", tmp);
                        setCalidad(response[size - 1].Luz);
                    } else {
                        console.log("No hay respuesta");
                    }
                });
        };

        const interval = setInterval(fetchData, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const sketch = (p) => {
            p.setup = () => {
                p.createCanvas(400, 200).parent(canvasRef.current);
            };

            p.draw = () => {
                p.background(220);
                p.noFill();
                p.beginShape();

                history.push(calidad / 10);
                history.shift();

                for (let i = 0; i < history.length; i++) {
                    const x = p.map(i, 0, history.length - 1, 0, p.width);
                    const y = p.map(history[i], 0, 10, p.height, 0); // Ajusta según tus necesidades
                    p.vertex(x, y);
                }
                p.endShape();


            };
        };

        if (!p5Instance.current) {
            p5Instance.current = new p5(sketch); // Crear una única instancia de p5
        }

        return () => {
            p5Instance.current.remove(); // Limpiar la instancia de p5 cuando el componente se desmonte
            p5Instance.current = null;
        };
    }, [calidad]);

    return (
        <div>
            <h1>Cantidad de Luz : {calidad}</h1>
            <div id="lightGraphContainer" ref={canvasRef}></div>
        </div>
    );
};

export default App;
