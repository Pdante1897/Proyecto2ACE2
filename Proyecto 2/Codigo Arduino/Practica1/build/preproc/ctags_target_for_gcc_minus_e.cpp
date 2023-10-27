# 1 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica1\\Practica1.ino"
# 2 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica1\\Practica1.ino" 2
# 3 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica1\\Practica1.ino" 2
# 4 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica1\\Practica1.ino" 2
# 5 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica1\\Practica1.ino" 2
void setup()
{
    // Inicializa el monitor serie.
    Serial.begin(9600);
    // Inicializa el pin del LDR como entrada.
    pinMode(pinLDR, 0x0);
    // Inicializa el pin del MQ como entrada.
    pinMode(pinMQ, 0x0);
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
