const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const connectDB = require('./config/db');
const swaggerSpecs = require('./config/swagger');
const errorHandler = require('./middlewares/error');

dotenv.config();

// Conexión a BD
connectDB();

const users = require('./routes/users');
const zones = require('./routes/zones');
const devices = require('./routes/devices');
const sensors = require('./routes/sensors');
const readings = require('./routes/readings');

const app = express();

// Body parser
app.use(express.json());

// CORS
// CORS (Configuración completa para producción)
app.use(cors({
    origin: ["https://proyecto-final-servicios-web.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Uso de routers
app.use('/api/users', users);
app.use('/api/zones', zones);
app.use('/api/devices', devices);
app.use('/api/sensors', sensors);
app.use('/api/readings', readings);

// Swagger Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en modo ${process.env.NODE_ENV} en el puerto ${PORT}`);
    console.log(`Documentación Swagger disponible en http://localhost:${PORT}/api-docs`);
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});

module.exports = server;
