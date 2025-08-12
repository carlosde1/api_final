const app = require('./app/app');
const config = require('./app/config/configuracion');
const conexion = require('./app/config/conexion');
const swaggerDocs = require('./swagger');

conexion.connect();

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
    swaggerDocs(app, config.PORT); // Aquí usas el puerto real
});