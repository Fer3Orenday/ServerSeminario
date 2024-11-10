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
const deleteRegistrosByEmail = async (req, res) => {
    try {
      const { email } = req.params;
      const registrosEliminados = await Registro.deleteMany({ user: email });
  
      if (registrosEliminados.deletedCount === 0) {
        return res.status(404).json({ message: 'No se encontraron registros para este usuario' });
      }
  
      res.status(200).json({ message: 'Registros eliminados exitosamente' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// Exportar las funciones para que estén disponibles
module.exports = { createRegistro, getRegistro, deleteRegistrosByEmail};
