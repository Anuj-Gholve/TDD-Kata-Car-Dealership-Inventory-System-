const prisma = require("../utils/prisma");

const createVehicle = async (vehicleData) => {
    return prisma.vehicle.create({
        data: vehicleData,
    });
};

const getAllVehicles = async () => {
    return prisma.vehicle.findMany();
};

const searchVehicles = async (make) => {
    return prisma.vehicle.findMany({
        where: {
            make: {
                contains: make,
            },
        },
    });
};

module.exports = {
    createVehicle,
    getAllVehicles,
    searchVehicles,
};