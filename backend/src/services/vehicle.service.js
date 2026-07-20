const vehicleRepository = require("../repositories/vehicle.repository");

const createVehicle = async (vehicleData) => {
    const vehicle = await vehicleRepository.createVehicle(vehicleData);

    return {
        success: true,
        message: "Vehicle created successfully",
        data: vehicle,
    };
};

const getAllVehicles = async () => {
    const vehicles = await vehicleRepository.getAllVehicles();

    return {
        success: true,
        data: vehicles,
    };
};

const searchVehicles = async (make) => {
    const vehicles = await vehicleRepository.searchVehicles(make);

    return {
        success: true,
        data: vehicles,
    };
};

module.exports = {
    createVehicle,
    getAllVehicles,
    searchVehicles,
};