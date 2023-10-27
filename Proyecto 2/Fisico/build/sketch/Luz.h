#line 1 "G:\\Archivos\\Escritorio\\Proyecto2ACE2\\Proyecto 2\\Fisico\\Luz.h"
#ifndef LUZ
#define LUZ
const int LED=A6;
bool estadoLuz=true;

void setupLuz(){
    pinMode(LED,OUTPUT);
    digitalWrite(LED,HIGH);
    //Serial.println("Luz inicializada");

}

void encenderLuz(){
    digitalWrite(LED,HIGH);
    estadoLuz = true;
    Serial.print("G7_Mesaje: ");
    Serial.println("Luz encendida");
}

void apagarLuz(){
    digitalWrite(LED,LOW);
    estadoLuz = false;
    Serial.print("G7_Mesaje: ");
    Serial.println("Luz apagada");
}

#endif