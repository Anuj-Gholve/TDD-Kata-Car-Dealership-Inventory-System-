import { useEffect, useState } from "react";
import api from "../api/axios";

import Navbar from "../components/Navbar";
import VehicleCard from "../components/VehicleCard";
import AddVehicleModal from "../components/AddVehicleModal";
import EditVehicleModal from "../components/EditVehicleModal";
import RestockModal from "../components/RestockModal";
import StatsCard from "../components/StatsCard";

function Dashboard() {
    const [vehicles, setVehicles] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showRestockModal, setShowRestockModal] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    const [filters, setFilters] = useState({
        make: "",
        model: "",
        category: "",
        minPrice: "",
        maxPrice: "",
    });

    const isAdmin = localStorage.getItem("role") === "ADMIN";

    const totalVehicles = vehicles.length;

    const availableVehicles = vehicles.filter(
        (vehicle) => vehicle.quantity > 0
    ).length;

    const outOfStockVehicles = vehicles.filter(
        (vehicle) => vehicle.quantity === 0
    ).length;

    const totalCategories = new Set(
        vehicles.map((vehicle) => vehicle.category)
    ).size;

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

    const clearFilters = () => {
        const emptyFilters = {
            make: "",
            model: "",
            category: "",
            minPrice: "",
            maxPrice: "",
        };

        setFilters(emptyFilters);
        loadVehicles(emptyFilters);
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
        setSelectedVehicle(vehicle);
        setShowEditModal(true);
    };

    const handleUpdate = async (updatedVehicle) => {
        try {
            await api.put(`/vehicles/${selectedVehicle.id}`, updatedVehicle);

            alert("Vehicle updated successfully!");

            setShowEditModal(false);
            setSelectedVehicle(null);

            await loadVehicles();
        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to update vehicle."
            );
        }
    };

    const handleDelete = async (vehicle) => {
        const confirmed = window.confirm(
            `Are you sure you want to delete ${vehicle.make} ${vehicle.model}?`
        );

        if (!confirmed) return;

        try {
            await api.delete(`/vehicles/${vehicle.id}`);

            alert("Vehicle deleted successfully!");

            await loadVehicles();
        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to delete vehicle."
            );
        }
    };

    const handleRestock = (vehicle) => {
        setSelectedVehicle(vehicle);
        setShowRestockModal(true);
    };

    const handleRestockSubmit = async (quantity) => {
        try {
            await api.post(`/vehicles/${selectedVehicle.id}/restock`, {
                quantity,
            });

            alert("Vehicle restocked successfully!");

            setShowRestockModal(false);
            setSelectedVehicle(null);

            await loadVehicles();
        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to restock vehicle."
            );
        }
    };

    return (
        <div className="min-h-screen bg-slate-100">
            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
                {/* Hero */}
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-slate-900">
                            Vehicle Inventory
                        </h1>

                        <p className="mt-2 text-slate-500">
                            Manage, search and maintain your vehicle inventory.
                        </p>
                    </div>

                    {isAdmin && (
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                        >
                            + Add Vehicle
                        </button>
                    )}
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    <StatsCard
                        title="Total Vehicles"
                        value={totalVehicles}
                    />

                    <StatsCard
                        title="Available"
                        value={availableVehicles}
                    />

                    <StatsCard
                        title="Out of Stock"
                        value={outOfStockVehicles}
                    />

                    <StatsCard
                        title="Categories"
                        value={totalCategories}
                    />
                </div>

                {/* Search */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-5 flex flex-col gap-1">
                        <h2 className="text-lg font-semibold text-slate-900">
                            Search & Filters
                        </h2>

                        <p className="text-sm text-slate-500">
                            Search vehicles by make, model, category or price
                            range.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
                        <input
                            className="rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder="Make"
                            name="make"
                            value={filters.make}
                            onChange={handleChange}
                        />

                        <input
                            className="rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder="Model"
                            name="model"
                            value={filters.model}
                            onChange={handleChange}
                        />

                        <input
                            className="rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder="Category"
                            name="category"
                            value={filters.category}
                            onChange={handleChange}
                        />

                        <input
                            className="rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder="Minimum Price"
                            type="number"
                            name="minPrice"
                            value={filters.minPrice}
                            onChange={handleChange}
                        />

                        <input
                            className="rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            placeholder="Maximum Price"
                            type="number"
                            name="maxPrice"
                            value={filters.maxPrice}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-5 flex justify-end">
                        <button
                            onClick={clearFilters}
                            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                        >
                            Clear Filters
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">
                            Inventory
                        </h2>

                        <p className="text-sm text-slate-500">
                            {vehicles.length} vehicle{vehicles.length !== 1 ? "s" : ""} found
                        </p>
                    </div>
                </div>

                {/* Vehicle Grid */}
                {vehicles.length === 0 ? (
                    <div className="rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm">
                        <h3 className="text-xl font-semibold text-slate-900">
                            No vehicles found
                        </h3>

                        <p className="mt-2 text-slate-500">
                            Try changing or clearing your search filters.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {vehicles.map((vehicle) => (
                            <VehicleCard
                                key={vehicle.id}
                                vehicle={vehicle}
                                onPurchase={handlePurchase}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                onRestock={handleRestock}
                            />
                        ))}
                    </div>
                )}
            </main>

            <AddVehicleModal
                isOpen={showAddModal}
                onClose={() => setShowAddModal(false)}
                refreshVehicles={loadVehicles}
            />

            <EditVehicleModal
                isOpen={showEditModal}
                vehicle={selectedVehicle}
                onClose={() => {
                    setShowEditModal(false);
                    setSelectedVehicle(null);
                }}
                onUpdate={handleUpdate}
            />

            <RestockModal
                isOpen={showRestockModal}
                vehicle={selectedVehicle}
                onClose={() => {
                    setShowRestockModal(false);
                    setSelectedVehicle(null);
                }}
                onRestock={handleRestockSubmit}
            />
        </div>
    );
}

export default Dashboard;