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