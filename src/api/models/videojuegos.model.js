const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videojuegoSchema = new Schema(
    {
        nombre:{type: String, required: true, trim: true},
        genero:{type: String, required: true, trim: true},
        año:{type: Number, required: true, trim: true},
        yokais:[{type: Schema.Types.ObjectId, ref: 'yokai'}]
    }, {
        timestamps:true //te genera la fecha de creacion y modificacion del objeto
    }
)

const Videojuego = mongoose.model('videojuego', videojuegoSchema);

module.exports = Videojuego;