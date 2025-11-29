const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'SmartCity Lab - Plataforma IoT API',
            version: '1.0.0',
            description: 'API Backend para la Plataforma IoT SmartCity Lab',
            contact: {
                name: 'Soporte SmartCity Lab',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor de desarrollo',
            },
        ],
    },
    apis: ['./routes/*.js', './models/*.js'], // Files containing annotations
};

const specs = swaggerJsdoc(options);

module.exports = specs;
