const {MongoClient} = require('mongodb');
require('dotenv').config();
 
let mongoClient = new MongoClient(process.env.DATABASESTRING);//ruta del servidor de mongo db 
class Conexion {
    static insertData = async (data) => {
        try {

            await mongoClient.connect();
            console.log("Conexion realizada");
            let db = mongoClient.db();
            console.log("base de datos abierta");
            let collectionP = db.collection('informacion')
            console.log("tabla consultada")
            let result = await collectionP.insertOne(data);
            console.log("elemento Insertado: " + result)
        } catch (err) {
            dataBase.close();
            console.error(err)
            console.log('error en la base de datos')
        }
    }


    static getLastItems = async () => {
        await mongoClient.connect();
        const dataBase = mongoClient.db();
        const data = dataBase.collection('informacion');
        const arregloDatos = await data.find({}).toArray();
        return arregloDatos;
    }
}

exports.Conexion = Conexion;