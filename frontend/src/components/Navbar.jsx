import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const role = localStorage.getItem("role") || "USER";

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/login");
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-xs font-bold text-white">
                        VI
                    </div>

                    <span className="text-sm font-semibold text-slate-900">
                        Vehicle Inventory
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <span
                        className={`rounded-md border px-2.5 py-1 text-xs font-medium
                        ${role === "ADMIN"
                                ? "border-blue-200 bg-blue-50 text-blue-700"
                                : "border-slate-200 bg-slate-50 text-slate-600"
                            }`}
                    >
                        {role}
                    </span>

                    <button
                        onClick={logout}
                        className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
                    >
                        Log out
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;