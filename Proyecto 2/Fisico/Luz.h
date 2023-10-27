#ifndef LUZ
#define LUZ
const int LED=A6;
bool estadoLuz=true;

void setupLuz(){
    pinMode(LED,OUTPUT);
    digitalWrite(LED,HIGH);
}

void encenderLuz(){
    digitalWrite(LED,HIGH);
    estadoLuz = true;
}

void apagarLuz(){
    digitalWrite(LED,LOW);
    estadoLuz = false;
}

#endif