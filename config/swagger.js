const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');

const SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://proyecto-final-servicios-web.onrender.com/api'
    : 'http://localhost:3000/api';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SmartCity Lab - Plataforma IoT API',
      version: '1.0.0',
      description: 'API Backend para la Plataforma IoT SmartCity Lab',
    },
    servers: [
      {
        url: SERVER_URL,
        description:
          process.env.NODE_ENV === 'production'
            ? 'Servidor de producción'
            : 'Servidor local',
      },
    ],
  },
  apis: [
    path.join(__dirname, '../routes/*.js'),
    path.join(__dirname, '../models/*.js'),
  ],
};

module.exports = swaggerJsdoc(options);
