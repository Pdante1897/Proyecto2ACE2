import { React } from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

function Graph() {
    const sketch = (p5) => {
        let points = [];

        p5.setup = () => {
            p5.createCanvas(400, 400);
            p5.background(0);

            // Generamos las posiciones aleatorias de los puntos
            for (let i = 0; i < 10; i++) {
                //xVal = [1,2,3,4,5,6,7,8,9];
                //yVal = [1,8,6,10,4,3,2,1,4];


                if (i == 0) {
                    let x = 50;
                    let y = 350;
                    points.push({ x, y });
                } else {
                    
                    let x = p5.random(p5.width - 50) + 50; // Para que los puntos estén dentro de los ejes
                    let y = p5.random(p5.height - 100) + 50; // Restamos 25 para que estén arriba del eje "tiempo"
                    points.push({ x, y });
                }
            }
        };

        p5.draw = () => {

            p5.background(0);
            // Dibujamos los ejes y sus etiquetas
            p5.push(); 
            p5.strokeWeight(3);
            p5.stroke(255,0,0);
            p5.line(50, 0, 50, p5.height);
            p5.line(0, p5.height - 50, p5.width, p5.height - 50);
            p5.pop();
            
            p5.push();
            p5.fill(0,255,255);
            p5.textSize(30);
            p5.strokeWeight(0);
            p5.textAlign(p5.CENTER, p5.CENTER);
            p5.text('Tiempo', 200, p5.height - 25);
            p5.pop();

            p5.push();
            p5.strokeWeight(0);
            p5.fill(0,255,0);
            p5.textSize(25);
            p5.translate(30, 250);
            p5.rotate(-p5.HALF_PI);
            p5.text('Temperatura', 0, 0);
            p5.pop();

            // Dibujamos los puntos en las posiciones previamente generadas
            p5.fill(255);
            for (let i = 1; i < points.length; i++) {
                let { x, y } = points[i];
                p5.ellipse(x, y, 10, 10);
                p5.push();
                p5.fill(255);
                p5.textSize(10);
                p5.stroke(1)
                p5.text(`(${(x-50).toFixed(2)}, ${(350-y).toFixed(2)})`, x + 5, y + 5);
                p5.pop();
            }

            // Ordenamos los puntos de izquierda a derecha
            points.sort((a, b) => a.x - b.x);

            // Encontramos el punto de partida en el eje tiempo
            let start = points[0];
            for (let i = 1; i < points.length; i++) {
                if (points[i].y > start.y) {
                    start = points[i];
                }
            }

            // Creamos un nuevo array con los puntos en el orden deseado
            let orderedPoints = [start];
            let lastPoint = start;
            while (orderedPoints.length < points.length) {
                let closest = null;
                for (let i = 0; i < points.length; i++) {
                    let candidate = points[i];
                    if (candidate === lastPoint) {
                        continue;
                    }
                    if (!orderedPoints.includes(candidate) &&
                        (closest === null || candidate.x < closest.x)) {
                        closest = candidate;
                    }
                }
                orderedPoints.push(closest);
                lastPoint = closest;
            }

            // Dibujamos la línea que une todos los puntos
            p5.strokeWeight(3);
            p5.stroke(255);
            p5.noFill();
            p5.beginShape();
            p5.vertex(start.x, start.y);
            for (let i = 1; i < orderedPoints.length; i++) {
                let { x, y } = orderedPoints[i];
                p5.vertex(x, y);
                p5.push();
                p5.fill(255);
                p5.textSize(10);
                p5.stroke(1)
                p5.text(`(${(x-50).toFixed(2)}, ${(350-y).toFixed(2)})`, x + 5, y + 5);
                p5.pop();
              }
            p5.endShape();
        };
    };

    return (
        <div>
            <ReactP5Wrapper sketch={sketch} />
        </div>
    );
}

export default Graph;