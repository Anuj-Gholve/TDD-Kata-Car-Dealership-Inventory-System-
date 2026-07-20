const vehicleRepository = require("../repositories/vehicle.repository");

const createVehicle = async (vehicleData) => {
    const vehicle = await vehicleRepository.createVehicle(vehicleData);

    return {
        success: true,
        message: "Vehicle created successfully",
        data: vehicle,
    };
};

module.exports = {
    createVehicle,
};