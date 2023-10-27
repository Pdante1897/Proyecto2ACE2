#ifndef SENSORCO2
#define SENSORCO2
const int pinMQ = A2;
int valorMQ = 0;
int ContadorCO2 = 0;
String mensajeCO2 = "";

void MedirCO2()
{
    valorMQ = analogRead(pinMQ);
    //Serial.print("Cantidad de CO2: ");
    //Serial.print(valorMQ);
    //Serial.println(" ppm");
    if (valorMQ >= 200)
    {
        Serial.println("La concentración de CO2 es alta");
        ContadorCO2++;
    }else{
        //Serial.println("La concentración de CO2 es normal");
        mensajeCO2 = "";
        ContadorCO2 = 0;
        apagarVentilador(); 
    }

    switch (ContadorCO2)
        {
        case 4:
            mensajeCO2 = "La habitación cuenta con una calidad de aire deficiente";
            Serial.println(mensajeCO2);
            break;
        case 8:
            apagarLuz();
            mensajeCO2 = "limpieza del aire de la habitación activado";
            Serial.println(mensajeCO2);
            encenderVentilador();
            break;
        default:
            mensajeCO2 = "";
            Serial.println(mensajeCO2);
            break;
        }
}
#endif 