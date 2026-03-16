import { FileText, Clock, AlertCircle } from 'lucide-react';

// 1. Données de test pour les mandats
interface Mandate {
  id: string;
  type: string;
  priority: string;
  status: string;
  date: string;
  desc: string;
}

const mockMandats: Mandate[] = [
  { id: '550e8400', type: 'fraude_bancaire', priority: 'haute', status: 'En attente', date: '2025-10-16', desc: 'Virements suspects détectés...' },
  { id: 'b72a1982', type: 'intrusion_reseau', priority: 'moyenne', status: 'En cours', date: '2025-10-14', desc: 'Accès non autorisé au serveur principal.' },
  { id: 'c93d2011', type: 'analyse_malware', priority: 'basse', status: 'Terminé', date: '2025-10-10', desc: 'Ransomware isolé sur poste employée.' }
];

// 2. Fonction pour définir la couleur selon le statut
const getStatusColor = (status: string) => {
  switch(status) {
    case 'En attente': return 'bg-yellow-100 text-yellow-800';
    case 'En cours': return 'bg-blue-100 text-blue-800';
    case 'Terminé': return 'bg-green-100 text-green-800';
    default: return 'bg-slate-100 text-slate-800';
  }
};

export default function Dashboard({ onSelectMandate }: { onSelectMandate: (m: Mandate) => void }) {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-800">Mes mandats</h1>
        <span className="text-sm text-slate-500">Cliquez sur une carte pour afficher les détails</span>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockMandats.map((mandat) => (
          <div
            key={mandat.id}
            onClick={() => onSelectMandate(mandat)}
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md hover:border-blue-300 transition cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <FileText size={20} />
                <span className="font-semibold text-slate-800 capitalize">{mandat.type.replace('_', ' ')}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(mandat.status)}`}>
                {mandat.status}
              </span>
            </div>

            <p className="text-slate-600 text-sm mb-4 line-clamp-2">
              {mandat.desc}
            </p>

            <div className="flex justify-between items-center text-xs text-slate-500 border-t border-slate-100 pt-4">
              <div className="flex items-center space-x-1">
                <AlertCircle size={14} className={mandat.priority === 'haute' ? 'text-red-500' : ''} />
                <span className="capitalize">Priorité: {mandat.priority}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{mandat.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
