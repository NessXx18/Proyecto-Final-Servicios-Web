const zoneService = require('../services/zoneService');
const asyncHandler = require('../middlewares/async');

// Get
exports.getZones = asyncHandler(async (req, res, next) => {
    const zones = await zoneService.getZones();
    res.status(200).json({ success: true, count: zones.length, data: zones });
});

// GetById
exports.getZone = asyncHandler(async (req, res, next) => {
    const zone = await zoneService.getZoneById(req.params.id);
    res.status(200).json({ success: true, data: zone });
});

// Create
exports.createZone = asyncHandler(async (req, res, next) => {
    const zone = await zoneService.createZone(req.body);
    res.status(201).json({ success: true, data: zone });
});

// Update
exports.updateZone = asyncHandler(async (req, res, next) => {
    const zone = await zoneService.updateZone(req.params.id, req.body);
    res.status(200).json({ success: true, data: zone });
});

// Delete
exports.deleteZone = asyncHandler(async (req, res, next) => {
    await zoneService.deleteZone(req.params.id);
    res.status(200).json({ success: true, data: {} });
});
