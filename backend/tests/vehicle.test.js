const jwt = require("jsonwebtoken");
const request = require("supertest");
const app = require("../src/app");
const prisma = require("../src/utils/prisma");

describe("Vehicle API", () => {
    let token;

    beforeEach(async () => {
        await prisma.vehicle.deleteMany();

        token = jwt.sign(
            {
                id: 1,
                email: "admin@test.com",
                role: "admin",
            },
            process.env.JWT_SECRET
        );
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    test("POST /api/vehicles should create a new vehicle", async () => {

        const response = await request(app)
            .post("/api/vehicles")
            .set("Authorization", `Bearer ${token}`)
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
            .get("/api/vehicles")
            .set("Authorization", `Bearer ${token}`);

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
            .set("Authorization", `Bearer ${token}`)
            .query({
                make: "Toyota"
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data.length).toBe(1);

        expect(response.body.data[0].make).toBe("Toyota");
        expect(response.body.data[0].model).toBe("Fortuner");
    });

    test("PUT /api/vehicles/:id should update a vehicle", async () => {

        const vehicle = await prisma.vehicle.create({
            data: {
                make: "Toyota",
                model: "Fortuner",
                category: "SUV",
                price: 4500000,
                quantity: 5
            }
        });

        const response = await request(app)
            .put(`/api/vehicles/${vehicle.id}`)
            .set("Authorization", `Bearer ${token}`)
            .send({
                make: "Toyota",
                model: "Fortuner Legender",
                category: "SUV",
                price: 4700000,
                quantity: 7
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("Vehicle updated successfully");

        const updatedVehicle = await prisma.vehicle.findUnique({
            where: {
                id: vehicle.id
            }
        });

        expect(updatedVehicle.model).toBe("Fortuner Legender");
        expect(updatedVehicle.price).toBe(4700000);
        expect(updatedVehicle.quantity).toBe(7);
    });

    test("DELETE /api/vehicles/:id should delete a vehicle", async () => {

        const vehicle = await prisma.vehicle.create({
            data: {
                make: "Toyota",
                model: "Fortuner",
                category: "SUV",
                price: 4500000,
                quantity: 5
            }
        });

        const response = await request(app)
            .delete(`/api/vehicles/${vehicle.id}`)
            .set("Authorization", `Bearer ${token}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("Vehicle deleted successfully");

        const deletedVehicle = await prisma.vehicle.findUnique({
            where: {
                id: vehicle.id
            }
        });

        expect(deletedVehicle).toBeNull();
    });

    test("POST /api/vehicles/:id/purchase should reduce vehicle quantity", async () => {

        const vehicle = await prisma.vehicle.create({
            data: {
                make: "Toyota",
                model: "Fortuner",
                category: "SUV",
                price: 4500000,
                quantity: 5
            }
        });

        const response = await request(app)
            .post(`/api/vehicles/${vehicle.id}/purchase`)
            .set("Authorization", `Bearer ${token}`)
            .send({
                quantity: 2
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("Vehicle purchased successfully");

        const updatedVehicle = await prisma.vehicle.findUnique({
            where: {
                id: vehicle.id
            }
        });

        expect(updatedVehicle.quantity).toBe(3);
    });

    test("POST /api/vehicles/:id/restock should increase vehicle quantity", async () => {

        const vehicle = await prisma.vehicle.create({
            data: {
                make: "Toyota",
                model: "Fortuner",
                category: "SUV",
                price: 4500000,
                quantity: 5
            }
        });

        const response = await request(app)
            .post(`/api/vehicles/${vehicle.id}/restock`)
            .set("Authorization", `Bearer ${token}`)
            .send({
                quantity: 3
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("Vehicle restocked successfully");

        const updatedVehicle = await prisma.vehicle.findUnique({
            where: {
                id: vehicle.id
            }
        });

        expect(updatedVehicle.quantity).toBe(8);
    });

    test("POST /api/vehicles should return 401 when token is missing", async () => {

        const response = await request(app)
            .post("/api/vehicles")
            .send({
                make: "Toyota",
                model: "Fortuner",
                category: "SUV",
                price: 4500000,
                quantity: 5
            });

        expect(response.statusCode).toBe(401);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Access denied");
    });

    test("DELETE /api/vehicles/:id should return 403 for non-admin user", async () => {

        const userToken = jwt.sign(
            {
                id: 2,
                email: "user@test.com",
                role: "user",
            },
            process.env.JWT_SECRET
        );

        const vehicle = await prisma.vehicle.create({
            data: {
                make: "Toyota",
                model: "Fortuner",
                category: "SUV",
                price: 4500000,
                quantity: 5
            }
        });

        const response = await request(app)
            .delete(`/api/vehicles/${vehicle.id}`)
            .set("Authorization", `Bearer ${userToken}`);

        expect(response.statusCode).toBe(403);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Access forbidden");
    });
});