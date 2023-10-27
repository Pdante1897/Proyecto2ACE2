const mqtt = require('mqtt');
const {MongoClient} = require('mongodb');
let get = true;

const Topic = "Data2:";

const sub = mqtt.connect('mqtt://localhost:9000');

sub.on('connect', () => {
    sub.subscribe(Topic);
});

sub.on('message', async (topic, message) => {
    console.log('topic: ', topic ,' msj: ' + message.toString());
});