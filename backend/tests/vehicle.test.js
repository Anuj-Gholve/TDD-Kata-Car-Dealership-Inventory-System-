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

    test("GET /api/vehicles should return all vehicles", async () => {

        await prisma.vehicle.createMany({
            data: [
                {
                    make: "Toyota",
                    model: "Fortuner",
                    category: "SUV",
                    price: 4500000,
                    quantity: 5
                },
                {
                    make: "Honda",
                    model: "City",
                    category: "Sedan",
                    price: 1500000,
                    quantity: 8
                }
            ]
        });



        const response = await request(app)
            .get("/api/vehicles");

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data.length).toBe(2);

        expect(response.body.data[0].make).toBe("Toyota");
        expect(response.body.data[1].make).toBe("Honda");
    });

    test("GET /api/vehicles/search should return matching vehicles by make", async () => {

        await prisma.vehicle.createMany({
            data: [
                {
                    make: "Toyota",
                    model: "Fortuner",
                    category: "SUV",
                    price: 4500000,
                    quantity: 5
                },
                {
                    make: "Honda",
                    model: "City",
                    category: "Sedan",
                    price: 1500000,
                    quantity: 8
                }
            ]
        });

        const response = await request(app)
            .get("/api/vehicles/search")
            .query({
                make: "Toyota"
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data.length).toBe(1);

        expect(response.body.data[0].make).toBe("Toyota");
        expect(response.body.data[0].model).toBe("Fortuner");
    });

});