import React from 'react';
import { Search, ShieldCheck, Footprints, LayoutGrid, X, Home, Phone, HelpCircle } from 'lucide-react';
import type { Category } from '../types';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  isOpen,
  setIsOpen,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (category: Category, path: string) => {
    setSelectedCategory(category);
    if (location.pathname !== path) {
      navigate(path);
    }
    setIsOpen(false);
  };

  const navGroups = [
    {
      title: "Menu Principal",
      items: [
        { id: 'home', label: 'Início', icon: Home, cat: 'all' as Category, path: '/' },
        { id: 'all', label: 'Catálogo Completo', icon: LayoutGrid, cat: 'all' as Category, path: '/catalog' },
      ]
    },
    {
      title: "Categorias",
      items: [
        { id: 'seguranca', label: 'Linha Segurança', icon: ShieldCheck, cat: 'seguranca' as Category, path: '/catalog' },
        { id: 'tradicional', label: 'Linha Tradicional', icon: Footprints, cat: 'tradicional' as Category, path: '/catalog' },
      ]
    },
    {
      title: "Institucional",
      items: [
        { id: 'contact', label: 'Fale Conosco', icon: Phone, cat: 'all' as Category, path: '#' },
        { id: 'about', label: 'Sobre a Prado', icon: HelpCircle, cat: 'all' as Category, path: '#' },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-prado-navy/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed top-0 left-0 z-50 h-screen w-72 bg-prado-dark text-white 
          transform transition-transform duration-300 ease-in-out shadow-2xl border-r border-white/5
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:sticky md:top-0
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-8 border-b border-white/10 bg-gradient-to-b from-prado-dark to-[#161f29]">
            <div 
              className="cursor-pointer group" 
              onClick={() => { navigate('/'); setIsOpen(false); }}
            >
              <h1 className="text-2xl font-bold tracking-tight text-white group-hover:text-prado-gold transition-colors">
                PRADO
              </h1>
              <div className="flex items-center gap-2">
                 <div className="h-0.5 w-8 bg-prado-gold"></div>
                 <p className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">Calçados</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-6 right-6 md:hidden text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Search Section */}
          <div className="px-6 py-6">
            <div className="relative group">
              <input
                type="text"
                placeholder="Buscar produto..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  if (location.pathname !== '/catalog') navigate('/catalog');
                }}
                className="w-full bg-[#161f29] text-gray-200 placeholder-gray-500 rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-prado-gold border border-white/5 group-hover:border-white/10 transition-all"
              />
              <Search className="absolute left-3 top-3.5 text-gray-500 group-hover:text-prado-gold transition-colors" size={16} />
            </div>
          </div>

          {/* Navigation Scroll Area */}
          <nav className="flex-1 overflow-y-auto px-4 pb-6 space-y-8 custom-scrollbar">
            {navGroups.map((group, idx) => (
              <div key={idx}>
                <h3 className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">
                  {group.title}
                </h3>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = 
                        (item.id === 'home' && location.pathname === '/') || 
                        (item.id !== 'contact' && item.id !== 'about' && selectedCategory === item.cat && location.pathname === '/catalog' && item.id !== 'home');
                    
                    return (
                        <button
                          key={item.id}
                          onClick={() => handleNavigation(item.cat, item.path)}
                          className={`
                            w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group/btn
                            ${isActive
                              ? 'bg-prado-gold text-prado-dark font-semibold shadow-lg shadow-black/20' 
                              : 'text-gray-400 hover:bg-white/5 hover:text-white'}
                          `}
                        >
                          <item.icon 
                            size={18} 
                            className={isActive ? 'text-prado-dark' : 'text-gray-500 group-hover/btn:text-prado-gold transition-colors'} 
                          />
                          <span className="text-sm">{item.label}</span>
                          {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-prado-dark"></div>}
                        </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          {/* Footer User/Info */}
          <div className="p-4 border-t border-white/5 bg-[#161f29]">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-prado-gold flex items-center justify-center text-prado-dark font-bold text-xs">
                    PC
                </div>
                <div>
                    <p className="text-xs text-white font-medium">Prado Calçados</p>
                    <p className="text-[10px] text-gray-500">Versão 2.4.0</p>
                </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;