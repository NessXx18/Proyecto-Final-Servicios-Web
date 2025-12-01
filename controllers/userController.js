const userService = require('../services/userService');
const asyncHandler = require('../middlewares/async');

// Get
exports.getUsers = asyncHandler(async (req, res, next) => {
    const users = await userService.getUsers();
    res.status(200).json({ success: true, count: users.length, data: users });
});

// GetById
exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json({ success: true, data: user });
});

// Create
exports.createUser = asyncHandler(async (req, res, next) => {
    const user = await userService.createUser(req.body);
    res.status(201).json({ success: true, data: user });
});

// Update
exports.updateUser = asyncHandler(async (req, res, next) => {
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json({ success: true, data: user });
});

// Delete
exports.deleteUser = asyncHandler(async (req, res, next) => {
    await userService.deleteUser(req.params.id);
    res.status(200).json({ success: true, data: {} });
});
