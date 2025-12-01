const Zone = require('../models/Zone');
const Device = require('../models/Device');
const ErrorResponse = require('../utils/errorResponse');

exports.createZone = async (zoneData) => {
    const zone = await Zone.create(zoneData);
    return zone;
};

exports.getZones = async () => {
    const zones = await Zone.find();
    return zones;
};

exports.getZoneById = async (id) => {
    const zone = await Zone.findById(id);
    if (!zone) {
        throw new ErrorResponse(`Zona no encontrada con id ${id}`, 404);
    }
    return zone;
};

exports.updateZone = async (id, updateData) => {
    const zone = await Zone.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
    });
    if (!zone) {
        throw new ErrorResponse(`Zona no encontrada con id ${id}`, 404);
    }
    return zone;
};

exports.deleteZone = async (id) => {
    // Check if zone has devices
    const devices = await Device.find({ zoneId: id });
    if (devices.length > 0) {
        throw new ErrorResponse('No se puede eliminar la zona porque tiene dispositivos asociados. Elimine o reasigne los dispositivos primero.', 400);
    }

    const zone = await Zone.findByIdAndDelete(id);
    if (!zone) {
        throw new ErrorResponse(`Zona no encontrada con id ${id}`, 404);
    }
    return zone;
};
