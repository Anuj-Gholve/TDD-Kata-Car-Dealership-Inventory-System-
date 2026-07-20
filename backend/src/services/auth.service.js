const bcrypt = require("bcrypt");
const authRepository = require("../repositories/auth.repository");

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

module.exports = {
    register,
};