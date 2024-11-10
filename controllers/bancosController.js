// controllers/userController.js
const Bancos = require('../models/bancos');

// Crear un nuevo banco
const createBancos = async (req, res) => {
    try {
        const banco = new Bancos(req.body);
        await banco.save();
        res.status(201).json(banco);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Obtener todos los bancos
const getBancos = async (req, res) => {
    try {
        const bancos = await Bancos.find();
        res.status(200).json(bancos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Editar un banco existente
const editBancos = async (req, res) => {
    try {
        const { id } = req.params;  // Obtener el ID del banco a editar desde los parámetros de la URL
        const updates = req.body;  // Obtener los datos que se van a actualizar

        // Buscar el banco por ID y actualizarlo con los nuevos datos
        const banco = await Bancos.findByIdAndUpdate(id, updates, { new: true });

        if (!banco) {
            return res.status(404).json({ error: 'Banco no encontrado' });
        }

        res.status(200).json(banco);  // Devolver el banco actualizado
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Exportar las funciones
module.exports = { createBancos, getBancos, editBancos };
