const express = require('express')
const router = express.Router()
const controller = require('../controllers/mascota')

router.get('/mascotas', controller.getMascotas)
router.get('/mascotas/:id', controller.getMascota)
router.post('/mascotas', controller.saveMascota)
router.put('/mascotas/:id', controller.updateMascota)
router.delete('/mascotas/:id', controller.deleteMascota)

module.exports = router