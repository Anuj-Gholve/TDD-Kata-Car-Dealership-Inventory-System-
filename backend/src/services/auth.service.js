const bcrypt = require("bcrypt");
const authRepository = require("../repositories/auth.repository");
const generateToken = require("../utils/generateToken");

const register = async (userData) => {
    const existingUser = await authRepository.findUserByEmail(userData.email);

    if (existingUser) {
        throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = await authRepository.createUser({
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        role: "USER",
    });

    return {
        success: true,
        message: "User registered successfully",
        data: user,
    };
};

const login = async (loginData) => {
    const user = await authRepository.findUserByEmail(loginData.email);

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(
        loginData.password,
        user.password
    );

    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }

    const token = generateToken(user);

    return {
        success: true,
        message: "Login successful",
        token,
        role: user.role,
    };
};

module.exports = {
    register,
    login,
};