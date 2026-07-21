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

    const filterInputClassName =
        "w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-slate-400 focus:ring-1 focus:ring-slate-200";

    return (
        <div className="min-h-screen bg-[#f4f5f7]">
            <Navbar />

            <main className="mx-auto max-w-7xl space-y-5 px-4 py-6 sm:px-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-lg font-semibold text-slate-900">
                            Vehicle Inventory
                        </h1>

                        <p className="mt-0.5 text-xs text-slate-500">
                            Manage, search and maintain your vehicle inventory.
                        </p>
                    </div>

                    {isAdmin && (
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="inline-flex h-8 shrink-0 items-center justify-center rounded-md bg-slate-900 px-3.5 text-xs font-medium text-white transition-colors hover:bg-slate-800"
                        >
                            Add Vehicle
                        </button>
                    )}
                </div>

                {/* Statistics */}
                <section aria-label="Inventory statistics">
                    <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
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
                </section>

                {/* Search */}
                <section
                    aria-label="Search and filters"
                    className="rounded-lg border border-slate-200 bg-white p-4"
                >
                    <div className="mb-3.5 flex flex-col gap-0.5">
                        <h2 className="text-sm font-semibold text-slate-900">
                            Search & Filters
                        </h2>

                        <p className="text-xs text-slate-500">
                            Filter by make, model, category or price range.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
                        <div>
                            <label htmlFor="filter-make" className="mb-1 block text-xs font-medium text-slate-500">
                                Make
                            </label>
                            <input
                                id="filter-make"
                                className={filterInputClassName}
                                placeholder="e.g. Toyota"
                                name="make"
                                value={filters.make}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="filter-model" className="mb-1 block text-xs font-medium text-slate-500">
                                Model
                            </label>
                            <input
                                id="filter-model"
                                className={filterInputClassName}
                                placeholder="e.g. Fortuner"
                                name="model"
                                value={filters.model}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="filter-category" className="mb-1 block text-xs font-medium text-slate-500">
                                Category
                            </label>
                            <input
                                id="filter-category"
                                className={filterInputClassName}
                                placeholder="e.g. SUV"
                                name="category"
                                value={filters.category}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="filter-min-price" className="mb-1 block text-xs font-medium text-slate-500">
                                Min price
                            </label>
                            <input
                                id="filter-min-price"
                                className={filterInputClassName}
                                placeholder="0"
                                type="number"
                                name="minPrice"
                                value={filters.minPrice}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="filter-max-price" className="mb-1 block text-xs font-medium text-slate-500">
                                Max price
                            </label>
                            <input
                                id="filter-max-price"
                                className={filterInputClassName}
                                placeholder="Any"
                                type="number"
                                name="maxPrice"
                                value={filters.maxPrice}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mt-3.5 flex justify-end">
                        <button
                            onClick={clearFilters}
                            className="inline-flex h-7 items-center rounded-md border border-slate-200 bg-white px-3 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50"
                        >
                            Clear Filters
                        </button>
                    </div>
                </section>

                <section aria-label="Vehicle inventory">
                    <div className="mb-3">
                        <h2 className="text-sm font-semibold text-slate-900">
                            Inventory
                        </h2>

                        <p className="mt-0.5 text-xs text-slate-500">
                            {vehicles.length} vehicle{vehicles.length !== 1 ? "s" : ""} found
                        </p>
                    </div>

                    {vehicles.length === 0 ? (
                        <div className="rounded-lg border border-slate-200 bg-white px-5 py-10 text-center">
                            <p className="text-sm font-medium text-slate-900">
                                No vehicles found
                            </p>

                            <p className="mx-auto mt-1 max-w-xs text-xs text-slate-500">
                                Try changing or clearing your search filters to see available inventory.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
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
                </section>
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