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

module.exports = {
    createVehicle,
};