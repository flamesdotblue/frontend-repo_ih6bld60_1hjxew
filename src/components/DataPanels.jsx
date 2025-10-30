import { useState } from "react";
import { Trophy, BookOpen, DollarSign, CheckCircle, Clock } from "lucide-react";

export default function DataPanels({ competitions, trainings, commissions }) {
  const tabs = [
    { key: "competitions", label: "Competitions", icon: Trophy },
    { key: "training", label: "Agents Training", icon: BookOpen },
    { key: "commission", label: "Commission", icon: DollarSign },
  ];
  const [active, setActive] = useState("competitions");

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-2 p-2 border-b border-slate-200 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                active === t.key
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </div>

        {active === "competitions" && (
          <div className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500">
                    <th className="py-2 font-medium">Name</th>
                    <th className="py-2 font-medium">Status</th>
                    <th className="py-2 font-medium">Ends</th>
                    <th className="py-2 font-medium">Top Agent</th>
                  </tr>
                </thead>
                <tbody>
                  {competitions.map((c) => (
                    <tr key={c.id} className="border-t border-slate-100">
                      <td className="py-3 text-slate-900 font-medium">{c.name}</td>
                      <td className="py-3">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                            c.status === "Live"
                              ? "bg-emerald-50 text-emerald-700"
                              : c.status === "Upcoming"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {c.status === "Live" ? (
                            <CheckCircle className="h-3.5 w-3.5" />
                          ) : (
                            <Clock className="h-3.5 w-3.5" />
                          )}
                          {c.status}
                        </span>
                      </td>
                      <td className="py-3 text-slate-600">{c.ends}</td>
                      <td className="py-3 text-slate-600">{c.topAgent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {active === "training" && (
          <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trainings.map((t) => (
              <div
                key={t.id}
                className="rounded-xl border border-slate-200 p-4 bg-slate-50/50"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-sm text-slate-500">{t.category}</p>
                    <p className="font-semibold text-slate-900">{t.title}</p>
                  </div>
                  <BookOpen className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="h-2 w-full bg-white rounded-full overflow-hidden border border-slate-200">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
                    style={{ width: `${t.progress}%` }}
                  />
                </div>
                <div className="mt-2 text-xs text-slate-600">{t.progress}% complete</div>
              </div>
            ))}
          </div>
        )}

        {active === "commission" && (
          <div className="p-4 grid md:grid-cols-3 gap-4">
            {commissions.map((c) => (
              <div key={c.id} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">{c.name}</p>
                  <DollarSign className="h-4 w-4 text-emerald-600" />
                </div>
                <p className="mt-2 text-2xl font-semibold text-slate-900">{c.amount}</p>
                <p className="mt-1 text-xs text-emerald-600">{c.note}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
