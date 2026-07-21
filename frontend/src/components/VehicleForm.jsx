import { useState } from "react";

function VehicleForm({ initialValues, onSubmit, submitText }) {
    const [formData, setFormData] = useState(
        initialValues || {
            make: "",
            model: "",
            category: "",
            price: "",
            quantity: "",
        }
    );

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.make ||
            !formData.model ||
            !formData.category ||
            !formData.price ||
            !formData.quantity
        ) {
            alert("Please fill all fields.");
            return;
        }

        onSubmit({
            ...formData,
            price: Number(formData.price),
            quantity: Number(formData.quantity),
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            <input
                type="text"
                name="make"
                placeholder="Make"
                value={formData.make}
                onChange={handleChange}
                className="w-full border rounded p-2"
            />

            <input
                type="text"
                name="model"
                placeholder="Model"
                value={formData.model}
                onChange={handleChange}
                className="w-full border rounded p-2"
            />

            <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded p-2"
            />

            <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border rounded p-2"
            />

            <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full border rounded p-2"
            />

            <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
                {submitText}
            </button>

        </form>
    );
}

export default VehicleForm;