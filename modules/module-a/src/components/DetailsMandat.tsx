import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { PriorityLevel } from '../types';

interface CaseData {
  title: string;
  case_type: string;
  priority: PriorityLevel;
  description: string;
}

export default function Step1Details({ onNext }: { onNext: (data: CaseData) => void }) {
  const [formData, setFormData] = useState({
    title: '',
    case_type: 'Fraude Bancaire',
    priority: 'Standard' as PriorityLevel,
    description: ''
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-slate-800">Détails du mandat</h2>
      {/* CHAMP TITRE : Occupe 2 colonnes sur grand écran */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-bold text-slate-700">Titre de l'affaire *</label>
          <input 
            type="text"
            required
            placeholder="Ex: Intrusion système comptabilité"
            className="border border-slate-200 p-3.5 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
        </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-600">Type de cas</label>
          <select 
            className="border border-slate-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.case_type}
            onChange={(e) => setFormData({...formData, case_type: e.target.value})}
          >
            <option>Fraude Bancaire</option>
            <option>Intrusion Réseau</option>
            <option>Vol de Données</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-600">Priorité</label>
          <select 
            className="border border-slate-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.priority}
            onChange={(e) => setFormData({...formData, priority: e.target.value as PriorityLevel})}
          >
            <option>Minimal</option>
            <option>Standard</option>
            <option>Avancée</option>
          </select>
        </div>
      </div>
      {/* Description détaillée */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-slate-600">Description détaillée</label>
        <textarea 
          rows={5}
          className="border border-slate-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Décrivez les faits..."
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
      </div>
      <button 
        onClick={() => onNext(formData)}
        className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
      >
        Suivant : Choix de l'expert <ArrowRight size={20} />
      </button>
    </div>
  );
}