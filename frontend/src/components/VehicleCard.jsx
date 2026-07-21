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
        <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-slate-900">
                        {vehicle.make}
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-500">
                        {vehicle.model}
                    </p>
                </div>

                <span className="shrink-0 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600">
                    {vehicle.category}
                </span>
            </div>

            <div className="my-3 h-px bg-slate-100" />

            <dl className="space-y-2.5">
                <div className="flex items-center justify-between">
                    <dt className="text-xs text-slate-500">
                        Price
                    </dt>

                    <dd className="text-sm font-semibold text-slate-900">
                        ₹{vehicle.price.toLocaleString()}
                    </dd>
                </div>

                <div className="flex items-center justify-between">
                    <dt className="text-xs text-slate-500">
                        Availability
                    </dt>

                    <dd>
                        {inStock ? (
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-green-200 bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true" />
                                {vehicle.quantity} in stock
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-red-200 bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700">
                                <span className="h-1.5 w-1.5 rounded-full bg-red-500" aria-hidden="true" />
                                Out of stock
                            </span>
                        )}
                    </dd>
                </div>
            </dl>

            <div className="mt-auto pt-4">
                <button
                    onClick={() => onPurchase(vehicle)}
                    disabled={!inStock}
                    className={`flex h-8 w-full items-center justify-center rounded-md text-xs font-medium transition-colors
                    ${inStock
                            ? "bg-slate-900 text-white hover:bg-slate-800"
                            : "cursor-not-allowed bg-slate-100 text-slate-400"
                        }`}
                >
                    {inStock ? "Purchase" : "Unavailable"}
                </button>

                {isAdmin && (
                    <div className="mt-2 grid grid-cols-3 gap-1.5">
                        <button
                            onClick={() => onRestock(vehicle)}
                            className="inline-flex h-7 items-center justify-center rounded-md border border-slate-200 bg-white text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50"
                        >
                            Restock
                        </button>

                        <button
                            onClick={() => onEdit(vehicle)}
                            className="inline-flex h-7 items-center justify-center rounded-md border border-slate-200 bg-white text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50"
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => onDelete(vehicle)}
                            className="inline-flex h-7 items-center justify-center rounded-md border border-red-200 bg-white text-xs font-medium text-red-600 transition-colors hover:bg-red-50"
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </article>
    );
}

export default VehicleCard;
