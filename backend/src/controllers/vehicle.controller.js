const vehicleService = require("../services/vehicle.service");

const createVehicle = async (req, res) => {
    try {
        const result = await vehicleService.createVehicle(req.body);

        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getAllVehicles = async (req, res) => {
    try {
        const result = await vehicleService.getAllVehicles();

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const searchVehicles = async (req, res) => {
    try {
        const result = await vehicleService.searchVehicles(req.query.make);

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const updateVehicle = async (req, res) => {
    try {
        const result = await vehicleService.updateVehicle(
            req.params.id,
            req.body
        );

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createVehicle,
    getAllVehicles,
    searchVehicles,
    updateVehicle,
};