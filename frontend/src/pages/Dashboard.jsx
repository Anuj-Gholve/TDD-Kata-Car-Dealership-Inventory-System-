import { useEffect, useState } from "react";
import api from "../api/axios";

import Navbar from "../components/Navbar";
import VehicleCard from "../components/VehicleCard";
import AddVehicleModal from "../components/AddVehicleModal";

function Dashboard() {
    const [vehicles, setVehicles] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);

    const [filters, setFilters] = useState({
        make: "",
        model: "",
        category: "",
        minPrice: "",
        maxPrice: "",
    });

    const loadVehicles = async (searchFilters = filters) => {
        try {
            const response = await api.get("/vehicles/search", {
                params: searchFilters,
            });

            setVehicles(response.data.data);
        } catch (error) {
            console.error("Failed to load vehicles:", error);
        }
    };

    useEffect(() => {
        loadVehicles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e) => {
        const updatedFilters = {
            ...filters,
            [e.target.name]: e.target.value,
        };

        setFilters(updatedFilters);
        loadVehicles(updatedFilters);
    };

    const handlePurchase = async (vehicle) => {
        try {
            await api.post(`/vehicles/${vehicle.id}/purchase`);

            alert("Vehicle purchased successfully!");

            await loadVehicles();
        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to purchase vehicle."
            );
        }
    };

    const handleEdit = (vehicle) => {
        console.log("Edit:", vehicle);
    };

    const handleDelete = (vehicle) => {
        console.log("Delete:", vehicle);
    };

    return (
        <div className="min-h-screen bg-slate-100">
            <Navbar />

            <div className="max-w-7xl mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold">
                        Vehicle Inventory
                    </h2>

                    <button
                        onClick={() => setShowAddModal(true)}
                        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
                    >
                        + Add Vehicle
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow p-5 mb-8 grid md:grid-cols-5 gap-4">
                    <input
                        className="border rounded p-2"
                        placeholder="Make"
                        name="make"
                        value={filters.make}
                        onChange={handleChange}
                    />

                    <input
                        className="border rounded p-2"
                        placeholder="Model"
                        name="model"
                        value={filters.model}
                        onChange={handleChange}
                    />

                    <input
                        className="border rounded p-2"
                        placeholder="Category"
                        name="category"
                        value={filters.category}
                        onChange={handleChange}
                    />

                    <input
                        className="border rounded p-2"
                        placeholder="Min Price"
                        type="number"
                        name="minPrice"
                        value={filters.minPrice}
                        onChange={handleChange}
                    />

                    <input
                        className="border rounded p-2"
                        placeholder="Max Price"
                        type="number"
                        name="maxPrice"
                        value={filters.maxPrice}
                        onChange={handleChange}
                    />
                </div>

                {vehicles.length === 0 ? (
                    <div className="bg-white rounded shadow p-10 text-center">
                        No vehicles found.
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {vehicles.map((vehicle) => (
                            <VehicleCard
                                key={vehicle.id}
                                vehicle={vehicle}
                                onPurchase={handlePurchase}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                )}
            </div>

            <AddVehicleModal
                isOpen={showAddModal}
                onClose={() => setShowAddModal(false)}
                refreshVehicles={loadVehicles}
            />
        </div>
    );
}

export default Dashboard;