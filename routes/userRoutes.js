// routes/userRoutes.js
const express = require('express');
const { createUser, getUsers, deleteUser } = require('../controllers/userController');
const { createRegistro, getRegistro, deleteRegistro } = require('../controllers/registrosController');
const { loginUser } = require('../controllers/authController');

const router = express.Router();

// Definir las rutas
router.post('/users', createUser);  // Ruta para crear un nuevo usuario
router.get('/users', getUsers);     // Ruta para obtener todos los usuarios
router.post('/login', loginUser);
router.get('/registros', getRegistro);
router.post('/registros', createRegistro);
router.delete('/users/:id', deleteUser);
router.delete('/registros/:id', deleteRegistro);

module.exports = router;
