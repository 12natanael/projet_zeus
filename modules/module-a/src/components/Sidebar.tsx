import { Shield, LayoutDashboard, PlusCircle, Users, Settings, LogOut, X } from 'lucide-react';

export type TabKey = 'dashboard' | 'experts' | 'historique' | 'nouveau';

interface SidebarProps {
  activeTab: TabKey;
  onChangeTab: (tab: TabKey) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

const SidebarItem = ({
  icon: Icon,
  label,
  active = false,
  onClick,
}: {
  icon: any;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
      active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </button>
);

export default function Sidebar({ activeTab, onChangeTab, mobileOpen, setMobileOpen }: SidebarProps) {
  const navItems: { key: TabKey; label: string; icon: any }[] = [
    { key: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
    { key: 'historique', label: 'Historique', icon: LayoutDashboard },
    { key: 'experts', label: 'Experts', icon: Users },
    { key: 'nouveau', label: 'Nouveau mandat', icon: PlusCircle },
  ];

  return (
    <>
      {/* Sidebar desktop */}
      <aside className="hidden lg:flex w-64 bg-slate-900 text-white flex-col p-4">
        <div className="flex items-center space-x-2 mb-10 px-2">
          <Shield className="text-blue-500" size={32} />
          <h1 className="text-xl font-bold tracking-tight">INVESTIG-IN</h1>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <SidebarItem
              key={item.key}
              icon={item.icon}
              label={item.label}
              active={activeTab === item.key}
              onClick={() => onChangeTab(item.key)}
            />
          ))}
        </nav>

        <div className="pt-4 border-t border-slate-800">
          <SidebarItem icon={Settings} label="Paramètres" />
          <SidebarItem icon={LogOut} label="Déconnexion" />
        </div>
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="relative w-72 bg-slate-900 text-white p-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="text-blue-500" size={28} />
                <h1 className="text-xl font-bold tracking-tight">INVESTIG-IN</h1>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-md hover:bg-slate-800"
                aria-label="Fermer le menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-2">
              {navItems.map((item) => (
                <SidebarItem
                  key={item.key}
                  icon={item.icon}
                  label={item.label}
                  active={activeTab === item.key}
                  onClick={() => {
                    onChangeTab(item.key);
                    setMobileOpen(false);
                  }}
                />
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-800">
              <SidebarItem icon={Settings} label="Paramètres" />
              <SidebarItem icon={LogOut} label="Déconnexion" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
