const express = require('express');
const {
    getDevices,
    getDevice,
    createDevice,
    updateDevice,
    deleteDevice
} = require('../controllers/deviceController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Devices
 *   description: API de gestión de dispositivos
 */

/**
 * @swagger
 * /api/devices:
 *   get:
 *     summary: Retorna la lista de todos los dispositivos
 *     tags: [Devices]
 *     responses:
 *       200:
 *         description: La lista de dispositivos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Device'
 *   post:
 *     summary: Crear un nuevo dispositivo
 *     tags: [Devices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Device'
 *     responses:
 *       201:
 *         description: El dispositivo fue creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Device'
 *       500:
 *         description: Algún error del servidor
 */
router.route('/')
    .get(getDevices)
    .post(createDevice);

/**
 * @swagger
 * /api/devices/{id}:
 *   get:
 *     summary: Obtener el dispositivo por id
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id del dispositivo
 *     responses:
 *       200:
 *         description: La descripción del dispositivo por id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Device'
 *       404:
 *         description: El dispositivo no fue encontrado
 *   put:
 *     summary: Actualizar el dispositivo por el id
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id del dispositivo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Device'
 *     responses:
 *       200:
 *         description: El dispositivo fue actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Device'
 *       404:
 *         description: El dispositivo no fue encontrado
 *       500:
 *         description: Ocurrió algún error
 *   delete:
 *     summary: Eliminar el dispositivo por id
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id del dispositivo
 *     responses:
 *       200:
 *         description: El dispositivo fue eliminado
 *       404:
 *         description: El dispositivo no fue encontrado
 */
router.route('/:id')
    .get(getDevice)
    .put(updateDevice)
    .delete(deleteDevice);

module.exports = router;
