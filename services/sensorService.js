const Sensor = require('../models/Sensor');
const ErrorResponse = require('../utils/errorResponse');

exports.createSensor = async (sensorData) => {
    const sensor = await Sensor.create(sensorData);
    return sensor;
};

exports.getSensors = async () => {
    const sensors = await Sensor.find();
    return sensors;
};

exports.getSensorById = async (id) => {
    const sensor = await Sensor.findById(id);
    if (!sensor) {
        throw new ErrorResponse(`Sensor no encontrado con id ${id}`, 404);
    }
    return sensor;
};

exports.updateSensor = async (id, updateData) => {
    const sensor = await Sensor.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
    });
    if (!sensor) {
        throw new ErrorResponse(`Sensor no encontrado con id ${id}`, 404);
    }
    return sensor;
};

exports.deleteSensor = async (id) => {
    const sensor = await Sensor.findByIdAndDelete(id);
    if (!sensor) {
        throw new ErrorResponse(`Sensor no encontrado con id ${id}`, 404);
    }
    return sensor;
};
