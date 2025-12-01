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
 *       examples:
 *         ejemplo1:
 *           summary: Dispositivo activo para monitoreo ambiental
 *           value:
 *             serialNumber: SN000111
 *             model: EnviroMonitor-200
 *             ownerId: 60d0fe4f5311236168a109ca
 *             zoneId: 60d0fe4f5311236168a109cb
 *             installedAt: "2025-01-10T09:30:00Z"
 *             status: active
 *             sensors:
 *               - 60d0fe4f5311236168a109cd
 *               - 60d0fe4f5311236168a109ce
 *         ejemplo2:
 *           summary: Gateway industrial en mantenimiento
 *           value:
 *             serialNumber: SN000222
 *             model: Indus-Gate-Pro
 *             ownerId: 60d0fe4f5311236168a109cf
 *             zoneId: 60d0fe4f5311236168a109d2
 *             installedAt: "2025-02-01T10:00:00Z"
 *             status: maintenance
 *             sensors:
 *               - 60d0fe4f5311236168a109e1
 *         ejemplo3:
 *           summary: Dispositivo desconectado en zona remota
 *           value:
 *             serialNumber: SN000333
 *             model: RemoteLink-500
 *             ownerId: 60d0fe4f5311236168a109f1
 *             zoneId: 60d0fe4f5311236168a109f2
 *             installedAt: "2024-12-15T15:45:00Z"
 *             status: offline
 *             sensors: []
 *         ejemplo4:
 *           summary: Dispositivo con múltiples sensores IoT
 *           value:
 *             serialNumber: SN000444
 *             model: MultiSense-Hub
 *             ownerId: 60d0fe4f5311236168a109f3
 *             zoneId: 60d0fe4f5311236168a109f4
 *             installedAt: "2025-03-05T08:10:00Z"
 *             status: active
 *             sensors:
 *               - 60d0fe4f5311236168a109d5
 *               - 60d0fe4f5311236168a109d6
 *               - 60d0fe4f5311236168a109d7
 *         ejemplo5:
 *           summary: Dispositivo básico con datos mínimos
 *           value:
 *             serialNumber: SN000555
 *             model: Basic-IoT-Node
 *             ownerId: 60d0fe4f5311236168a109aa
 *             zoneId: 60d0fe4f5311236168a109bb
 *             status: active
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
