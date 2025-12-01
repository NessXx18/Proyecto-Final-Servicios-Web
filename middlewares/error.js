const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    // Console.log para ver el error
    console.log(err);

    // Error su no existe Not Found
    if (err.name === 'CastError') {
        const message = `Recurso no encontrado`;
        error = new ErrorResponse(message, 404);
    }

    // Ya existe el valor
    if (err.code === 11000) {
        const message = 'Valor de campo duplicado ingresado';
        error = new ErrorResponse(message, 400);
    }

    // Error de validación
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Error del Servidor'
    });
};

module.exports = errorHandler;
