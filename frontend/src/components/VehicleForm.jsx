import { useEffect, useState } from "react";

const defaultValues = {
    make: "",
    model: "",
    category: "",
    price: "",
    quantity: "",
};

function VehicleForm({ initialValues, onSubmit, submitText }) {
    const [formData, setFormData] = useState(initialValues || defaultValues);

    useEffect(() => {
        setFormData(initialValues || defaultValues);
    }, [initialValues]);

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

    const inputClassName =
        "w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="make" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Make
                    </label>

                    <input
                        id="make"
                        type="text"
                        name="make"
                        placeholder="Toyota"
                        value={formData.make}
                        onChange={handleChange}
                        className={inputClassName}
                    />
                </div>

                <div>
                    <label htmlFor="model" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Model
                    </label>

                    <input
                        id="model"
                        type="text"
                        name="model"
                        placeholder="Fortuner"
                        value={formData.model}
                        onChange={handleChange}
                        className={inputClassName}
                    />
                </div>

                <div>
                    <label htmlFor="category" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Category
                    </label>

                    <input
                        id="category"
                        type="text"
                        name="category"
                        placeholder="SUV"
                        value={formData.category}
                        onChange={handleChange}
                        className={inputClassName}
                    />
                </div>

                <div>
                    <label htmlFor="price" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Price
                    </label>

                    <input
                        id="price"
                        type="number"
                        name="price"
                        placeholder="2500000"
                        value={formData.price}
                        onChange={handleChange}
                        className={inputClassName}
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="quantity" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Quantity
                    </label>

                    <input
                        id="quantity"
                        type="number"
                        name="quantity"
                        placeholder="10"
                        value={formData.quantity}
                        onChange={handleChange}
                        className={inputClassName}
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700"
            >
                {submitText}
            </button>
        </form>
    );
}

export default VehicleForm;