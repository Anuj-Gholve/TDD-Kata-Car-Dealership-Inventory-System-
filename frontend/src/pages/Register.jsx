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

    const inputClassName =
        "w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-slate-400 focus:ring-1 focus:ring-slate-200";

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#f4f5f7] px-4">
            <div className="w-full max-w-sm">
                <div className="mb-6 text-center">
                    <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-[10px] font-bold text-white">
                        VI
                    </div>

                    <h1 className="text-lg font-semibold text-slate-900">
                        Create your account
                    </h1>

                    <p className="mt-1 text-xs text-slate-500">
                        Get started with vehicle inventory management
                    </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-5">
                    {error && (
                        <div
                            role="alert"
                            className="mb-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600"
                        >
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1 block text-xs font-medium text-slate-600"
                            >
                                Full name
                            </label>

                            <input
                                id="name"
                                className={inputClassName}
                                name="name"
                                placeholder="Jane Smith"
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete="name"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1 block text-xs font-medium text-slate-600"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                className={inputClassName}
                                name="email"
                                type="email"
                                placeholder="you@company.com"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="mb-1 block text-xs font-medium text-slate-600"
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                className={inputClassName}
                                name="password"
                                type="password"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={handleChange}
                                autoComplete="new-password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex h-8 w-full items-center justify-center rounded-md bg-slate-900 text-xs font-medium text-white transition-colors hover:bg-slate-800"
                        >
                            Create account
                        </button>
                    </form>
                </div>

                <p className="mt-4 text-center text-xs text-slate-500">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-slate-900 hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
