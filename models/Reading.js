const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Reading:
 *       type: object
 *       required:
 *         - sensorId
 *         - value
 *       properties:
 *         id:
 *           type: string
 *           description: El id autogenerado de la lectura
 *         sensorId:
 *           type: string
 *           description: El ID del sensor
 *         time:
 *           type: string
 *           format: date-time
 *           description: La hora de la lectura
 *         value:
 *           type: number
 *           description: El valor de la lectura
 *       example:
 *         sensorId: 60d0fe4f5311236168a109cc
 *         value: 25.5
 */

const readingSchema = new mongoose.Schema({
    sensorId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Sensor',
        required: [true, 'Por favor agregue un ID de sensor']
    },
    time: {
        type: Date,
        default: Date.now
    },
    value: {
        type: Number,
        required: [true, 'Por favor agregue un valor']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Reading', readingSchema);
