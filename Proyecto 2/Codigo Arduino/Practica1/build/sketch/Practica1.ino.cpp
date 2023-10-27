#include <Arduino.h>
#line 1 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica1\\Practica1.ino"
#include <ArduinoJson.h>
#include "SensorLuz.h"
#include "SensorCO2.h"
#include "SensorHumTemp.h"
#line 5 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica1\\Practica1.ino"
void setup();
#line 17 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica1\\Practica1.ino"
void loop();
#line 5 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica1\\Practica1.ino"
void setup()
{
    // Inicializa el monitor serie.
    Serial.begin(9600);
    // Inicializa el pin del LDR como entrada.
    pinMode(pinLDR, INPUT);
    // Inicializa el pin del MQ como entrada.
    pinMode(pinMQ, INPUT);
    // Inicializa el sensor DHT.
    dht.begin();
}

void loop()
{
    medirLuz();
    MedirCO2();
    MedirHumedad();
    MedirTemperatura();
    DynamicJsonDocument doc(1024);
    doc["Temperatura"] = temperatura;
    doc["Humedad"] = humedad;
    doc["CO2"] = valorMQ;
    doc["Luz"] = valorLux;
    serializeJson(doc, Serial);
    Serial.println();

    delay(5000);
}
