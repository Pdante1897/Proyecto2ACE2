const express = require('express');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline')
const { Conexion } = require('./conexion.js');
const cors = require('cors');
const bodyParser = require('body-parser');

const conexion1 = new Conexion();
const app = express();
app.use(bodyParser.json({limit:'50mb', extended:true}))
app.use(bodyParser.urlencoded({limit:'50mb', extended:true}))
app.use(cors());
//app.use(express.json());
const port = 5000;
app.listen(port, () => console.log('Servidor escuchando en puerto ', port));
/*
const conexionSerial = new SerialPort({
    path: 'COM7',
    baudRate: 9600,
    highWaterMark: 128,
    dataBits: 8,
    stopBits: 1,
    parity: 'none',
});


//conexionSerial.on('open', () => {
    console.log("Puerto Abierto");
//});


let dataBuffer = '';

function processData(data) {
    console.log("Recibiendo datos: " + data.toString());
    if (data) {
        try {

            const info = JSON.parse(data.toString());
            info['time'] = new Date().toLocaleString();
            console.log(info)
            currentData = info
            Conexion.insertData(info);

        } catch (err) {
            console.log('ERROR')
        }
    }
}

/*
conexionSerial.open(() => {

    const parser = conexionSerial.pipe(new ReadlineParser({ delimiter: '\r\n' }));
    parser.on('data', data =>{
    console.log("Recibiendo datos: " + data.toString());
    if (data) {
        try {

            const info = JSON.parse(data.toString());
            info['time'] = new Date().toLocaleString();
            console.log(info)
            currentData = info
            Conexion.insertData(info);

        } catch (error) {
            console.log('ERROR')
        }
    }
})
});
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


conexionSerial.on('error', (err) => {
    console.log("Error:" + err);
});*/


let currentData = {
    temp: 0.0,
    lumin: 0.0,
    humedad: 0.0,
    co2: 0.0,
    time: '00/00/0000, 0:00:00 AM'
}

app.get('/', (req, res) => {
    res.json("Hola Mundo");
});
app.get('/obtenerDataInsertActual', (req, res) => {
    res.json(currentData);
});


app.get('/ObtenerInformacion', async (req, res) => {
    const data = await Conexion.getLastItems();
    res.json(data);
    console.log(data);
});

let caracter = '';

app.post('/appmovil', (req, res) =>{
	let datos = req.body;
	//caracter = datos['caracter'];
	console.log(datos.Activa);
	activar = datos.Activa;
	res.send("metodo post");
});


app.get('/appmovil', (req, res) =>{
	console.log("metodo get");
	console.log(req.body.Activa);
	res.send("Metodo get");
});

let tiemporeal;

let mensajes = [];

let activar = '0';

app.get('/mensajes', (req, res) =>{
	let listamen = mensajes;
	mensajes = [];
	res.json(listamen);
});



app.post('/insertarData', cors(),(req, res) => {
    try {

       /* temperatura = req.body.Temperatura;
        luz = req.body.Luz;
        co2 = req.body.CO2;
        mensaje = req.body.Mensaje;

        let datos = {
            temperatura: temperatura,
            luz: luz,
            co2: co2,
            mensaje: mensaje
        }
	//let datos = req.body;
        console.log(req.body);*/
	let datos = req.body;
	tiemporeal = datos; 
	console.log(datos);
	Conexion.insertData(datos);
	if (datos.Mensaje != ' - ') {mensajes.push(datos.Mensaje)}
	let activacion = activar;
	activar = '0'
        res.send(activacion);
    } catch (error) {
        console.log("");
        console.log(error);
    }
});

app.get('/tiemporeal', (req, res)=>{
	res.send(tiemporeal)
});
