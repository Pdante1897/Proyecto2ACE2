# 1 "G:\\Archivos\\Escritorio\\Proyecto2ACE2\\Proyecto 2\\Fisico\\Fisico.ino"
# 2 "G:\\Archivos\\Escritorio\\Proyecto2ACE2\\Proyecto 2\\Fisico\\Fisico.ino" 2
# 3 "G:\\Archivos\\Escritorio\\Proyecto2ACE2\\Proyecto 2\\Fisico\\Fisico.ino" 2
# 4 "G:\\Archivos\\Escritorio\\Proyecto2ACE2\\Proyecto 2\\Fisico\\Fisico.ino" 2
# 5 "G:\\Archivos\\Escritorio\\Proyecto2ACE2\\Proyecto 2\\Fisico\\Fisico.ino" 2
# 6 "G:\\Archivos\\Escritorio\\Proyecto2ACE2\\Proyecto 2\\Fisico\\Fisico.ino" 2
# 7 "G:\\Archivos\\Escritorio\\Proyecto2ACE2\\Proyecto 2\\Fisico\\Fisico.ino" 2
# 8 "G:\\Archivos\\Escritorio\\Proyecto2ACE2\\Proyecto 2\\Fisico\\Fisico.ino" 2
# 9 "G:\\Archivos\\Escritorio\\Proyecto2ACE2\\Proyecto 2\\Fisico\\Fisico.ino" 2
//#include "Wifi.h"
# 11 "G:\\Archivos\\Escritorio\\Proyecto2ACE2\\Proyecto 2\\Fisico\\Fisico.ino" 2
void setup()
{

    // Inicializa el monitor serie.
    Serial.begin(9600);
    //Serial1.begin(115200);
    // Inicializa el pin del LDR como entrada.
    pinMode(pinLDR, 0x0);
    // Inicializa el pin del MQ como entrada.
    pinMode(pinMQ, 0x0);
    // Inicializa el sensor DHT.
    dht.begin();
    // Inicializa el sensor Infrarojo
    pinMode(pinTrig, 0x1);
    pinMode(pinEcho, 0x0);
    // Inicializa el pin del LED como salida.
    setupLuz();
    // Inicializar ventilador
    pinMode(PinVent, 0x1);
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
# 57 "G:\\Archivos\\Escritorio\\Proyecto2ACE2\\Proyecto 2\\Fisico\\Fisico.ino"
}
