const express = require('express');
const app = express();
const mqtt = require('mqtt');

const pub = mqtt.connect('mqtt://localhost:9000');

pub.on('connect', () => {
    console.log('Conectado a MQTT');
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.post('/send', (req, res) => {
    console.log("-----------Recibido-----------", req.body);

    const topic = 'pub';
    const message = '1.(Mensaje desde Expres msj: ' + req.body + ')';

    pub.publish(topic, message, (error) => {
        if(!error){
            console.log(`2.((Mensaje publicado en ${topic}: ${message}))`);
            res.send({mensaje: '3. Mensaje publicado en MQTT'});
        }else{
            console.log(`4. Error al publicar en ${topic}: ${error}`);
            res.status(500).send({mensaje: '5. Error al publicar en MQTT'});
        }
    });
});