function VehicleCard({
    vehicle,
    onPurchase,
    onEdit,
    onDelete,
}) {
    return (
        <div className="bg-white rounded-lg shadow p-5">

            <h2 className="text-2xl font-bold">
                {vehicle.make}
            </h2>

            <p className="mt-2">
                Model:
                <strong> {vehicle.model}</strong>
            </p>

            <p>
                Category:
                <strong> {vehicle.category}</strong>
            </p>

            <p>
                Price:
                <strong>
                    ₹{vehicle.price.toLocaleString()}
                </strong>
            </p>

            <p>
                Stock:
                <strong> {vehicle.quantity}</strong>
            </p>

            <div className="flex gap-2 mt-5">

                <button
                    onClick={() => onPurchase(vehicle)}
                    disabled={vehicle.quantity === 0}
                    className={`px-3 py-2 rounded text-white ${vehicle.quantity === 0
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700"
                        }`}
                >
                    Purchase
                </button>

                <button
                    onClick={() => onEdit(vehicle)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded"
                >
                    Edit
                </button>

                <button
                    onClick={() => onDelete(vehicle)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default VehicleCard;