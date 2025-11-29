const Zone = require('../models/Zone');
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
    const zone = await Zone.findByIdAndDelete(id);
    if (!zone) {
        throw new ErrorResponse(`Zona no encontrada con id ${id}`, 404);
    }
    return zone;
};
