const readingService = require('../services/readingService');
const asyncHandler = require('../middlewares/async');

// Get
exports.getReadings = asyncHandler(async (req, res, next) => {
    const readings = await readingService.getReadings();
    res.status(200).json({ success: true, count: readings.length, data: readings });
});

// GetById
exports.getReading = asyncHandler(async (req, res, next) => {
    const reading = await readingService.getReadingById(req.params.id);
    res.status(200).json({ success: true, data: reading });
});

// Create
exports.createReading = asyncHandler(async (req, res, next) => {
    const reading = await readingService.createReading(req.body);
    res.status(201).json({ success: true, data: reading });
});

// Update
exports.updateReading = asyncHandler(async (req, res, next) => {
    const reading = await readingService.updateReading(req.params.id, req.body);
    res.status(200).json({ success: true, data: reading });
});

// Delete
exports.deleteReading = asyncHandler(async (req, res, next) => {
    await readingService.deleteReading(req.params.id);
    res.status(200).json({ success: true, data: {} });
});
