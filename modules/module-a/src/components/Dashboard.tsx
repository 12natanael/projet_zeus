import { FileText, Clock, Activity, FileCheck, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Mandats', val: 12, icon: <FileText />, color: 'blue' },
          { label: 'En attente', val: 3, icon: <Clock />, color: 'amber' },
          { label: 'En cours', val: 5, icon: <Activity />, color: 'indigo' },
          { label: 'Terminés', val: 4, icon: <FileCheck />, color: 'emerald' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-4">
            <div className={`p-3 bg-${stat.color}-50 text-${stat.color}-600 rounded-lg`}>{stat.icon}</div>
            <div>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-800">{stat.val}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Cases Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-slate-800">Dossiers récents</h2>
          <button className="text-sm text-blue-600 font-medium flex items-center">Voir tout <ChevronRight size={16} /></button>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 text-slate-500 text-sm border-b border-slate-200">
              <th className="px-6 py-3 font-medium">ID Mandat</th>
              <th className="px-6 py-3 font-medium">Titre</th>
              <th className="px-6 py-3 font-medium">Statut</th>
              <th className="px-6 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-slate-900">MND-2026-001</td>
              <td className="px-6 py-4 text-sm text-slate-600">Intrusion Serveur Web</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium border bg-blue-100 text-blue-800 border-blue-200">En cours</span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Détails</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;