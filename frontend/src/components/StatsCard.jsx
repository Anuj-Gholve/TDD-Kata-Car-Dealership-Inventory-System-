function StatsCard({ title, value }) {
    return (
        <div className="rounded-lg border border-slate-200 bg-white p-5 transition-all duration-200 hover:shadow-md">
            <p className="text-sm font-medium text-slate-500">
                {title}
            </p>

            <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                {value}
            </p>
        </div>
    );
}

export default StatsCard;