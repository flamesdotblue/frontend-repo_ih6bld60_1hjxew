import { TrendingUp, DollarSign, Users, Trophy } from "lucide-react";

export default function KPIOverview({ kpis }) {
  const cards = [
    {
      title: "Total Revenue",
      value: kpis.revenue,
      change: "+8.4% MoM",
      icon: DollarSign,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Campaign ROI",
      value: kpis.roi,
      change: "+3.1% QoQ",
      icon: TrendingUp,
      color: "from-indigo-500 to-violet-500",
    },
    {
      title: "Active Agents",
      value: kpis.agents,
      change: "92% trained",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Live Competitions",
      value: kpis.competitions,
      change: "2 ending soon",
      icon: Trophy,
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{c.title}</p>
                <p className="text-2xl font-semibold text-slate-900 mt-1">{c.value}</p>
              </div>
              <div
                className={`h-10 w-10 rounded-xl bg-gradient-to-br ${c.color} text-white flex items-center justify-center shadow`}
              >
                <c.icon className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-3 text-xs font-medium text-emerald-600">{c.change}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
