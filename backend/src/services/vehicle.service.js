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

const updateVehicle = async (id, vehicleData) => {
    const vehicle = await vehicleRepository.updateVehicle(id, vehicleData);

    return {
        success: true,
        message: "Vehicle updated successfully",
        data: vehicle,
    };
};


const deleteVehicle = async (id) => {
    await vehicleRepository.deleteVehicle(id);

    return {
        success: true,
        message: "Vehicle deleted successfully",
    };
};

module.exports = {
    createVehicle,
    getAllVehicles,
    searchVehicles,
    updateVehicle,
    deleteVehicle,
};