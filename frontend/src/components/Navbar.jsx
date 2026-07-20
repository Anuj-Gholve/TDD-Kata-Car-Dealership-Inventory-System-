import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");
    };

    return (

        <nav className="bg-blue-700 text-white shadow">

            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

                <h1 className="text-2xl font-bold">
                    🚗 Vehicle Inventory
                </h1>

                <button
                    onClick={logout}
                    className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;