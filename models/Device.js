const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Device:
 *       type: object
 *       required:
 *         - serialNumber
 *         - ownerId
 *         - zoneId
 *       properties:
 *         id:
 *           type: string
 *           description: El id autogenerado del dispositivo
 *         serialNumber:
 *           type: string
 *           description: El número de serie del dispositivo
 *         model:
 *           type: string
 *           description: El modelo del dispositivo
 *         ownerId:
 *           type: string
 *           description: El ID del usuario propietario del dispositivo
 *         zoneId:
 *           type: string
 *           description: El ID de la zona donde está instalado el dispositivo
 *         installedAt:
 *           type: string
 *           format: date-time
 *           description: La fecha de instalación
 *         status:
 *           type: string
 *           enum: [active, maintenance, offline]
 *           description: El estado del dispositivo
 *         sensors:
 *           type: array
 *           items:
 *             type: string
 *           description: Lista de IDs de sensores adjuntos al dispositivo
 *       example:
 *         serialNumber: SN123456
 *         model: IoT-Gateway-X
 *         ownerId: 60d0fe4f5311236168a109ca
 *         zoneId: 60d0fe4f5311236168a109cb
 *         status: active
 */

const deviceSchema = new mongoose.Schema({
    serialNumber: {
        type: String,
        required: [true, 'Por favor agregue un número de serie'],
        unique: true
    },
    model: {
        type: String
    },
    ownerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Por favor agregue un propietario']
    },
    zoneId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Zone',
        required: [true, 'Por favor agregue una zona']
    },
    installedAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'maintenance', 'offline'],
        default: 'active'
    },
    sensors: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Sensor'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Device', deviceSchema);
