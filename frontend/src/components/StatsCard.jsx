function StatsCard({ title, value }) {
    return (
        <div className="rounded-lg border border-slate-200 bg-white px-4 py-3.5">
            <p className="text-xs font-medium text-slate-500">
                {title}
            </p>

            <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
                {value}
            </p>
        </div>
    );
}

export default StatsCard;
