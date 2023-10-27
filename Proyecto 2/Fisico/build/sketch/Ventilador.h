#line 1 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica2\\Ventilador.h"
#ifndef VENTILADOR
#define VENTILADOR
const int PinVent=3;

void encenderVentilador(){
    analogWrite(PinVent,255);
}

void apagarVentilador(){
    analogWrite(PinVent,0);
}

void vel1(){
    analogWrite(PinVent,150);
}

void vel2(){
    analogWrite(PinVent,255);
}

#endif