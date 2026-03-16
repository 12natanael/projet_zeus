import { ArrowLeft, FileDown, Clock, User, Shield } from 'lucide-react';

interface Mandate {
  id: string;
  type: string;
  priority?: string;
  status: string;
  date?: string;
  desc?: string;
  title?: string;
  description?: string;
  progress?: number;
  expert?: string;
}

interface MandateDetailProps {
  mandate: Mandate;
  onBack: () => void;
}

export default function MandateDetail({ mandate, onBack }: MandateDetailProps) {
  return (
    <div className="animate-in slide-in-from-right-4 duration-300">
      {/* Barre d'outils supérieure */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft size={20} />
          Retour au tableau de bord
        </button>
        <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50">
          <FileDown size={18} />
          Télécharger le PDF (Signé)
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Header du Mandat */}
        <div className="p-8 border-b border-slate-100">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">
                  {mandate.type.toUpperCase()}
                </span>
                <span className="text-slate-400 font-mono text-sm">{mandate.id}</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">{mandate.title}</h2>
            </div>
            <div className="text-right">
               <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                 {mandate.status}
               </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Colonne Gauche : Description */}
          <div className="md:col-span-2 p-8 border-r border-slate-100">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Description de l'affaire</h4>
            <p className="text-slate-700 leading-relaxed mb-8">
              {mandate.description || "Aucune description détaillée fournie."}
            </p>

            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Progression de l'enquête</h4>
            <div className="space-y-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-600 font-medium">Analyse des supports</span>
                <span className="text-blue-600 font-bold">{mandate.progress || 0}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-1000" 
                  style={{ width: `${mandate.progress || 0}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Infos clés */}
          <div className="p-8 bg-slate-50">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Informations</h4>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <User className="text-slate-400" size={20} />
                <div>
                  <p className="text-xs text-slate-500">Expert assigné</p>
                  <p className="text-sm font-semibold text-slate-800">{mandate.expert || "Non assigné"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="text-slate-400" size={20} />
                <div>
                  <p className="text-xs text-slate-500">Priorité</p>
                  <p className="text-sm font-semibold text-slate-800">{mandate.priority}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-slate-400" size={20} />
                <div>
                  <p className="text-xs text-slate-500">Date de création</p>
                  <p className="text-sm font-semibold text-slate-800">{mandate.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}