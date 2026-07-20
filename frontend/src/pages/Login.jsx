import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await api.post("/auth/login", formData);

            localStorage.setItem("token", response.data.token);

            navigate("/dashboard");
        } catch (err) {
            setError(
                err.response?.data?.message || "Login failed"
            );
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-slate-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Login
                </h1>

                {error && (
                    <p className="text-red-500 mb-4">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit}>

                    <input
                        className="w-full border p-3 rounded mb-4"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="w-full border p-3 rounded mb-4"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <button
                        className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
                    >
                        Login
                    </button>

                </form>

                <p className="mt-4 text-center">
                    Don't have an account?

                    <Link
                        className="text-blue-600 ml-1"
                        to="/register"
                    >
                        Register
                    </Link>

                </p>

            </div>
        </div>
    );
}

export default Login;