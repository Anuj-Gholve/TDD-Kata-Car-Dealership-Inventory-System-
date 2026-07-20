function VehicleCard({ vehicle }) {

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
                    className="bg-green-600 text-white px-3 py-2 rounded"
                >
                    Purchase
                </button>

                <button
                    className="bg-yellow-500 text-white px-3 py-2 rounded"
                >
                    Edit
                </button>

                <button
                    className="bg-red-600 text-white px-3 py-2 rounded"
                >
                    Delete
                </button>

            </div>

        </div>

    );

}

export default VehicleCard;