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

        // Password should not be stored in plain text
        expect(user.password).not.toBe("password123");
    });

    test("POST /api/auth/register should return 409 if email already exists", async () => {

        const user = {
            name: "Anuj",
            email: "anuj@example.com",
            password: "password123"
        };

        await request(app)
            .post("/api/auth/register")
            .send(user);

        const response = await request(app)
            .post("/api/auth/register")
            .send(user);

        expect(response.statusCode).toBe(409);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Email already exists");
    });

    test("POST /api/auth/login should login successfully with valid credentials", async () => {

        const user = {
            name: "Anuj",
            email: "anuj@example.com",
            password: "password123"
        };

        await request(app)
            .post("/api/auth/register")
            .send(user);

        const response = await request(app)
            .post("/api/auth/login")
            .send({
                email: user.email,
                password: user.password
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("Login successful");
        expect(response.body.token).toBeDefined();
        expect(typeof response.body.token).toBe("string");
    });

});