import Header from "./components/Header";
import KPIOverview from "./components/KPIOverview";
import PerformanceTrends from "./components/PerformanceTrends";
import DataPanels from "./components/DataPanels";

function App() {
  // Mock data to illustrate the dashboard; can be wired to a backend later.
  const kpis = {
    revenue: "$1.24M",
    roi: "156%",
    agents: 138,
    competitions: 5,
  };

  const performanceData = [
    { label: "Jan", value: 78 },
    { label: "Feb", value: 92 },
    { label: "Mar", value: 86 },
    { label: "Apr", value: 101 },
    { label: "May", value: 97 },
    { label: "Jun", value: 110 },
    { label: "Jul", value: 120 },
    { label: "Aug", value: 132 },
    { label: "Sep", value: 124 },
    { label: "Oct", value: 135 },
    { label: "Nov", value: 140 },
    { label: "Dec", value: 149 },
  ];

  const competitions = [
    { id: 1, name: "Q4 Conversion Sprint", status: "Live", ends: "Dec 28", topAgent: "A. Sharma" },
    { id: 2, name: "Regional Lead-Off", status: "Live", ends: "Dec 19", topAgent: "M. Diaz" },
    { id: 3, name: "New Year Kickoff", status: "Upcoming", ends: "Jan 07", topAgent: "—" },
  ];

  const trainings = [
    { id: 1, title: "Advanced Funnel Optimization", category: "Performance", progress: 92 },
    { id: 2, title: "CRM Playbooks", category: "Sales Ops", progress: 76 },
    { id: 3, title: "Attribution Modeling", category: "Analytics", progress: 64 },
    { id: 4, title: "Creative Testing 101", category: "Creative", progress: 88 },
    { id: 5, title: "Paid Social Deep Dive", category: "Acquisition", progress: 53 },
    { id: 6, title: "Compliance & Brand Safety", category: "Governance", progress: 100 },
  ];

  const commissions = [
    { id: 1, name: "Q4 Commission", amount: "$48,920", note: "+6.2% vs last quarter" },
    { id: 2, name: "Bonus Payouts", amount: "$12,300", note: "Hit stretch goal" },
    { id: 3, name: "Referral Earnings", amount: "$7,840", note: "+2.1% MoM" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Header />
      <main className="pb-10">
        <KPIOverview kpis={kpis} />
        <PerformanceTrends data={performanceData} />
        <DataPanels competitions={competitions} trainings={trainings} commissions={commissions} />
      </main>
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-xs text-slate-500">
        Built for marketing teams to track performance, competitions, training, and commissions.
      </footer>
    </div>
  );
}

export default App;
