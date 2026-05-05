import React from 'react';
import { LayoutDashboard, MapPin, Leaf, Globe, Bell, Search, Menu, X, UserCircle } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      active 
        ? 'bg-blue-900 text-white shadow-md' 
        : 'text-slate-400 hover:bg-slate-100 hover:text-slate-900'
    }`}
  >
    <Icon size={20} className={active ? 'text-emerald-400' : ''} />
    <span className="font-medium text-sm">{label}</span>
  </button>
);

export const Layout = ({ children, currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'geotag', label: 'Geotag Upload (Warga)', icon: MapPin },
    { id: 'market', label: 'Carbon Market', icon: Leaf },
    { id: 'impact', label: 'Systemic Harmony', icon: Globe },
  ];

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white border-r border-slate-200 shadow-sm
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col
      `}>
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
              <Leaf size={18} className="text-emerald-400" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Carbonix</span>
          </div>
          <button className="lg:hidden text-slate-500" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={currentPage === item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setIsMobileMenuOpen(false);
              }}
            />
          ))}
        </nav>

        <div className="p-4 m-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
          <p className="text-xs text-slate-500 mb-2">Hackathon Demo</p>
          <div className="flex items-center space-x-2 text-sm font-medium text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Systemic Harmony</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 z-10 sticky top-0">
          <div className="flex items-center">
            <button 
              className="lg:hidden mr-4 text-slate-500 hover:text-slate-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="relative hidden md:block group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search projects, tags..." 
                className="pl-10 pr-4 py-2 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none w-64"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <button className="flex items-center space-x-2 p-1 pr-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                <UserCircle size={20} />
              </div>
              <span className="text-sm font-medium text-slate-700 hidden sm:block">Admin</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto pb-12">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
