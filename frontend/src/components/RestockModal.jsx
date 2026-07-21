import { useEffect, useState } from "react";
import Modal from "./Modal";

function RestockModal({
    isOpen,
    vehicle,
    onClose,
    onRestock,
}) {
    const [quantity, setQuantity] = useState("");

    useEffect(() => {
        if (isOpen && vehicle) {
            setQuantity("");
        }
    }, [isOpen, vehicle]);

    if (!vehicle) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        onRestock(Number(quantity));
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Restock Vehicle"
            description="Increase the available stock for this vehicle."
            maxWidth="max-w-lg"
        >
            <div className="space-y-5">
                <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">
                        {vehicle.make}
                    </p>

                    <p className="mt-0.5 text-sm text-slate-500">
                        {vehicle.model}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                        <span className="text-sm text-slate-500">
                            Current Stock
                        </span>

                        <span className="rounded-md bg-blue-50 border border-blue-200 px-2 py-0.5 text-xs font-medium text-blue-700">
                            {vehicle.quantity} Units
                        </span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="restock-quantity" className="mb-1.5 block text-sm font-medium text-slate-700">
                            Quantity to Add
                        </label>

                        <input
                            id="restock-quantity"
                            type="number"
                            min="1"
                            required
                            value={quantity}
                            onChange={(e) =>
                                setQuantity(e.target.value)
                            }
                            placeholder="Enter quantity"
                            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <div className="flex justify-end gap-3 border-t border-slate-200 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700"
                        >
                            Restock Vehicle
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default RestockModal;