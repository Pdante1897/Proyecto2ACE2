const mqtt = require('mqtt');
//------------Arduinos----------------
const {SerialPort, ReadlineParser} = require('serialport');
const port = new SerialPort({ 
    path: 'COM2', 
    baudRate: 9600, 
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

//----------------------------- pub -------------------------------

const pub = mqtt.connect('mqtt://54.152.221.118:9000');

pub.on('connect', () => {
    parser.on('data', (arduino_data) => {
        arduino_data = arduino_data.toString();
        arduino_data = arduino_data.split(' ');
        topic = arduino_data[0];
        dataEnv = arduino_data[1];
        pub.publish(topic, dataEnv);

    });
});

port.on('error', (err) => {
    console.log(err.message);
});

port.on('open', () => {
    console.log('Port open en COM2');
});

const TopicSub = "pub";

const sub = mqtt.connect("mqtt://54.152.221.118:9000");

sub.on("connect", () => {
  sub.subscribe(TopicSub);
});

sub.on("message", (topic, message) => {
  console.log("SUB:: topicSub: ", TopicSub, "  msj: ", message.toString());
});
