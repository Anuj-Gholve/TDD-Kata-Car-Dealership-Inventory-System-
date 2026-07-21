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
                    type="button"
                    onClick={onClose}
                    className="inline-flex h-8 items-center rounded-md border border-slate-200 bg-white px-3 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50"
                >
                    Cancel
                </button>
            </div>
        </Modal>
    );
}

export default EditVehicleModal;