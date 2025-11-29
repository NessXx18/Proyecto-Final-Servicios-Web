const express = require('express');
const {
    getReadings,
    getReading,
    createReading,
    updateReading,
    deleteReading
} = require('../controllers/readingController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Readings
 *   description: API de gestión de lecturas
 */

/**
 * @swagger
 * /api/readings:
 *   get:
 *     summary: Retorna la lista de todas las lecturas
 *     tags: [Readings]
 *     responses:
 *       200:
 *         description: La lista de lecturas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reading'
 *   post:
 *     summary: Crear una nueva lectura
 *     tags: [Readings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reading'
 *     responses:
 *       201:
 *         description: La lectura fue creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reading'
 *       500:
 *         description: Algún error del servidor
 */
router.route('/')
    .get(getReadings)
    .post(createReading);

/**
 * @swagger
 * /api/readings/{id}:
 *   get:
 *     summary: Obtener la lectura por id
 *     tags: [Readings]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id de la lectura
 *     responses:
 *       200:
 *         description: La descripción de la lectura por id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reading'
 *       404:
 *         description: La lectura no fue encontrada
 *   put:
 *     summary: Actualizar la lectura por el id
 *     tags: [Readings]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id de la lectura
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reading'
 *     responses:
 *       200:
 *         description: La lectura fue actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reading'
 *       404:
 *         description: La lectura no fue encontrada
 *       500:
 *         description: Ocurrió algún error
 *   delete:
 *     summary: Eliminar la lectura por id
 *     tags: [Readings]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id de la lectura
 *     responses:
 *       200:
 *         description: La lectura fue eliminada
 *       404:
 *         description: La lectura no fue encontrada
 */
router.route('/:id')
    .get(getReading)
    .put(updateReading)
    .delete(deleteReading);

module.exports = router;
