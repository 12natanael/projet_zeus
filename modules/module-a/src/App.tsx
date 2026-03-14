import React, { useState } from 'react';
import { Shield, FileText, Users, CheckCircle, ChevronRight, AlertTriangle, Download } from 'lucide-react';

// --- TYPES (TypeScript) ---
// En TypeScript (comme en Dart pour Flutter), on définit la forme de nos données.
interface MandateData {
  title: string;
  caseType: string;
  priority: string;
  description: string;
}

interface Expert {
  id: string;
  name: string;
  specialty: string;
  matchScore: number;
  available: boolean;
}

// --- DONNÉES FACTICES (Mock) ---
// Ces données viendront plus tard de l'API Gateway (Module B)
const MOCK_EXPERTS: Expert[] = [
  { id: 'exp-01', name: 'Dr. Alice Martin', specialty: 'Cyberattaque & Ransomware', matchScore: 98, available: true },
  { id: 'exp-02', name: 'Jean Dupont', specialty: 'Fraude Financière Interne', matchScore: 85, available: true },
  { id: 'exp-03', name: 'Sarah Connor', specialty: 'Fuite de Données (DLP)', matchScore: 76, available: false },
];

export default function App() {
  // --- ÉTATS (State Management) ---
  // L'équivalent de setState() en Flutter
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<MandateData>({
    title: '',
    caseType: 'cyberattaque',
    priority: 'moyenne',
    description: '',
  });
  const [selectedExpert, setSelectedExpert] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  // --- GESTIONNAIRES D'ÉVÉNEMENTS ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(''); // On efface l'erreur quand l'utilisateur tape
  };

  const handleNextStep = () => {
    // Validation basique (Normalement gérée par Zod)
    if (step === 1) {
      if (!formData.title || !formData.description) {
        setError('Veuillez remplir le titre et la description du cas.');
        return;
      }
    }
    if (step === 2 && !selectedExpert) {
      setError('Veuillez sélectionner un expert pour continuer.');
      return;
    }
    setStep((prev) => prev + 1);
    setError('');
  };

  const handleGenerateJSON = () => {
    // C'est ce JSON qui sera envoyé à l'API Gateway !
    const finalPayload = {
      mandate_id: `MND-${Math.floor(Math.random() * 10000)}`,
      timestamp: new Date().toISOString(),
      client_data: formData,
      assigned_expert_id: selectedExpert,
      status: 'INITIATED'
    };
    alert("Données prêtes pour l'API Gateway :\n\n" + JSON.stringify(finalPayload, null, 2));
  };

  // --- RENDU UI (Les différentes étapes) ---
  
  // Étape 1 : Formulaire
  const renderStep1 = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
        <FileText className="w-5 h-5 text-blue-600" />
        Détails de l'Investigation
      </h2>
      <p className="text-sm text-slate-500 mb-4">Veuillez décrire la nature de l'incident pour que notre IA puisse analyser et trouver les meilleurs experts.</p>
      
      {error && (
        <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm flex items-center gap-2 border border-red-200">
          <AlertTriangle className="w-4 h-4" /> {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Titre de l'affaire</label>
        <input 
          type="text" name="title" value={formData.title} onChange={handleInputChange}
          placeholder="Ex: Suspicion de fuite de données RH"
          className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Type d'incident</label>
          <select 
            name="caseType" value={formData.caseType} onChange={handleInputChange}
            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none bg-white"
          >
            <option value="cyberattaque">Cyberattaque / Intrusion</option>
            <option value="fraude">Fraude Interne</option>
            <option value="fuite">Fuite de données</option>
            <option value="materiel">Saisie de matériel</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Priorité légale</label>
          <select 
            name="priority" value={formData.priority} onChange={handleInputChange}
            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none bg-white"
          >
            <option value="basse">Basse (Analyse de routine)</option>
            <option value="moyenne">Moyenne</option>
            <option value="haute">Haute (Risque financier)</option>
            <option value="critique">Critique (Destruction de preuves imminente)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Description détaillée (Faits)</label>
        <textarea 
          name="description" value={formData.description} onChange={handleInputChange} rows={4}
          placeholder="Décrivez les faits, les systèmes impactés, et les premiers éléments constatés..."
          className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none"
        />
      </div>
    </div>
  );

  // Étape 2 : Choix de l'expert
  const renderStep2 = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
        <Users className="w-5 h-5 text-blue-600" />
        Sélection de l'Expert
      </h2>
      <p className="text-sm text-slate-500 mb-4">Le Module B a analysé votre description (NLP) et recommande ces profils qualifiés.</p>
      
      {error && (
        <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm flex items-center gap-2 border border-red-200">
          <AlertTriangle className="w-4 h-4" /> {error}
        </div>
      )}

      <div className="space-y-3">
        {MOCK_EXPERTS.map((expert) => (
          <div 
            key={expert.id}
            onClick={() => expert.available && setSelectedExpert(expert.id)}
            className={`p-4 border rounded-lg flex items-center justify-between transition-all ${
              !expert.available ? 'bg-slate-50 opacity-60 cursor-not-allowed' : 
              selectedExpert === expert.id ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500 cursor-pointer' : 'border-slate-200 hover:border-blue-300 cursor-pointer bg-white'
            }`}
          >
            <div>
              <h3 className="font-medium text-slate-800">{expert.name}</h3>
              <p className="text-sm text-slate-500">{expert.specialty}</p>
            </div>
            <div className="text-right">
              <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-1 ${expert.matchScore > 90 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                Match: {expert.matchScore}%
              </span>
              <p className="text-xs text-slate-400">{expert.available ? 'Disponible immédiatement' : 'En mission'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Étape 3 : Validation
  const renderStep3 = () => {
    const expert = MOCK_EXPERTS.find(e => e.id === selectedExpert);
    return (
      <div className="space-y-6 text-center animate-in fade-in duration-300 py-6">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Mandat Prêt</h2>
        <p className="text-slate-600 max-w-md mx-auto">
          Le mandat pour l'affaire <strong>"{formData.title}"</strong> a été préparé et sera assigné à <strong>{expert?.name}</strong>.
        </p>
        
        <div className="bg-slate-50 p-4 rounded-md text-left text-sm text-slate-700 border border-slate-200 max-w-md mx-auto">
          <p><strong>Type :</strong> {formData.caseType}</p>
          <p><strong>Priorité :</strong> {formData.priority}</p>
          <p className="mt-2 text-slate-500 italic line-clamp-2">"{formData.description}"</p>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <button 
            onClick={handleGenerateJSON}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors"
          >
            Voir Payload (Console)
          </button>
          <button 
            onClick={() => alert("Génération du PDF en cours... (Intégration @react-pdf/renderer requise)")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" /> Signer et Télécharger (PDF)
          </button>
        </div>
      </div>
    );
  };

  // --- STRUCTURE PRINCIPALE DE LA PAGE ---
  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* En-tête / Header */}
        <header className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-blue-600 text-white rounded-lg shadow-sm">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Portail Mandataire</h1>
            <p className="text-slate-500 text-sm">Système d'Investigation Numérique (Module A)</p>
          </div>
        </header>

        {/* Conteneur Principal (Card) */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          
          {/* Indicateur d'étapes (Stepper) */}
          <div className="flex border-b border-slate-100 bg-slate-50/50">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`flex-1 py-3 text-center text-sm font-medium border-b-2 transition-colors ${
                step === i ? 'border-blue-600 text-blue-600' : step > i ? 'border-green-500 text-green-600' : 'border-transparent text-slate-400'
              }`}>
                Étape {i}
              </div>
            ))}
          </div>

          {/* Contenu dynamique selon l'étape */}
          <div className="p-6 md:p-8">
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
          </div>

          {/* Pied de page / Navigation */}
          {step < 3 && (
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
              <button 
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  step === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                Retour
              </button>
              
              <button 
                onClick={handleNextStep}
                className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
              >
                Continuer <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}