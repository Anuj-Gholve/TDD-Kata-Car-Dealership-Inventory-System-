const prisma = require("../utils/prisma");

const createVehicle = async (vehicleData) => {
    return prisma.vehicle.create({
        data: vehicleData,
    });
};

module.exports = {
    createVehicle,
};