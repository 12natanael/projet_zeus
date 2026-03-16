import { useState, useEffect } from 'react';
import { PlusCircle } from 'lucide-react';
import Sidebar from './components/Sidebar';
import type { TabKey } from './components/Sidebar';
import Dashboard from './components/Dashboard';
import FormulaireMandat from './components/FormulaireMandat';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('dashboard');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Synchroniser l'URL avec l'onglet actif
  useEffect(() => {
    window.history.replaceState(null, '', `?tab=${activeTab}`);
  }, [activeTab]);

  // Lire l'URL au chargement
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab') as TabKey;
    if (tab && ['dashboard', 'nouveau', 'experts', 'historique'].includes(tab)) {
      setActiveTab(tab);
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-slate-100"
              aria-label="Ouvrir le menu"
            >
              <span className="block w-5 h-1 bg-slate-700 rounded" />
              <span className="block w-5 h-1 bg-slate-700 rounded mt-1" />
              <span className="block w-5 h-1 bg-slate-700 rounded mt-1" />
            </button>
            <h2 className="text-lg font-semibold text-slate-800 capitalize">{activeTab}</h2>
          </div>

          <div className="flex items-center space-x-4">
            {activeTab === 'dashboard' && (
              <button
                onClick={() => setActiveTab('nouveau')}
                className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <PlusCircle size={18} />
                Nouveau mandat
              </button>
            )}
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              M
            </div>
          </div>
        </header>

        <div className="p-6 lg:p-8 flex-1 overflow-auto">
          {activeTab === 'dashboard' && <Dashboard onSelectMandate={() => {}} />}
          {activeTab === 'experts' && (
            <div className="animate-in fade-in duration-500">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Experts</h3>
              <p className="text-slate-600">Cette section est en construction</p>
            </div>
          )}
          {activeTab === 'historique' && (
            <div className="animate-in fade-in duration-500">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Historique</h3>
              <p className="text-slate-600">Cette section est en construction.</p>
            </div>
          )}
          {activeTab === 'nouveau' && <FormulaireMandat onDone={() => setActiveTab('dashboard')} />}
        </div>
      </main>
    </div>
  );
}
