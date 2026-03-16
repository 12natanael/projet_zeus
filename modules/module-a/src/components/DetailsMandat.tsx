import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import type { PriorityLevel } from '../types';

interface CaseData {
  title: string;
  case_type: string;
  priority: PriorityLevel;
  description: string;
}

interface FieldErrors {
  title?: string;
  description?: string;
}

export default function Step1Details({ onNext, onBack }: { onNext: (data: CaseData) => void; onBack?: () => void }) {
  const [formData, setFormData] = useState({
    title: '',
    case_type: 'Fraude Bancaire',
    priority: 'Standard' as PriorityLevel,
    description: ''
  });
  const [errors, setErrors] = useState<FieldErrors>({});

  const validateForm = () => {
    const newErrors: FieldErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Titre de l\'affaire requis';
    if (!formData.description.trim()) newErrors.description = 'Description détaillée requise';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext(formData);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-slate-800">Détails du mandat</h2>

      {/* CHAMP TITRE DU CAS*/}
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="text-sm font-bold text-slate-700">Titre de l'affaire * <span className="text-red-500">requis</span></label>
        <input 
          type="text"
          required
          placeholder="Ex: Intrusion système comptabilité"
          className={`border p-3.5 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
            errors.title ? 'border-red-500 bg-red-50' : 'border-slate-200'
          }`}
          value={formData.title}
          onChange={(e) => {
            setFormData({...formData, title: e.target.value});
            if (errors.title) setErrors({...errors, title: undefined});
          }}
        />
        {errors.title && (
          <p className="text-sm text-red-600 font-medium">• {errors.title}</p>
        )}
      </div>
      {/* CHAMPS TYPE DE CAS & PRIORITÉ */}
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-600">Type de cas</label>
          <select 
            className="border border-slate-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
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
            className="border border-slate-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={formData.priority}
            onChange={(e) => setFormData({...formData, priority: e.target.value as PriorityLevel})}
          >
            <option>Minimal</option>
            <option>Standard</option>
            <option>Avancée</option>
          </select>
        </div>
      </div>

      {/* CHAMP DESCRIPTION */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-slate-600">Description détaillée * <span className="text-red-500">requise</span></label>
        <textarea 
          rows={5}
          className={`border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
            errors.description ? 'border-red-500 bg-red-50' : 'border-slate-200'
          }`}
          placeholder="Décrivez le plus en détail possible les faits, les éléments suspects, les impacts potentiels..."
          value={formData.description}
          onChange={(e) => {
            setFormData({...formData, description: e.target.value});
            if (errors.description) setErrors({...errors, description: undefined});
          }}
        />
        {errors.description && (
          <p className="text-sm text-red-600 font-medium">• {errors.description}</p>
        )}
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
          Suivant : Choix de l'expert <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}