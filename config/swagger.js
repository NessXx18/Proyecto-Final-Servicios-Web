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
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo',
      },
    ],
  },
  apis: [
    path.join(__dirname, '../routes/*.js'),
    path.join(__dirname, '../models/*.js'),
  ],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
