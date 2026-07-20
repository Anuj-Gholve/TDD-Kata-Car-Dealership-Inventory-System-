const request = require("supertest");
const app = require("../src/app");
const prisma = require("../src/utils/prisma");

describe("Vehicle API", () => {

    beforeEach(async () => {
        await prisma.vehicle.deleteMany();
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    test("POST /api/vehicles should create a new vehicle", async () => {

        const response = await request(app)
            .post("/api/vehicles")
            .send({
                make: "Toyota",
                model: "Fortuner",
                category: "SUV",
                price: 4500000,
                quantity: 5
            });

        expect(response.statusCode).toBe(201);

        const vehicle = await prisma.vehicle.findFirst({
            where: {
                model: "Fortuner"
            }
        });

        expect(vehicle).not.toBeNull();
        expect(vehicle.make).toBe("Toyota");
        expect(vehicle.category).toBe("SUV");
        expect(vehicle.price).toBe(4500000);
        expect(vehicle.quantity).toBe(5);
    });

});