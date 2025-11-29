const userService = require('../services/userService');
const asyncHandler = require('../middlewares/async');

// @desc      Get all users
// @route     GET /api/users
// @access    Public
exports.getUsers = asyncHandler(async (req, res, next) => {
    const users = await userService.getUsers();
    res.status(200).json({ success: true, count: users.length, data: users });
});

// @desc      Get single user
// @route     GET /api/users/:id
// @access    Public
exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json({ success: true, data: user });
});

// @desc      Create new user
// @route     POST /api/users
// @access    Public
exports.createUser = asyncHandler(async (req, res, next) => {
    const user = await userService.createUser(req.body);
    res.status(201).json({ success: true, data: user });
});

// @desc      Update user
// @route     PUT /api/users/:id
// @access    Public
exports.updateUser = asyncHandler(async (req, res, next) => {
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json({ success: true, data: user });
});

// @desc      Delete user
// @route     DELETE /api/users/:id
// @access    Public
exports.deleteUser = asyncHandler(async (req, res, next) => {
    await userService.deleteUser(req.params.id);
    res.status(200).json({ success: true, data: {} });
});
