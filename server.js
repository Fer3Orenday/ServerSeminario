// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware para habilitar CORS
app.use(cors());  // Esto habilita CORS para todos los orígenes

// Middleware para leer el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Conectado a MongoDB');
    })
    .catch((err) => {
        console.error('Error de conexión a MongoDB:', err);
    });

// Usar las rutas definidas en el archivo userRoutes.js
app.use('/api', userRoutes);

// Configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
