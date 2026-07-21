import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function EditVehicle() {
    const { id } = useParams();

    return (
        <div className="min-h-screen bg-[#f4f5f7]">
            <Navbar />

            <main className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6">
                <div className="w-full max-w-sm rounded-lg border border-slate-200 bg-white p-5 text-center">
                    <p className="text-sm font-semibold text-slate-900">
                        Edit Vehicle
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                        Vehicle ID: {id}. Use the dashboard to edit vehicles via the inventory modal.
                    </p>

                    <Link
                        to="/dashboard"
                        className="mt-4 inline-flex h-8 items-center justify-center rounded-md bg-slate-900 px-3.5 text-xs font-medium text-white transition-colors hover:bg-slate-800"
                    >
                        Go to Dashboard
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default EditVehicle;
