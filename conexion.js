const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/veterinaria')
  .then(() => console.log('Conectado a la base de datos veterinaria'))
  .catch(err => console.error('Error de conexión:', err))