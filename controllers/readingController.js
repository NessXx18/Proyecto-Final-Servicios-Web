const readingService = require('../services/readingService');
const asyncHandler = require('../middlewares/async');

// @desc      Get all readings
// @route     GET /api/readings
// @access    Public
exports.getReadings = asyncHandler(async (req, res, next) => {
    const readings = await readingService.getReadings();
    res.status(200).json({ success: true, count: readings.length, data: readings });
});

// @desc      Get single reading
// @route     GET /api/readings/:id
// @access    Public
exports.getReading = asyncHandler(async (req, res, next) => {
    const reading = await readingService.getReadingById(req.params.id);
    res.status(200).json({ success: true, data: reading });
});

// @desc      Create new reading
// @route     POST /api/readings
// @access    Public
exports.createReading = asyncHandler(async (req, res, next) => {
    const reading = await readingService.createReading(req.body);
    res.status(201).json({ success: true, data: reading });
});

// @desc      Update reading
// @route     PUT /api/readings/:id
// @access    Public
exports.updateReading = asyncHandler(async (req, res, next) => {
    const reading = await readingService.updateReading(req.params.id, req.body);
    res.status(200).json({ success: true, data: reading });
});

// @desc      Delete reading
// @route     DELETE /api/readings/:id
// @access    Public
exports.deleteReading = asyncHandler(async (req, res, next) => {
    await readingService.deleteReading(req.params.id);
    res.status(200).json({ success: true, data: {} });
});
