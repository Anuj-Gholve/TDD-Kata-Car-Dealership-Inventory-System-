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

const findVehicleById = async (id) => {
    return prisma.vehicle.findUnique({
        where: {
            id: Number(id),
        },
    });
};

const purchaseVehicle = async (id, quantity) => {
    return prisma.vehicle.update({
        where: {
            id: Number(id),
        },
        data: {
            quantity,
        },
    });
};

const restockVehicle = async (id, quantity) => {
    return prisma.vehicle.update({
        where: {
            id: Number(id),
        },
        data: {
            quantity,
        },
    });
};

module.exports = {
    createVehicle,
    getAllVehicles,
    searchVehicles,
    updateVehicle,
    deleteVehicle,
    findVehicleById,
    purchaseVehicle,
    restockVehicle,
};