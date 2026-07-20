import { useEffect, useState } from "react";
import api from "../api/axios";

import Navbar from "../components/Navbar";
import VehicleCard from "../components/VehicleCard";

function Dashboard() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await api.get("/vehicles");
                setVehicles(response.data.data);
            } catch (error) {
                console.error("Failed to fetch vehicles:", error);
            }
        };

        fetchVehicles();
    }, []);

    return (
        <div className="min-h-screen bg-slate-100">
            <Navbar />

            <div className="max-w-7xl mx-auto p-6">
                <h2 className="text-3xl font-bold mb-6">
                    Vehicle Inventory
                </h2>

                {vehicles.length === 0 ? (
                    <div className="bg-white rounded-lg shadow p-8 text-center">
                        <h3 className="text-xl font-semibold mb-2">
                            No vehicles found
                        </h3>
                        <p className="text-gray-600">
                            Add your first vehicle to get started.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {vehicles.map((vehicle) => (
                            <VehicleCard
                                key={vehicle.id}
                                vehicle={vehicle}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;