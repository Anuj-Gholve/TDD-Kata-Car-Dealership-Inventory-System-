import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
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
            await api.post("/auth/register", formData);

            navigate("/login");
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Registration failed"
            );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <div className="bg-white p-8 rounded-lg shadow-lg w-96">

                <h1 className="text-3xl font-bold mb-6 text-center">
                    Register
                </h1>

                {error && (
                    <p className="text-red-500 mb-4">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit}>

                    <input
                        className="w-full border p-3 rounded mb-4"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <input
                        className="w-full border p-3 rounded mb-4"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        className="w-full border p-3 rounded mb-6"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <button
                        className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
                    >
                        Register
                    </button>

                </form>

                <p className="text-center mt-4">

                    Already have an account?

                    <Link
                        to="/login"
                        className="text-blue-600 ml-1"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Register;