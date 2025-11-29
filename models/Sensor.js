const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Sensor:
 *       type: object
 *       required:
 *         - type
 *         - unit
 *       properties:
 *         id:
 *           type: string
 *           description: El id autogenerado del sensor
 *         type:
 *           type: string
 *           enum: [temperature, humidity, co2, noise]
 *           description: El tipo de sensor
 *         unit:
 *           type: string
 *           enum: [°C, %, ppm]
 *           description: La unidad de medida
 *         model:
 *           type: string
 *           description: El modelo del sensor
 *         location:
 *           type: string
 *           description: La ubicación específica del sensor
 *         isActive:
 *           type: boolean
 *           description: El estado del sensor
 *       example:
 *         type: temperature
 *         unit: °C
 *         model: TempSensor-2000
 *         location: Pared Norte
 *         isActive: true
 */

const sensorSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['temperature', 'humidity', 'co2', 'noise'],
        required: [true, 'Por favor agregue un tipo de sensor']
    },
    unit: {
        type: String,
        enum: ['°C', '%', 'ppm', 'dB'],
        required: [true, 'Por favor agregue una unidad']
    },
    model: {
        type: String
    },
    location: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Sensor', sensorSchema);
