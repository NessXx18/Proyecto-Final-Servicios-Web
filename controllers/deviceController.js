const deviceService = require('../services/deviceService');
const asyncHandler = require('../middlewares/async');

// Get
exports.getDevices = asyncHandler(async (req, res, next) => {
    const devices = await deviceService.getDevices();
    res.status(200).json({ success: true, count: devices.length, data: devices });
});

// GetById
exports.getDevice = asyncHandler(async (req, res, next) => {
    const device = await deviceService.getDeviceById(req.params.id);
    res.status(200).json({ success: true, data: device });
});

// Create
exports.createDevice = asyncHandler(async (req, res, next) => {
    const device = await deviceService.createDevice(req.body);
    res.status(201).json({ success: true, data: device });
});

// Update
exports.updateDevice = asyncHandler(async (req, res, next) => {
    const device = await deviceService.updateDevice(req.params.id, req.body);
    res.status(200).json({ success: true, data: device });
});

// Delete
exports.deleteDevice = asyncHandler(async (req, res, next) => {
    await deviceService.deleteDevice(req.params.id);
    res.status(200).json({ success: true, data: {} });
});
