const mongoose = require('mongoose');
const config=require('./configuracion')

module.exports={
    connection:null,
    connet : ()=>{
        if(this.connection)return this.connection;
        return mongoose.connect(config.DB)
        .then(conn=>{
            this.connection=conn;
            console.log('Conectado a la base de datos')
        })
        .catch(e => console.log('error en la conexion',e))
    }
}