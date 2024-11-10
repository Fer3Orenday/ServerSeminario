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

// Eliminar un registro por ID
const deleteRegistro = async (req, res) => {
    try {
        const { id } = req.params;
        const registro = await Registro.findByIdAndDelete(id);

        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }

        res.status(200).json({ message: 'Registro eliminado exitosamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Exportar las funciones para que estén disponibles
module.exports = { createRegistro, getRegistro, deleteRegistro};
