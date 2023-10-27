#ifndef WIFI
#define WIFI

const char *SSID = "TIGO-49D9";
const char *PASSW = "4D9697500591";
const char *HOST_NAME = "18.215.233.6";
const int HOST_PORT = 5000;
ESP8266 wifi(Serial1);
void inicializarWifi()
{
    if (wifi.setOprToStationSoftAP())
    {
        Serial.print("to station + softap ok\r\n");
    }
    else
    {
        Serial.print("to station + softap err\r\n");
    }

    if (wifi.joinAP(SSID, PASSW))
    {
        Serial.print("Join AP success\r\n");
        Serial.print("IP:");
        Serial.println(wifi.getLocalIP().c_str());
    }
    else
    {
        Serial.print("Join AP failure\r\n");
    }

    if (wifi.disableMUX())
    {
        Serial.print("single ok\r\n");
    }
    else
    {
        Serial.print("single err\r\n");
    }
    Serial.print("setup end\r\n");
}
void Postxd()
{
    if (wifi.createTCP(HOST_NAME, HOST_PORT))
    {
        Serial.print("syncPomodoroSettings tcp ok.       ");
    }
    else
    {
        Serial.print("syncPomodoroSettings tcp failed\r\n");
        return;
    }

    String Salida;
    String mensaje = mensajeI + " - " + mensajeCO2;

    String body = "{";
    body += "\n\"Temperatura\":";
    body += (int)temperatura;
    body += ",\n\"Luz\":";
    body += (int)valorLux;
    body += ",\n\"CO2\":";
    body += valorMQ;
    body += ",\n\"Mensaje\":";
    body += "\""+mensaje+"\"";
    body += "}";

    Serial.println(body);

    // Construir la solicitud POST
    String request = "POST /insertarData HTTP/1.1\r\n";
    request += "Host: ";
    request += HOST_NAME;
    request += "\r\nAccept: application/json";
    request += "\r\nContent-Type: application/json";
    request += "\r\nContent-Length: ";
    request += body.length();
    request += "\r\n\r\n";
    request += body;

    //Serial.println(request);

    uint8_t buffer[800] = {0};
    wifi.send((const uint8_t *)request.c_str(), request.length());
    uint32_t len = wifi.recv(buffer, sizeof(buffer), 10000);

    if (len <= 0)
    {
        return;
    }
    for (uint32_t i = 0; i < len; i++)
    {
        char c = (char)buffer[i];
        Salida += c;
        //Serial.println(c);
    }
    Serial.println(Salida+"yi");
}

#endif