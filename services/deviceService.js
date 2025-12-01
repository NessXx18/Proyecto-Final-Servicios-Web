const Device = require('../models/Device');
const ErrorResponse = require('../utils/errorResponse');

exports.createDevice = async (deviceData) => {
    const device = await Device.create(deviceData);
    return device;
};

exports.getDevices = async () => {
    const devices = await Device.find().populate('ownerId').populate('zoneId').populate('sensors');
    return devices;
};

exports.getDeviceById = async (id) => {
    const device = await Device.findById(id).populate('ownerId').populate('zoneId').populate('sensors');
    if (!device) {
        throw new ErrorResponse(`Dispositivo no encontrado con id ${id}`, 404);
    }
    return device;
};

exports.updateDevice = async (id, updateData) => {
    const device = await Device.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
    });
    if (!device) {
        throw new ErrorResponse(`Dispositivo no encontrado con id ${id}`, 404);
    }
    return device;
};

exports.deleteDevice = async (id) => {
    const device = await Device.findById(id);
    if (!device) {
        throw new ErrorResponse(`Dispositivo no encontrado con id ${id}`, 404);
    }

    if (device.sensors && device.sensors.length > 0) {
        throw new ErrorResponse('No se puede eliminar el dispositivo porque tiene sensores asociados. Elimine los sensores primero.', 400);
    }

    await device.deleteOne();
    return device;
};
