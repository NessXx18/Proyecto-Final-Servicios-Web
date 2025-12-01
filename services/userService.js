const User = require('../models/User');
const Device = require('../models/Device');
const ErrorResponse = require('../utils/errorResponse');

exports.createUser = async (userData) => {
    const user = await User.create(userData);
    return user;
};

exports.getUsers = async () => {
    const users = await User.find();
    return users;
};

exports.getUserById = async (id) => {
    const user = await User.findById(id).populate('devices');
    if (!user) {
        throw new ErrorResponse(`Usuario no encontrado con id ${id}`, 404);
    }
    return user;
};

exports.updateUser = async (id, updateData) => {
    const user = await User.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
    });
    if (!user) {
        throw new ErrorResponse(`Usuario no encontrado con id ${id}`, 404);
    }
    return user;
};

exports.deleteUser = async (id) => {
    // Check if user has devices
    const devices = await Device.find({ ownerId: id });
    if (devices.length > 0) {
        throw new ErrorResponse('No se puede eliminar el usuario porque tiene dispositivos asociados. Elimine o reasigne los dispositivos primero.', 400);
    }

    const user = await User.findByIdAndDelete(id);
    if (!user) {
        throw new ErrorResponse(`Usuario no encontrado con id ${id}`, 404);
    }
    return user;
};
