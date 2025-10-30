export default function PerformanceTrends({ data }) {
  const max = Math.max(...data.map((d) => d.value));

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Performance Trends</h3>
            <p className="text-sm text-slate-500">Monthly conversions and momentum</p>
          </div>
          <div className="text-xs text-slate-500">Last 12 months</div>
        </div>

        <div className="h-40 flex gap-2 items-end">
          {data.map((d) => {
            const height = Math.max(6, Math.round((d.value / max) * 140));
            return (
              <div key={d.label} className="flex-1">
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-violet-500 to-indigo-400"
                  style={{ height }}
                  title={`${d.label}: ${d.value}`}
                />
                <div className="text-[10px] text-slate-500 mt-1 text-center truncate">
                  {d.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
