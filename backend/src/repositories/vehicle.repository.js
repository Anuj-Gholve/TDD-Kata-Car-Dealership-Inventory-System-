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

const updateVehicle = async (id, vehicleData) => {
    return prisma.vehicle.update({
        where: {
            id: Number(id),
        },
        data: vehicleData,
    });
};

const deleteVehicle = async (id) => {
    return prisma.vehicle.delete({
        where: {
            id: Number(id),
        },
    });
};

module.exports = {
    createVehicle,
    getAllVehicles,
    searchVehicles,
    updateVehicle,
    deleteVehicle,
};