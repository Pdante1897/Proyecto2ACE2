#ifndef SENSORCO2
#define SENSORCO2
const int pinMQ = A2;
int valorMQ = 0;
int ContadorCO2 = 0;
String mensajeCO2 = "";
bool limpiezaAire = false;

void MedirCO2()
{
    valorMQ = analogRead(pinMQ);
    Serial.print("G7_CO2: ");
    Serial.println(valorMQ);
    // Serial.println(" ppm");
    if (valorMQ >= 100)
    {
        // Serial.println("La concentración de CO2 es alta");
        ContadorCO2++;
    }
    else
    {
        if (limpiezaAire == true)
        {
            limpiezaAire = false;
            Serial.print("G7_Mesaje: ");
            Serial.println("La concentración de CO2 es normal");
            mensajeCO2 = "";
            ContadorCO2 = 0;
            apagarVentilador();
        }
    }

    switch (ContadorCO2)
    {
    case 4:
        mensajeCO2 = "La habitación cuenta con una calidad de aire deficiente";
        Serial.print("G7_Mesaje: ");
        Serial.println(mensajeCO2);
        break;
    case 8:
        mensajeCO2 = "limpieza del aire de la habitación activado";
        Serial.print("G7_Mesaje: ");
        Serial.println(mensajeCO2);
        limpiezaAire = true;
        encenderVentilador();
        break;
    default:
        mensajeCO2 = "";
        // Serial.println(mensajeCO2);
        break;
    }
}
#endif