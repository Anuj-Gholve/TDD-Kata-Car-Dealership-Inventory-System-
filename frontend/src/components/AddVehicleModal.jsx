import api from "../api/axios";
import VehicleForm from "./VehicleForm";

function AddVehicleModal({ isOpen, onClose, refreshVehicles }) {
    if (!isOpen) return null;

    const handleAddVehicle = async (vehicleData) => {
        try {
            await api.post("/vehicles", vehicleData);

            alert("Vehicle added successfully!");

            await refreshVehicles();
            onClose();
        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to add vehicle."
            );
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">

                <div className="flex justify-between items-center mb-5">

                    <h2 className="text-2xl font-bold">
                        Add Vehicle
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-xl font-bold text-gray-500 hover:text-red-500"
                    >
                        ✕
                    </button>

                </div>

                <VehicleForm
                    initialValues={{
                        make: "",
                        model: "",
                        category: "",
                        price: "",
                        quantity: "",
                    }}
                    onSubmit={handleAddVehicle}
                    submitText="Add Vehicle"
                />

            </div>

        </div>
    );
}

export default AddVehicleModal;