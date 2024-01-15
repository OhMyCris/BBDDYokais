const express = require('express')

const {getYokais, postYokais, putYokais, deleteYokais} = require('../controllers/yokai.controllers')

const yokaiRoutes = express.Router();
yokaiRoutes.get('/', getYokais)
yokaiRoutes.post('/', postYokais)
yokaiRoutes.put('/:id', putYokais)
yokaiRoutes.delete('/:id', deleteYokais)



module.exports = yokaiRoutes;