function setup() {
    var list = new Array();
    createCanvas(window.innerWidth, window.innerHeight);
    puntos = [];

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
                for (var i = 0; i < response.length; i++) {
                    list[i] = parseFloat(response[i].HR);
                }

                //console.log(list);

                for (var i = 0; i < list.length; i++) {
                    puntos[i] = new GPoint(i, list[i]);
                }

                //console.log(puntos);

                plot = new GPlot(this);
                plot.setPos(0, 0);
                plot.setOuterDim(width, height);

                //Se agregan los puntos
                plot.setPoints(puntos);
                //Color de los puntos
                plot.setPointColor(color(19, 211, 25));

                //Titulo de la gráfica
                plot.setTitleText("Humedad relativa a lo largo del tiempo");
                //Titulo en X
                plot.getXAxis().setAxisLabelText("Tiempo (min)");
                //Titulo en Y
                plot.getYAxis().setAxisLabelText("Humedad Relativa (HR)");

                //Dibujamos los puntos
                plot.defaultDraw();
            } else {
                console.log("No hay respuesta");
            }
        })
}


function draw() {
    //  background(220);
}