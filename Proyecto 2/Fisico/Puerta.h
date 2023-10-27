#ifndef PUERTA
#define PUERTA
#include <Servo.h>
Servo servoMotor;
const int PinPuerta=A7;

void inicializarPuerta(){
    servoMotor.attach(PinPuerta);
    servoMotor.write(0);
}

void abrirPuerta(){
    servoMotor.write(180);
    Serial.print("G7_Mesaje: ");
    Serial.println("Puerta abierta");
}

void cerrarPuerta(){
    servoMotor.write(0);
    Serial.print("G7_Mesaje: ");
    Serial.println("Puerta cerrada");
}

#endif