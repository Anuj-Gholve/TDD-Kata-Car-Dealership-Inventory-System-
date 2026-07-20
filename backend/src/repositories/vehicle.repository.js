const prisma = require("../utils/prisma");

const createVehicle = async (vehicleData) => {
    return prisma.vehicle.create({
        data: vehicleData,
    });
};

const getAllVehicles = async () => {
    return prisma.vehicle.findMany();
};

module.exports = {
    createVehicle,
    getAllVehicles,
};