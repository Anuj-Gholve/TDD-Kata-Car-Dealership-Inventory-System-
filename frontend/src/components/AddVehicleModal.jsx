import api from "../api/axios";
import Modal from "./Modal";
import VehicleForm from "./VehicleForm";

function AddVehicleModal({ isOpen, onClose, refreshVehicles }) {
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
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Add Vehicle"
            description="Enter the vehicle details to add it to the inventory."
        >
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
        </Modal>
    );
}

export default AddVehicleModal;