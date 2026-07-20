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

const purchaseVehicle = async (id, purchaseQuantity) => {

    const vehicle = await vehicleRepository.findVehicleById(id);

    if (!vehicle) {
        throw new Error("Vehicle not found");
    }

    if (vehicle.quantity < purchaseQuantity) {
        throw new Error("Insufficient stock");
    }

    const updatedVehicle = await vehicleRepository.purchaseVehicle(
        id,
        vehicle.quantity - purchaseQuantity
    );

    return {
        success: true,
        message: "Vehicle purchased successfully",
        data: updatedVehicle,
    };
};

module.exports = {
    createVehicle,
    getAllVehicles,
    searchVehicles,
    updateVehicle,
    deleteVehicle,
    purchaseVehicle,
};