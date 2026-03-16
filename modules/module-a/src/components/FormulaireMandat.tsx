import { useState } from 'react';
import Step1Details from './DetailsMandat';
import Step2Expert from './ChoixExpert';
import Step3Download from './TelechargementMandat';

interface CaseData {
  title: string;
  case_type: string;
  priority: string;
  description: string;
}

interface Expert {
  id: string;
  nom: string;
  prenom: string;
  score: string;
}

export default function FormulaireMandat({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(1);
  const [newCaseData, setNewCaseData] = useState<CaseData | null>(null);
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);

  return (
    <div className="w-full">
      {/* Barre de progression (Stepper) */}
      <div className="flex justify-between mb-12 relative">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex flex-col items-center z-10">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${
                step >= s ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-slate-200 text-slate-300'
              }`}
            >
              {s}
            </div>
            <span className={`text-xs font-bold mt-2 uppercase ${step >= s ? 'text-blue-600' : 'text-slate-300'}`}>
              {s === 1 ? 'Détails' : s === 2 ? 'Expert' : 'Finalisation'}
            </span>
          </div>
        ))}
        <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-200 z-0"></div>
        <div
          className="absolute top-5 left-0 h-0.5 bg-blue-600 transition-all duration-500 z-0"
          style={{ width: `${(step - 1) * 50}%` }}
        ></div>
      </div>

      {/* Étapes d'ajout du mandat */}
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
        {step === 1 && (
          <Step1Details
            onNext={(data) => {
              setNewCaseData(data);
              setStep(2);
            }}
          />
        )}

        {step === 2 && (
          <Step2Expert
            onSelect={(expert) => {
              setSelectedExpert(expert);
              setStep(3);
            }}
          />
        )}

        {step === 3 && (
          <Step3Download
            data={newCaseData}
            expert={selectedExpert}
            onFinish={() => {
              setStep(1);
              onDone();
            }}
          />
        )}
      </div>
    </div>
  );
}
