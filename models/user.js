const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Por favor ingresa un correo válido']
    },
    password: {
        type: String,
        required: true
    },
    rfc: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        min: 0,
        max: 120
    },
    registerDate: {
        type: Date,
        default: Date.now
    },
    phone: {
        type: String,
        match: [/^\d{10}$/, 'El número de teléfono debe tener 10 dígitos']
    },
    type: {
        type: String,
        required: true,
        enum: ['admin', 'user'] // Opciones de tipo de usuario
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
