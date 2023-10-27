const mqtt = require('mqtt');

let get = true;

const Topic = "G7_CO2:";

const sub = mqtt.connect('mqtt://localhost:9000');

sub.on('connect', () => {
    sub.subscribe(Topic);
});

sub.on('message', async (topic, message) => {
    console.log('topic: ', topic ,' msj: ' + message.toString());
});
