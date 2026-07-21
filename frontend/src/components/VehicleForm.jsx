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
        "w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-slate-400 focus:ring-1 focus:ring-slate-200";

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                    <label htmlFor="make" className="mb-1 block text-xs font-medium text-slate-600">
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
                    <label htmlFor="model" className="mb-1 block text-xs font-medium text-slate-600">
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
                    <label htmlFor="category" className="mb-1 block text-xs font-medium text-slate-600">
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
                    <label htmlFor="price" className="mb-1 block text-xs font-medium text-slate-600">
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
                    <label htmlFor="quantity" className="mb-1 block text-xs font-medium text-slate-600">
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
                className="flex h-8 w-full items-center justify-center rounded-md bg-slate-900 text-xs font-medium text-white transition-colors hover:bg-slate-800"
            >
                {submitText}
            </button>
        </form>
    );
}

export default VehicleForm;