const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: El id autogenerado del usuario
 *         name:
 *           type: string
 *           description: El nombre del usuario
 *         email:
 *           type: string
 *           description: El email del usuario
 *         password:
 *           type: string
 *           description: La contraseña del usuario
 *         role:
 *           type: string
 *           enum: [admin, technician, viewer]
 *           default: viewer
 *           description: El rol del usuario
 *       example:
 *         name: Juan Perez
 *         email: juan@ejemplo.com
 *         password: contraseñasecreta
 *         role: admin
 */

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor agregue un nombre']
    },
    email: {
        type: String,
        required: [true, 'Por favor agregue un email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Por favor agregue un email válido'
        ]
    },
    password: {
        type: String,
        required: [true, 'Por favor agregue una contraseña'],
        minlength: 6,
        select: false // Don't return password by default
    },
    role: {
        type: String,
        enum: ['admin', 'technician', 'viewer'],
        default: 'viewer'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Reverse populate with virtuals
userSchema.virtual('devices', {
    ref: 'Device',
    localField: '_id',
    foreignField: 'ownerId',
    justOne: false
});

module.exports = mongoose.model('User', userSchema);
