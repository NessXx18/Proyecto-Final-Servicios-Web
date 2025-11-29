const express = require('express');
const {
    getSensors,
    getSensor,
    createSensor,
    updateSensor,
    deleteSensor
} = require('../controllers/sensorController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Sensors
 *   description: API de gestión de sensores
 */

/**
 * @swagger
 * /api/sensors:
 *   get:
 *     summary: Retorna la lista de todos los sensores
 *     tags: [Sensors]
 *     responses:
 *       200:
 *         description: La lista de sensores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sensor'
 *   post:
 *     summary: Crear un nuevo sensor
 *     tags: [Sensors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sensor'
 *     responses:
 *       201:
 *         description: El sensor fue creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sensor'
 *       500:
 *         description: Algún error del servidor
 */
router.route('/')
    .get(getSensors)
    .post(createSensor);

/**
 * @swagger
 * /api/sensors/{id}:
 *   get:
 *     summary: Obtener el sensor por id
 *     tags: [Sensors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id del sensor
 *     responses:
 *       200:
 *         description: La descripción del sensor por id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sensor'
 *       404:
 *         description: El sensor no fue encontrado
 *   put:
 *     summary: Actualizar el sensor por el id
 *     tags: [Sensors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id del sensor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sensor'
 *     responses:
 *       200:
 *         description: El sensor fue actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sensor'
 *       404:
 *         description: El sensor no fue encontrado
 *       500:
 *         description: Ocurrió algún error
 *   delete:
 *     summary: Eliminar el sensor por id
 *     tags: [Sensors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id del sensor
 *     responses:
 *       200:
 *         description: El sensor fue eliminado
 *       404:
 *         description: El sensor no fue encontrado
 */
router.route('/:id')
    .get(getSensor)
    .put(updateSensor)
    .delete(deleteSensor);

module.exports = router;
