function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);

  var list = new Array();
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
        var norte = 0;
        var sur = 0;
        var este = 0;
        var oeste = 0;
        for (var i = 0; i < response.length; i++) {
          console.log(response[i].DV)
          if (response[i].DV == "Norte") {
            norte = 1;
          }
          if (response[i].DV == "Sur") {
            sur = 1;
          }
          if (response[i].DV == "Este") {
            este = 1;
          }
          if (response[i].DV == "Oeste") {
            oeste = 1;
          }
        }

        //Centro en X, Y
        centerX = window.innerWidth / 2;
        centerY = window.innerHeight / 2;
        //Pintar puntos
        if(norte == 1){
          fill(232, 15, 15);
          circle(centerX, centerY-250, 25);
        }
        if(sur == 1){
          fill(232, 15, 15 );
          circle(centerX, centerY+250, 25);
        }
        if(este == 1){
          //(centerX, centerY, centerX+250, centerY);
          fill(232, 15, 15 );
          circle(centerX+250, centerY, 25);
        }
        if(oeste == 1){
          //line(centerX, centerY, centerX-250, centerY);
          fill(232, 15, 15 );
          circle(centerX-250, centerY, 25);
        }

        if(norte == 1 && este == 1){
          line(centerX, centerY-250, centerX+250, centerY);
        }
        if(norte == 1 && oeste == 1){
          line(centerX, centerY-250, centerX-250, centerY);
        }

        if(sur == 1 && este == 1){
          line(centerX, centerY+250, centerX+250, centerY);
        }
        if(sur == 1 && oeste == 1){
          line(centerX, centerY+250, centerX-250, centerY);
        }
        
        if(sur == 0 && oeste == 1 && este == 1){
          line(centerX+250, centerY, centerX-250, centerY);
        }
        if((oeste == 0 || este == 0) && norte == 1 && sur){
          line(centerX, centerY-250, centerX, centerY+250);
        }

        //Titulo
        textSize(50);
        fill(37, 87, 174);
        text("Direcciones del viento", centerX - 230, 50);

        //Color de gráfica
        fill(0,0,0,0);
        stroke(52, 203, 216);

        //Circulos principales
        //        x        y      r
        circle(centerX, centerY, 600);
        circle(centerX, centerY, 550);
        circle(centerX, centerY, 500);
        circle(centerX, centerY, 450);
        circle(centerX, centerY, 400);
        circle(centerX, centerY, 350);
        circle(centerX, centerY, 300);

        //Direcciones
        textSize(40);
        fill(37, 87, 174);
        text("N", centerX, centerY - 305);
        text("S", centerX, centerY + 335);
        text("E", centerX + 300, centerY);
        text("O", centerX - 335, centerY);

      } else {
        console.log("No hay respuesta");
      }
    })


}

function draw() {


}
