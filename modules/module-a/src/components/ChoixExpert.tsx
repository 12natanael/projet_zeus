import { UserCheck, Star } from 'lucide-react';
import type { Expert } from '../types';

// Liste de test pour les experts (Mock)
const mockExperts: Expert[] = [
  { id: '1', nom: 'DSAMAGO', prenom: 'Tresor', score: 'Excellent', justification: 'Expertise en cryptographie', competences: ['Forensics', 'Python'] },
  { id: '2', nom: 'MELONE', prenom: 'Andre', score: 'Bon', justification: 'Spécialiste intrusions réseau', competences: ['Network', 'Wireshark'] },
  { id: '3', nom: 'EMBOLO', prenom: 'Douglas', score: 'Excellent', justification: 'Analyse de malwares complexes', competences: ['Reverse Eng.', 'C++'] }
];

export default function Step2Expert({ onSelect }: { onSelect: (e: Expert) => void }) {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-800">Experts recommandés</h2>
        <p className="text-slate-500">L'IA a sélectionné les meilleurs profils pour votre cas.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockExperts.map((exp) => (
          <div 
            key={exp.id}
            onClick={() => onSelect(exp)}
            className="border-2 border-slate-100 rounded-2xl p-6 hover:border-blue-500 cursor-pointer transition-all group hover:bg-blue-50/30"
          >
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
              <UserCheck size={30} />
            </div>
            <h3 className="font-bold text-center text-slate-800">{exp.prenom} {exp.nom}</h3>
            <div className="flex items-center justify-center gap-1 text-amber-500 text-sm font-bold my-2">
              <Star size={14} fill="currentColor" /> {exp.score}
            </div>
            <p className="text-xs text-slate-500 text-center italic mt-3">"{exp.justification}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}