const mosca = require ('mosca');
const port = 9000;

const broker = new mosca.Server({
    port: port
});

broker.on('ready', () => {
    console.log('Broker is ready on port ', port);
});

broker.on('clientConnected', (client) => {
    console.log('Client connected: ', client.id);
});

broker.on('clientDisconnected', (client) => {
    console.log('Client disconnected: ', client.id);
});

