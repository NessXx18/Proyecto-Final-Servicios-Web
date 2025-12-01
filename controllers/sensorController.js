const sensorService = require('../services/sensorService');
const asyncHandler = require('../middlewares/async');

// Get
exports.getSensors = asyncHandler(async (req, res, next) => {
    const sensors = await sensorService.getSensors();
    res.status(200).json({ success: true, count: sensors.length, data: sensors });
});

// GetById
exports.getSensor = asyncHandler(async (req, res, next) => {
    const sensor = await sensorService.getSensorById(req.params.id);
    res.status(200).json({ success: true, data: sensor });
});

// Create
exports.createSensor = asyncHandler(async (req, res, next) => {
    const sensor = await sensorService.createSensor(req.body);
    res.status(201).json({ success: true, data: sensor });
});

// Update
exports.updateSensor = asyncHandler(async (req, res, next) => {
    const sensor = await sensorService.updateSensor(req.params.id, req.body);
    res.status(200).json({ success: true, data: sensor });
});

// Delete
exports.deleteSensor = asyncHandler(async (req, res, next) => {
    await sensorService.deleteSensor(req.params.id);
    res.status(200).json({ success: true, data: {} });
});
