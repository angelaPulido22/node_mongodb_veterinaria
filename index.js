const mongoose = require('mongoose')
const app = require('./app')

mongoose.connect('mongodb://127.0.0.1:27017/veterinaria')
  .then(() => {
    console.log('Conectado a la base de datos veterinaria')
    app.listen(app.get('port'), () => {
      console.log(`Servidor en http://localhost:${app.get('port')}`)
    })
  })
  .catch(err => console.error('Error de conexión:', err))