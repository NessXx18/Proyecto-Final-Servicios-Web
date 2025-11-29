const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Zone:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: El id autogenerado de la zona
 *         name:
 *           type: string
 *           description: El nombre de la zona
 *         description:
 *           type: string
 *           description: La descripción de la zona
 *         isActive:
 *           type: boolean
 *           description: El estado de la zona
 *       example:
 *         name: Centro
 *         description: El área del centro de la ciudad
 *         isActive: true
 */

const zoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor agregue un nombre'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        maxlength: [500, 'La descripción no puede tener más de 500 caracteres']
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

module.exports = mongoose.model('Zone', zoneSchema);
