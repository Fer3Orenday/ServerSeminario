// controllers/authController.js
const User = require('../models/user');

// Función para manejar el login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar al usuario por email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        // Verificar la contraseña
        if (user.password !== password) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        res.json({
            message: 'Login exitoso',
            user: {
                name: user.name,
                email: user.email,
                type: user.type,
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

module.exports = { loginUser };
