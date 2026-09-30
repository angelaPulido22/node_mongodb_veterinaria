const Mascota = require('../models/mascota')

const controller = {
  getMascotas: function (req, res) {
    Mascota.find({}).exec()
      .then(lista => res.status(200).json(lista))
      .catch(err => res.status(500).send({ message: `Error: ${err}` }))
  },

  getMascota: function (req, res) {
    Mascota.findById(req.params.id).exec()
      .then(data => {
        if (!data) return res.status(404).send({ message: 'Mascota no encontrada' })
        return res.status(200).json(data)
      })
      .catch(err => res.status(500).send({ message: `Error interno: ${err}` }))
  },

  saveMascota: function (req, res) {
    const { nombre, especie, raza, edad, dueno } = req.body
    if (!nombre || !especie) {
      return res.status(400).send({ message: 'Datos incompletos' })
    }
    const mascota = new Mascota({ nombre, especie, raza, edad, dueno })
    mascota.save()
      .then(guardada => res.status(200).json({ mascota: guardada }))
      .catch(err => res.status(500).send({ message: `Error al guardar: ${err}` }))
  },

  updateMascota: function (req, res) {
    Mascota.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
      .then(actualizada => {
        if (!actualizada) return res.status(404).send({ message: 'La mascota no existe' })
        return res.status(200).send({ mascota: actualizada })
      })
      .catch(err => res.status(500).send({ message: `Error al actualizar: ${err}` }))
  },

  deleteMascota: function (req, res) {
    Mascota.findByIdAndDelete(req.params.id)
      .then(eliminada => {
        if (!eliminada) return res.status(404).send({ message: 'La mascota no existe' })
        return res.status(200).send({ mascota: eliminada })
      })
      .catch(err => res.status(500).send({ message: `Error al eliminar: ${err}` }))
  }
}

module.exports = controller