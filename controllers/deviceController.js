const deviceService = require('../services/deviceService');
const asyncHandler = require('../middlewares/async');

// @desc      Get all devices
// @route     GET /api/devices
// @access    Public
exports.getDevices = asyncHandler(async (req, res, next) => {
    const devices = await deviceService.getDevices();
    res.status(200).json({ success: true, count: devices.length, data: devices });
});

// @desc      Get single device
// @route     GET /api/devices/:id
// @access    Public
exports.getDevice = asyncHandler(async (req, res, next) => {
    const device = await deviceService.getDeviceById(req.params.id);
    res.status(200).json({ success: true, data: device });
});

// @desc      Create new device
// @route     POST /api/devices
// @access    Public
exports.createDevice = asyncHandler(async (req, res, next) => {
    const device = await deviceService.createDevice(req.body);
    res.status(201).json({ success: true, data: device });
});

// @desc      Update device
// @route     PUT /api/devices/:id
// @access    Public
exports.updateDevice = asyncHandler(async (req, res, next) => {
    const device = await deviceService.updateDevice(req.params.id, req.body);
    res.status(200).json({ success: true, data: device });
});

// @desc      Delete device
// @route     DELETE /api/devices/:id
// @access    Public
exports.deleteDevice = asyncHandler(async (req, res, next) => {
    await deviceService.deleteDevice(req.params.id);
    res.status(200).json({ success: true, data: {} });
});
