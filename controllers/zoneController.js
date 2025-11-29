const zoneService = require('../services/zoneService');
const asyncHandler = require('../middlewares/async');

// @desc      Get all zones
// @route     GET /api/zones
// @access    Public
exports.getZones = asyncHandler(async (req, res, next) => {
    const zones = await zoneService.getZones();
    res.status(200).json({ success: true, count: zones.length, data: zones });
});

// @desc      Get single zone
// @route     GET /api/zones/:id
// @access    Public
exports.getZone = asyncHandler(async (req, res, next) => {
    const zone = await zoneService.getZoneById(req.params.id);
    res.status(200).json({ success: true, data: zone });
});

// @desc      Create new zone
// @route     POST /api/zones
// @access    Public
exports.createZone = asyncHandler(async (req, res, next) => {
    const zone = await zoneService.createZone(req.body);
    res.status(201).json({ success: true, data: zone });
});

// @desc      Update zone
// @route     PUT /api/zones/:id
// @access    Public
exports.updateZone = asyncHandler(async (req, res, next) => {
    const zone = await zoneService.updateZone(req.params.id, req.body);
    res.status(200).json({ success: true, data: zone });
});

// @desc      Delete zone
// @route     DELETE /api/zones/:id
// @access    Public
exports.deleteZone = asyncHandler(async (req, res, next) => {
    await zoneService.deleteZone(req.params.id);
    res.status(200).json({ success: true, data: {} });
});
