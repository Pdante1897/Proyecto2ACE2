#include "ESP8266.h"
#include <ArduinoJson.h>
#include "Luz.h"
#include "Ventilador.h"
#include "SensorLuz.h"
#include "SensorCO2.h"
#include "SensorHumTemp.h"
#include "SensorInfrarojo.h"
//#include "Wifi.h"
#include "Puerta.h"
void setup()
{
    
    // Inicializa el monitor serie.
    Serial.begin(9600);
    //Serial1.begin(115200);
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
    apagarVentilador();
    // Inicializa modulo wifi.
    //inicializarWifi();
    // Inicializa el pin del servo como salida.
    inicializarPuerta();
}

void loop()
{

    medirLuz();
    MedirCO2();//ya
    MedirTemperatura();
    DetectarPrecencia();
    //Postxd();
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