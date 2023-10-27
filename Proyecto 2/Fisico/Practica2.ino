#include "ESP8266.h"
#include <ArduinoJson.h>
#include "Luz.h"
#include "Ventilador.h"
#include "SensorLuz.h"
#include "SensorCO2.h"
#include "SensorHumTemp.h"
#include "SensorInfrarojo.h"
#include "Wifi.h"

void setup()
{

    // Inicializa el monitor serie.
    Serial.begin(115200);
    Serial1.begin(115200);
    // Inicializa el pin del LDR como entrada.
    pinMode(pinLDR, INPUT);
    // Inicializa el pin del MQ como entrada.
    pinMode(pinMQ, INPUT);
    // Inicializa el sensor DHT.
    dht.begin();
    // Inicializa el sensor Infrarojo
    pinMode(pinTrig, OUTPUT);
    pinMode(pinEcho, INPUT);
    // Inicializa el pin del LED como salida.
    setupLuz();
    // Inicializar ventilador
    pinMode(PinVent, OUTPUT);
    // Inicializa modulo wifi.
    inicializarWifi();
    /*
    while (!Serial)
    {

    }

    Serial.println("Iniciando...");
    Serial1.begin(115200);
    Serial1.write("AT\r\n");
    */
}

void loop()
{
    /*
    if (Serial1.available())
    {
        Serial.write(Serial1.read());
    }
    if (Serial.available())
    {
        Serial1.write(Serial.read());
    }
    */
    medirLuz();
    MedirCO2();
    MedirTemperatura();
    DetectarPrecencia();
    Postxd();
    delay(5000);
    /*
    StaticJsonDocument<200> doc;
    doc["Temperatura"] = temperatura;
    doc["Luz"] = valorLux;
    doc["CO2"] = valorMQ;
    doc["Mensaje"] = "siuuuuuuuuuuuuuuuu";
    String jsonString;
    serializeJson(doc, jsonString);
    */
}