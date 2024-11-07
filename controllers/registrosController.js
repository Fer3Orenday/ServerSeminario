// controllers/userController.js
const Registro = require('../models/registros');

// Crear un nuevo usuario
const createRegistro = async (req, res) => {
    try {
        const registro = new Registro(req.body);
        await registro.save();
        res.status(201).json(registro);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Obtener todos los usuarios
const getRegistro = async (req, res) => {
    try {
        const registros = await Registro.find();
        res.status(200).json(registros);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Exportar las funciones para que estén disponibles
module.exports = { createRegistro, getRegistro };
