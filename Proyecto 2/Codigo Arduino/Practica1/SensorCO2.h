#ifndef SENSORCO2
#define SENSORCO2
const int pinMQ = A2;
int valorMQ = 0;
void MedirCO2()
{
    valorMQ = analogRead(pinMQ);
    Serial.print("Cantidad de CO2: ");
    Serial.print(valorMQ);
    Serial.println(" ppm");
}
#endif 