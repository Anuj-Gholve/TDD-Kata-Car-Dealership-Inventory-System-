const prisma = require("../utils/prisma");

const createVehicle = async (vehicleData) => {
    return prisma.vehicle.create({
        data: vehicleData,
    });
};

const getAllVehicles = async () => {
    return prisma.vehicle.findMany();
};

const searchVehicles = async (filters) => {
    const { make, model, category, minPrice, maxPrice } = filters;

    const where = {};

    if (make) {
        where.make = {
            contains: make,
        };
    }

    if (model) {
        where.model = {
            contains: model,
        };
    }

    if (category) {
        where.category = {
            contains: category,
        };
    }

    if (minPrice || maxPrice) {
        where.price = {};

        if (minPrice) {
            where.price.gte = Number(minPrice);
        }

        if (maxPrice) {
            where.price.lte = Number(maxPrice);
        }
    }

    return prisma.vehicle.findMany({
        where,
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