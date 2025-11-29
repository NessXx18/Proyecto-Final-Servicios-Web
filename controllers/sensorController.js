const sensorService = require('../services/sensorService');
const asyncHandler = require('../middlewares/async');

// @desc      Get all sensors
// @route     GET /api/sensors
// @access    Public
exports.getSensors = asyncHandler(async (req, res, next) => {
    const sensors = await sensorService.getSensors();
    res.status(200).json({ success: true, count: sensors.length, data: sensors });
});

// @desc      Get single sensor
// @route     GET /api/sensors/:id
// @access    Public
exports.getSensor = asyncHandler(async (req, res, next) => {
    const sensor = await sensorService.getSensorById(req.params.id);
    res.status(200).json({ success: true, data: sensor });
});

// @desc      Create new sensor
// @route     POST /api/sensors
// @access    Public
exports.createSensor = asyncHandler(async (req, res, next) => {
    const sensor = await sensorService.createSensor(req.body);
    res.status(201).json({ success: true, data: sensor });
});

// @desc      Update sensor
// @route     PUT /api/sensors/:id
// @access    Public
exports.updateSensor = asyncHandler(async (req, res, next) => {
    const sensor = await sensorService.updateSensor(req.params.id, req.body);
    res.status(200).json({ success: true, data: sensor });
});

// @desc      Delete sensor
// @route     DELETE /api/sensors/:id
// @access    Public
exports.deleteSensor = asyncHandler(async (req, res, next) => {
    await sensorService.deleteSensor(req.params.id);
    res.status(200).json({ success: true, data: {} });
});
