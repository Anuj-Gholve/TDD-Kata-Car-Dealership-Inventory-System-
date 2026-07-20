const request = require("supertest");
const app = require("../src/app");
const prisma = require("../src/utils/prisma");

describe("Authentication API", () => {

    beforeEach(async () => {
        await prisma.user.deleteMany();
    });

    afterAll(async () => {
        await prisma.$disconnect();
    });

    test("POST /api/auth/register should create a new user", async () => {

        const response = await request(app)
            .post("/api/auth/register")
            .send({
                name: "Anuj",
                email: "anuj@example.com",
                password: "password123"
            });

        expect(response.statusCode).toBe(201);

        const user = await prisma.user.findUnique({
            where: {
                email: "anuj@example.com"
            }
        });

        expect(user).not.toBeNull();
        expect(user.name).toBe("Anuj");
        expect(user.email).toBe("anuj@example.com");
        expect(user.password).not.toBe("password123");
    });

});