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
            localStorage.setItem("role", response.data.role);

            navigate("/dashboard");
        } catch (err) {
            setError(
                err.response?.data?.message || "Login failed"
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
                        Sign in to your account
                    </h1>

                    <p className="mt-1 text-xs text-slate-500">
                        Access your vehicle inventory dashboard
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
                                htmlFor="email"
                                className="mb-1 block text-xs font-medium text-slate-600"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                className={inputClassName}
                                type="email"
                                name="email"
                                placeholder="you@company.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
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
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                autoComplete="current-password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex h-8 w-full items-center justify-center rounded-md bg-slate-900 text-xs font-medium text-white transition-colors hover:bg-slate-800"
                        >
                            Sign in
                        </button>
                    </form>
                </div>

                <p className="mt-4 text-center text-xs text-slate-500">
                    Don&apos;t have an account?{" "}
                    <Link
                        className="font-medium text-slate-900 hover:underline"
                        to="/register"
                    >
                        Create account
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
