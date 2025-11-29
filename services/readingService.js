const Reading = require('../models/Reading');
const ErrorResponse = require('../utils/errorResponse');

exports.createReading = async (readingData) => {
    const reading = await Reading.create(readingData);
    return reading;
};

exports.getReadings = async () => {
    const readings = await Reading.find().populate('sensorId');
    return readings;
};

exports.getReadingById = async (id) => {
    const reading = await Reading.findById(id).populate('sensorId');
    if (!reading) {
        throw new ErrorResponse(`Lectura no encontrada con id ${id}`, 404);
    }
    return reading;
};

exports.updateReading = async (id, updateData) => {
    const reading = await Reading.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
    });
    if (!reading) {
        throw new ErrorResponse(`Lectura no encontrada con id ${id}`, 404);
    }
    return reading;
};

exports.deleteReading = async (id) => {
    const reading = await Reading.findByIdAndDelete(id);
    if (!reading) {
        throw new ErrorResponse(`Lectura no encontrada con id ${id}`, 404);
    }
    return reading;
};
