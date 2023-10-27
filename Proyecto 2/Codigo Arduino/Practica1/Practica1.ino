#include <ArduinoJson.h>
#include "SensorLuz.h"
#include "SensorCO2.h"
#include "SensorHumTemp.h"
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