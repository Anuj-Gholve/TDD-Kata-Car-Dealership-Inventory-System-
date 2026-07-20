const authService = require("../services/auth.service");

const register = async (req, res) => {

    try {
        const result = await authService.register(req.body);

        return res.status(201).json(result);
    } catch (error) {

        if (error.message === "Email already exists") {
            return res.status(409).json({
                success: false,
                message: error.message,
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


const login = async (req, res) => {
    try {
        const result = await authService.login(req.body);

        return res.status(200).json(result);
    } catch (error) {

        if (error.message === "Invalid email or password") {
            return res.status(401).json({
                success: false,
                message: error.message,
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

module.exports = {
    register,
    login,
};