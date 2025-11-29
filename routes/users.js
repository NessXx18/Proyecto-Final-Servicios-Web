const express = require('express');
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API de gestión de usuarios
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retorna la lista de todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: La lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: El usuario fue creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Algún error del servidor
 */
router.route('/')
    .get(getUsers)
    .post(createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtener el usuario por id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id del usuario
 *     responses:
 *       200:
 *         description: La descripción del usuario por id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: El usuario no fue encontrado
 *   put:
 *     summary: Actualizar el usuario por el id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: El usuario fue actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: El usuario no fue encontrado
 *       500:
 *         description: Ocurrió algún error
 *   delete:
 *     summary: Eliminar el usuario por id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El id del usuario
 *     responses:
 *       200:
 *         description: El usuario fue eliminado
 *       404:
 *         description: El usuario no fue encontrado
 */
router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;
