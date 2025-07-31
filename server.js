const app = require('./app/app')
const config = require('./app/config/configuracion')
const conexion = require('./app/config/conexion')

conexion.connet()

app.listen(config.PORT,()=>{
    console.log(`server is running on port ${config.PORT}`);
})