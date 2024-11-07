const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
    },
    institution: {
        type: String,
        required: true,
    },
    years: {
        type: Number,
        required: true,
    },
});

const User = mongoose.model('Registro', registroSchema);

module.exports = User;
