import { Rocket, User, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white flex items-center justify-center shadow-md">
            <Rocket className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-900">Marketing Ops Hub</h1>
            <p className="text-xs text-slate-500">Performance • Competitions • Training • Commissions</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">
            <Settings className="h-4 w-4" />
            <span className="text-sm">Settings</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900 text-white">
            <User className="h-4 w-4" />
            <span className="text-sm">You</span>
          </button>
        </div>
      </div>
    </header>
  );
}
