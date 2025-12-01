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
 *       examples:
 *         ejemplo1:
 *           summary: Lectura de temperatura en rango normal
 *           value:
 *             sensorId: 60d0fe4f5311236168a109dd
 *             time: "2025-01-15T08:30:00Z"
 *             value: 22.8
 *         ejemplo2:
 *           summary: Lectura de humedad alta
 *           value:
 *             sensorId: 60d0fe4f5311236168a109de
 *             time: "2025-01-15T08:31:00Z"
 *             value: 78.2
 *         ejemplo3:
 *           summary: Lectura de presión en un sensor industrial
 *           value:
 *             sensorId: 60d0fe4f5311236168a109df
 *             time: "2025-01-15T08:32:00Z"
 *             value: 101.3
 *         ejemplo4:
 *           summary: Lectura anormal fuera de rango (posible alerta)
 *           value:
 *             sensorId: 60d0fe4f5311236168a109e0
 *             time: "2025-01-15T08:33:00Z"
 *             value: -5.4
 *         ejemplo5:
 *           summary: Lectura de CO2 en espacio cerrado
 *           value:
 *             sensorId: 60d0fe4f5311236168a109e2
 *             time: "2025-01-15T08:34:00Z"
 *             value: 450.7
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
