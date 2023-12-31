#line 1 "G:\\Archivos\\Escritorio\\Proyecto2ACE2\\Proyecto 2\\Fisico\\SensorInfraRojo.h"
#ifndef SENSORINFRAROJO
#define SENSORINFRAROJO
const int pinTrig = A5;
const int pinEcho = A4;
int value = 0;
int ContadorIR = 0;
String mensajeI = "";

void DetectarPrecencia()
{
    // Generar un pulso corto en el pin Trig
    digitalWrite(pinTrig, LOW);
    delayMicroseconds(2);
    digitalWrite(pinTrig, HIGH);
    delayMicroseconds(10);
    digitalWrite(pinTrig, LOW);

    // Medir la duración del pulso en el pin Echo
    int duration = pulseIn(pinEcho, HIGH);

    value = duration * 0.034 / 2; // lectura digital de pin

    if (value <= 10)
    {
        //Serial.println("Obstaculo Detectado");
        mensajeI = "";
        ContadorIR = 0;
    }
    else
    {
        //Serial.println("No hay obstaculo");
        ContadorIR++;
    }

    if (estadoLuz)
    {
        switch (ContadorIR)
        {
        case 4:
            mensajeI = "La habitación está iluminada pero no hay nadie en ella";
            Serial.print("G7_Mesaje: ");
            Serial.println(mensajeI);
            break;
        case 8:
            apagarLuz();
            mensajeI = "Se apagara el sistema de iluminación";
            Serial.print("G7_Mesaje: ");
            Serial.println(mensajeI);
            break;
        default:
            mensajeI = "";
            //Serial.println(mensajeI);
            break;
        }
    }else{
        mensajeI = "";
    }
}
#endif