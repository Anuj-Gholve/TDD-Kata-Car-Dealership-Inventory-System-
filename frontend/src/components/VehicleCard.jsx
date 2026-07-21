function VehicleCard({
    vehicle,
    onPurchase,
    onEdit,
    onDelete,
    onRestock,
}) {
    const isAdmin = localStorage.getItem("role") === "ADMIN";

    const inStock = vehicle.quantity > 0;

    return (
        <div className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 transition-all duration-200 hover:shadow-md">
            <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold text-slate-900">
                        {vehicle.make}
                    </h3>

                    <p className="mt-0.5 text-sm text-slate-500">
                        {vehicle.model}
                    </p>
                </div>

                <span className="shrink-0 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600">
                    {vehicle.category}
                </span>
            </div>

            <div className="my-4 h-px bg-slate-100" />

            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                        Price
                    </span>

                    <span className="text-lg font-semibold text-slate-900">
                        ₹{vehicle.price.toLocaleString()}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                        Availability
                    </span>

                    {inStock ? (
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-green-200 bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                            {vehicle.quantity} in stock
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-red-200 bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                            Out of stock
                        </span>
                    )}
                </div>
            </div>

            <div className="mt-auto pt-5">
                <button
                    onClick={() => onPurchase(vehicle)}
                    disabled={!inStock}
                    className={`w-full rounded-md py-2.5 text-sm font-medium transition-all duration-200
                    ${inStock
                            ? "bg-slate-900 text-white hover:bg-slate-800"
                            : "cursor-not-allowed bg-slate-100 text-slate-400"
                        }`}
                >
                    {inStock ? "Purchase Vehicle" : "Unavailable"}
                </button>

                {isAdmin && (
                    <div className="mt-3 grid grid-cols-3 gap-2">
                        <button
                            onClick={() => onRestock(vehicle)}
                            className="rounded-md border border-slate-200 bg-white py-2 text-xs font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50"
                        >
                            Restock
                        </button>

                        <button
                            onClick={() => onEdit(vehicle)}
                            className="rounded-md border border-slate-200 bg-white py-2 text-xs font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50"
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => onDelete(vehicle)}
                            className="rounded-md border border-red-200 bg-white py-2 text-xs font-medium text-red-600 transition-all duration-200 hover:bg-red-50"
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default VehicleCard;