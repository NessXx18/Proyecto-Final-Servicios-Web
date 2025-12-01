const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SmartCity Lab - Plataforma IoT API',
      version: '1.0.0',
      description: 'API Backend para la Plataforma IoT SmartCity Lab',
      contact: { name: 'Soporte SmartCity Lab' },
    },
    servers: [
      {
        url: 'https://proyecto-final-servicios-web.onrender.com',
        description: 'Servidor producción',
      },
    ],
  },
  apis: [
    path.join(__dirname, '../routes/*.js'),   // Ajusta según tu estructura
    path.join(__dirname, '../models/*.js'),
  ],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
