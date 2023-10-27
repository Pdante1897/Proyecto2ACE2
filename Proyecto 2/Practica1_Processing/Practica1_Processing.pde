import grafica.*;

//Para el estilo de letra
PFont mifont;

//Prueba
int[] y = {5,10,50};
int[] x = {1,2,3};

int[] y2 = {5,10,20};
int[] x2 = {4,8,3};


/*Graficar un cuadro con un color*/ 
void graficar_cuadro(int r, int g, int b, int x, int y, int l, int a){
  //RGB - largo - ancho
  fill(r,g,b);
  rect(x,y,l,a);
}

/*Graficar todas las gráficas lineales*/
void graficas_tiempo(String title, String xAxis, String yAxis, int[]x_val, int[]y_val){
   // Prepare the points for the plot
  int nPoints = 200;
  GPointsArray points = new GPointsArray(nPoints);

  for (int i = 0; i < x_val.length; i++) {
    points.add(x_val[i], y_val[i]); //Aquí se agregan los puntos xy
  }

  //Posición de la gráfica
  GPlot plot = new GPlot(this, 270, 50, 700, 500);

  plot.setTitleText(title); //Titulo de la grafica
  plot.getXAxis().setAxisLabelText(xAxis); //Titulo X
  plot.getYAxis().setAxisLabelText(yAxis); //Titulo Y
  

  // Se agregan los puntos 
  plot.setPoints(points);
  plot.setPointColor(color(35, 202, 181)); //Cambio de color a los puntos
  plot.activateZooming();
  plot.activatePanning();

  // Dibujamos
  plot.defaultDraw();
}

/*Botón - Grafica Temperatura Ambiente*/
void boton_temperatura_ambiente(){
  // 1. Dibujar el boton borde negro relleno gris
  fill(128);
  stroke(0);
  fill(24, 197, 243);
  //    x  y    w    h
  rect(40, 100, 210, 50);
  // 2. Dibujar el texto del boton color negro
  fill(0);
  //                            x+6  y+h-10
  text("Temperatura Ambiente", 40+6, 100+50-10);
  // verificar si se dio click en el boton
  //          x              x+w                 y               y+h
  if(mouseX > 40 && mouseX < 40+210 && mouseY > 100 && mouseY < 100+50 && mousePressed==true) {
    // si hubo click en el botón borrar la pantalla con color blanco
    graficas_tiempo("Temperatura ambiente a lo largo del tiempo", "Tiempo", "Temperatura", x, y); 
  } 
}

/*Botón - Grafica Humedad Relativa*/
void boton_humedad_relativa(){
  // 1. Dibujar el boton borde negro relleno gris
  fill(128);
  stroke(0);
  fill(24, 197, 243);
  //    x  y    w    h
  rect(40, 175, 210, 50);
  // 2. Dibujar el texto del boton color negro
  fill(0);
  //                        x+6  y+h-10
  text("Humedad Relativa", 40+6, 175+50-10);
  // verificar si se dio click en el boton
  //          x              x+w                 y               y+h
  if(mouseX > 40 && mouseX < 40+210 && mouseY > 175 && mouseY < 175+50 && mousePressed==true) {
    // si hubo click en el botón borrar la pantalla con color blanco
    graficas_tiempo("Humedad relativa a lo largo del tiempo", "Tiempo", "Humedad Relativa", x2, y2);  
  } 
}

/*Botón - Grafica Humedad Relativa*/
void boton_humedad_absoluta(){
  // 1. Dibujar el boton borde negro relleno gris
  fill(128);
  stroke(0);
  fill(24, 197, 243);
  //    x  y    w    h
  rect(40, 250, 210, 50);
  // 2. Dibujar el texto del boton color negro
  fill(0);
  //                        x+6  y+h-10
  text("Humedad Absoluta", 40+6, 250+50-10);
  // verificar si se dio click en el boton
  //          x              x+w                 y               y+h
  if(mouseX > 40 && mouseX < 40+210 && mouseY > 250 && mouseY < 250+50 && mousePressed==true) {
    // si hubo click en el botón borrar la pantalla con color blanco
    graficas_tiempo("Humedad absoluta a lo largo del tiempo", "Tiempo", "Humedad Absoluta", x2, y2);    
  } 
}

/*Botón - Grafica Velocidad del viento*/
void boton_velocidad_viento(){
  // 1. Dibujar el boton borde negro relleno gris
  fill(128);
  stroke(0);
  fill(24, 197, 243);
  //    x  y    w    h
  rect(40, 325, 210, 50);
  // 2. Dibujar el texto del boton color negro
  fill(0);
  //                        x+6  y+h-10
  text("Velocidad del Viento", 40+6, 325+50-10);
  // verificar si se dio click en el boton
  //          x              x+w                 y               y+h
  if(mouseX > 40 && mouseX < 40+210 && mouseY > 325 && mouseY < 325+50 && mousePressed==true) {
    // si hubo click en el botón borrar la pantalla con color blanco
    graficas_tiempo("Velocidad del viento a lo largo del tiempo", "Tiempo", "Velocidad", x2, y2);  
  } 
}

/*Botón - Grafica Presión Barométrica*/
void boton_presion_barometrica(){
  // 1. Dibujar el boton borde negro relleno gris
  fill(128);
  stroke(0);
  fill(24, 197, 243);
  //    x  y    w    h
  rect(40, 475, 210, 50);
  // 2. Dibujar el texto del boton color negro
  fill(0);
  //                        x+6  y+h-10
  text("Presion Barometrica", 40+6, 475+50-10);
  // verificar si se dio click en el boton
  //          x              x+w                 y               y+h
  if(mouseX > 40 && mouseX < 40+210 && mouseY > 475 && mouseY < 475+50 && mousePressed==true) {
    // si hubo click en el botón borrar la pantalla con color blanco
    graficas_tiempo("Presión Barométrica a lo largo del tiempo", "Tiempo", "Presión Barométrica", x2, y2);  
  } 
}

/*Botón - Grafica Dirección del viento*/
void boton_direccion_viento(){
  // 1. Dibujar el boton borde negro relleno gris
  fill(128);
  stroke(0);
  fill(24, 197, 243);
  //    x  y    w    h
  rect(40, 400, 210, 50);
  // 2. Dibujar el texto del boton color negro
  fill(0);
  //                        x+6  y+h-10
  text("Dirección del Viento", 40+6, 400+50-10);
  // verificar si se dio click en el boton
  //          x              x+w                 y               y+h
  if(mouseX > 40 && mouseX < 40+210 && mouseY > 400 && mouseY < 400+50 && mousePressed==true) {
    // si hubo click en el botón borrar la pantalla con color blanco
     
  } 
}

void setup(){
  // mifont = loadFont("Candara-Light-30.vlw"); //Cargar fuente
  // textFont(mifont,11);                       //Aplicar fuente
  
  size(1000,600);                 //Tamaño ancho-largo
  surface.setLocation(100,100);   //Localización de la ventana
  surface.setTitle("Weather");    //Titulo del documento
  surface.setResizable(false);    //Resizable
  background(32, 94, 134);        //Color de fondo
  
}

void draw(){
  
  fill(200);
  textSize(20);
  text("Menú de Reportes", 40, 50);  // Texto
  
  boton_temperatura_ambiente();
  boton_humedad_relativa();
  boton_humedad_absoluta();
  boton_velocidad_viento();
  boton_direccion_viento();
  boton_presion_barometrica();
}
  
  
 
