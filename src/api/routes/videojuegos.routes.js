const express = require('express')

const {getVideojuegos, postVideojuegos, putVideojuegos, deleteVideojuegos} = require('../controllers/videojuegos.controllers')

const videojuegosRoutes = express.Router();
videojuegosRoutes.get('/', getVideojuegos)
videojuegosRoutes.post('/', postVideojuegos)
videojuegosRoutes.put('/:id', putVideojuegos)
videojuegosRoutes.delete('/:id', deleteVideojuegos)



module.exports = videojuegosRoutes;