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
            maxWidth="max-w-md"
        >
            <div className="space-y-4">
                <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                    <p className="text-sm font-medium text-slate-900">
                        {vehicle.make}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                        {vehicle.model}
                    </p>

                    <div className="mt-2.5 flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                            Current Stock
                        </span>

                        <span className="rounded-md border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                            {vehicle.quantity} Units
                        </span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="restock-quantity" className="mb-1 block text-xs font-medium text-slate-600">
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
                            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-slate-400 focus:ring-1 focus:ring-slate-200"
                        />
                    </div>

                    <div className="flex flex-col-reverse justify-end gap-2 border-t border-slate-200 pt-4 sm:flex-row">
                        <button
                            type="button"
                            onClick={onClose}
                            className="inline-flex h-8 items-center justify-center rounded-md border border-slate-200 bg-white px-3 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="inline-flex h-8 items-center justify-center rounded-md bg-slate-900 px-3 text-xs font-medium text-white transition-colors hover:bg-slate-800"
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