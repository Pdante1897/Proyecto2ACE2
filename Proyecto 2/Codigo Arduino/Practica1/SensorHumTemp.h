#ifndef SENSORHUMTEMP
#define SENSORHUMTEMP
#include "DHT.h"
#define DHTPIN A3
#define DHTTYPE DHT11
float humedad = 0;
float temperatura = 0;
DHT dht(DHTPIN, DHTTYPE);
const int pinDHT = 2;
void MedirHumedad()
{
    humedad = dht.readHumidity();
    Serial.print("Humedad: ");
    Serial.print(humedad);
    Serial.println(" %");
}
void MedirTemperatura()
{
    temperatura = dht.readTemperature();
    Serial.print("Temperatura: ");
    Serial.print(temperatura);
    Serial.println(" °C");
}
#endif