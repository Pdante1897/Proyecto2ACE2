# 1 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica2\\Practica2.ino"
# 2 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica2\\Practica2.ino" 2
# 3 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica2\\Practica2.ino" 2
# 4 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica2\\Practica2.ino" 2
# 5 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica2\\Practica2.ino" 2
# 6 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica2\\Practica2.ino" 2
# 7 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica2\\Practica2.ino" 2
# 8 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica2\\Practica2.ino" 2
# 9 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica2\\Practica2.ino" 2
# 10 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica2\\Practica2.ino" 2

void setup()
{

    // Inicializa el monitor serie.
    Serial.begin(115200);
    Serial1.begin(115200);
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
# 42 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica2\\Practica2.ino"
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
# 56 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica2\\Practica2.ino"
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
# 71 "G:\\Archivos\\Escritorio\\Ingenieria\\Segundo Semestre 2023\\Arqui 2\\Practica2\\Practica2.ino"
}
