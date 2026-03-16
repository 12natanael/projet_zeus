import { UserCheck, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import type { Expert } from '../types';

// Liste de test pour les experts (Mock)
const mockExperts: Expert[] = [
  { id: '1', nom: 'DSAMAGO', prenom: 'Tresor', score: 'Excellent', justification: 'Expertise en cryptographie', competences: ['Forensics', 'Python'] },
  { id: '2', nom: 'MELONE', prenom: 'Andre', score: 'Bon', justification: 'Spécialiste intrusions réseau', competences: ['Network', 'Wireshark'] },
  { id: '3', nom: 'EMBOLO', prenom: 'Douglas', score: 'Excellent', justification: 'Analyse de malwares complexes', competences: ['Reverse Eng.', 'C++'] }
];

export default function Step2Expert({ onSelect, onBack }: { onSelect: (e: Expert) => void; onBack?: () => void }) {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [error, setError] = useState('');

  const handleSelect = (expert: Expert) => {
    setSelectedExpert(expert);
    setError('');
  };

  const handleNext = () => {
    if (!selectedExpert) {
      setError('Veuillez sélectionner un expert');
      return;
    }
    onSelect(selectedExpert);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-800">Experts recommandés</h2>
        <p className="text-slate-500">L'IA a sélectionné les meilleurs profils pour votre cas.</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-600">• {error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockExperts.map((exp) => (
          <button
            key={exp.id}
            type="button"
            onClick={() => handleSelect(exp)}
            className={`border-2 rounded-2xl p-6 cursor-pointer transition-all group text-left ${
              selectedExpert?.id === exp.id
                ? 'border-blue-600 bg-blue-50'
                : 'border-slate-100 hover:border-blue-500 hover:bg-blue-50/30'
            }`}
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto transition-colors ${
              selectedExpert?.id === exp.id
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 group-hover:bg-blue-100 group-hover:text-blue-600'
            }`}>
              <UserCheck size={30} />
            </div>
            <h3 className="font-bold text-center text-slate-800">{exp.prenom} {exp.nom}</h3>
            <div className="flex items-center justify-center gap-1 text-amber-500 text-sm font-bold my-2">
              <Star size={14} fill="currentColor" /> {exp.score}
            </div>
            <p className="text-xs text-slate-500 text-center italic mt-3">"{exp.justification}"</p>
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        {onBack && (
          <button 
            onClick={onBack}
            className="flex-1 border border-slate-300 text-slate-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft size={20} />
            Retour
          </button>
        )}
        <button 
          onClick={handleNext}
          className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
        >
          Suivant : Finalisation <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}