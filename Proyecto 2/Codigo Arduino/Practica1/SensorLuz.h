#ifndef SENSORLUZ
#define SENSORLUZ
const int pinLDR = A1;
const float luxConversionFactor = 0.01;
float valorLux = 0;
void medirLuz()
{
    // Lee la señal del LDR.
    float valorLDR = analogRead(pinLDR);
    // Convierte el valor del LDR en lúmenes.
    valorLux = valorLDR * luxConversionFactor;
    // Imprime el valor de los lúmenes en el monitor serie.
    Serial.print("Cantidad de luz: ");
    Serial.println(valorLux);
}
#endif