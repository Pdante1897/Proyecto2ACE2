const mqtt = require('mqtt');
const { Conexion } = require('./conexion.js');

let get = true;

const Topic = "G7_Mensaje:";

const sub = mqtt.connect('mqtt://localhost:9000');

sub.on('connect', () => {
    sub.subscribe(Topic);
});

sub.on('message', async (topic, message) => {
    data = {topic: topic, message: message.toString()}
    Conexion.insertData(data);
    console.log('topic: ', topic ,' msj: ' + message.toString());
});
