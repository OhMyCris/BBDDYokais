const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const yokaiSchema = new Schema(
    {
        nombre:{type: String, required: true, trim: true},
        tipo:{type: String, required: true, trim: true},
        desc:{type: String, required: true, trim: true},
        foto:{type: String, required: false, trim: true}
    }, {
        timestamps:true //te genera la fecha de creacion y modificacion del objeto
    }
)

const Yokai = mongoose.model('yokai', yokaiSchema);

module.exports = Yokai;