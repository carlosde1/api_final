const mongoose = require('mongoose');
const CONFIG = require('./configuracion');

module.exports = {
  connection: null,
  connect: function () {
    if (this.connection) return this.connection;

    return mongoose.connect(process.env.MONGO_URL || CONFIG.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(conn => {
      this.connection = conn;
      console.log('Conexión a MongoDB realizada con éxito');
    })
    .catch(e => {
      console.error('Error en la conexión:', e);
    });
  },
};