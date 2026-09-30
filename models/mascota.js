const mongoose = require('mongoose')

const MascotaSchema = mongoose.Schema({
  nombre: String,
  especie: String,
  raza: String,
  edad: Number,
  propietario: String
})

module.exports = mongoose.model('Mascota', MascotaSchema, 'mascotas')