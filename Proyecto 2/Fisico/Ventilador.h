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