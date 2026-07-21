import Modal from "./Modal";
import VehicleForm from "./VehicleForm";

function EditVehicleModal({
    isOpen,
    vehicle,
    onClose,
    onUpdate,
}) {
    if (!vehicle) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Edit Vehicle"
            description="Update the vehicle details below."
        >
            <VehicleForm
                initialValues={vehicle}
                submitText="Update Vehicle"
                onSubmit={onUpdate}
            />

            <div className="mt-4 flex justify-end border-t border-slate-200 pt-4">
                <button
                    onClick={onClose}
                    className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50"
                >
                    Cancel
                </button>
            </div>
        </Modal>
    );
}

export default EditVehicleModal;