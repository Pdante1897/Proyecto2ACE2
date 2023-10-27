#line 1 "G:\\Archivos\\Escritorio\\Proyecto2ACE2\\Proyecto 2\\Fisico\\Ventilador.h"
#ifndef VENTILADOR
#define VENTILADOR
const int PinVent=3;

void encenderVentilador(){
    analogWrite(PinVent,0);
    //Serial.println("Ventilador encendido");

}

void apagarVentilador(){
    analogWrite(PinVent,255);
    //Serial.println("Ventilador apagado");
}

void vel1(){
    analogWrite(PinVent,100);
    //Serial.println("Velocidad 1");
}

void vel2(){
    analogWrite(PinVent,0);
    //Serial.println("Velocidad 2");
}

#endif