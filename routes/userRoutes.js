// routes/userRoutes.js
const express = require('express');
const { createUser, getUsers, deleteUser } = require('../controllers/userController');
const { createRegistro, getRegistro, deleteRegistrosByEmail } = require('../controllers/registrosController');
const { loginUser } = require('../controllers/authController');
const { getBancos, createBancos, editBancos } = require('../controllers/bancosController');

const router = express.Router();

// Definir las rutas
router.post('/users', createUser);  // Ruta para crear un nuevo usuario
router.get('/users', getUsers);     // Ruta para obtener todos los usuarios
router.post('/login', loginUser);
router.get('/registros', getRegistro);
router.post('/registros', createRegistro);
router.get('/bancos', getBancos);
router.post('/bancos', createBancos);
router.put('/bancos/:id', editBancos);
router.delete('/users/:id', deleteUser);
router.delete('/registros/:email', deleteRegistrosByEmail);

module.exports = router;
