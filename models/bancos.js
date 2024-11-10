const mongoose = require('mongoose');

const bancosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    interes: {
        type: String,
        required: true
    },
    anio: {
        type: [Number],  // Cambiado a un arreglo de números
        required: true,
    },
    enganche: {
        type: String,
        required: true,
    },
});

const Bancos = mongoose.model('Bancos', bancosSchema);

module.exports = Bancos;
