const Sensor = require('../models/Sensor');
const Reading = require('../models/Reading');
const Device = require('../models/Device');
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
    // Check if sensor has readings
    const readings = await Reading.find({ sensorId: id });
    if (readings.length > 0) {
        throw new ErrorResponse('No se puede eliminar el sensor porque tiene lecturas asociadas. Elimine las lecturas primero.', 400);
    }

    // Check if sensor is assigned to a device
    const device = await Device.findOne({ sensors: id });
    if (device) {
        throw new ErrorResponse('No se puede eliminar el sensor porque está asignado a un dispositivo. Desvincule el sensor del dispositivo primero.', 400);
    }

    const sensor = await Sensor.findByIdAndDelete(id);
    if (!sensor) {
        throw new ErrorResponse(`Sensor no encontrado con id ${id}`, 404);
    }
    return sensor;
};
