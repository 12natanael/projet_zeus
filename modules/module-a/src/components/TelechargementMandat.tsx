import { FileDown, CheckCircle2 } from 'lucide-react';

export default function Step3Download({ data, expert, onFinish }: { data: any; expert: any; onFinish: () => void }) {
  return (
    <div className="text-center space-y-8 animate-in zoom-in-95 duration-500">
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-100">
          <CheckCircle2 size={48} />
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-black text-slate-800">Mandat prêt !</h2>
        <p className="text-slate-500 mt-2">Le document officiel a été généré et signé numériquement.</p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left max-w-md mx-auto">
        <p className="text-sm text-slate-500 mb-1">Expert désigné :</p>
        <p className="font-bold text-slate-800 mb-4">{expert?.prenom} {expert?.nom}</p>
        <p className="text-sm text-slate-500 mb-1">Type de mission :</p>
        <p className="font-bold text-slate-800">{data?.case_type}</p>
      </div>

      <div className="flex flex-col gap-3">
        <button className="bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all">
          <FileDown size={20} /> Télécharger le Mandat (PDF)
        </button>
        <button 
          onClick={onFinish}
          className="text-slate-500 font-semibold hover:text-blue-600 transition-colors"
        >
          Retour au tableau de bord
        </button>
      </div>
    </div>
  );
}