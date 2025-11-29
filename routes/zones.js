const express = require('express');
const {
    getZones,
    getZone,
    createZone,
    updateZone,
    deleteZone
} = require('../controllers/zoneController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Zones
 *   description: API de gestión de zonas
 */

/**
 * @swagger
 * /api/zones:
 *   get:
 *     summary: Retorna la lista de todas las zonas
 *     tags: [Zones]
 *     responses:
 *       200:
 *         description: La lista de zonas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Zone'
 *   post:
 *     summary: Crear una nueva zona
 *     tags: [Zones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Zone'
 *     responses:
 *       201:
 *         description: La zona fue creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Zone'
 *       500:
 *         description: Algún error del servidor
 */
router.route('/')
    .get(getZones)
    .post(createZone);

/**
 * @swagger
 * /api/zones/{id}:
 *   get:
 *     summary: Obtener la zona por id
 *     tags: [Zones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id de la zona
 *     responses:
 *       200:
 *         description: La descripción de la zona por id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Zone'
 *       404:
 *         description: La zona no fue encontrada
 *   put:
 *     summary: Actualizar la zona por el id
 *     tags: [Zones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id de la zona
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Zone'
 *     responses:
 *       200:
 *         description: La zona fue actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Zone'
 *       404:
 *         description: La zona no fue encontrada
 *       500:
 *         description: Ocurrió algún error
 *   delete:
 *     summary: Eliminar la zona por id
 *     tags: [Zones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id de la zona
 *     responses:
 *       200:
 *         description: La zona fue eliminada
 *       404:
 *         description: La zona no fue encontrada
 */
router.route('/:id')
    .get(getZone)
    .put(updateZone)
    .delete(deleteZone);

module.exports = router;
