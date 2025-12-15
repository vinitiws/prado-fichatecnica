import React, { useState } from 'react';
import { HashRouter, Routes, Route,  } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import { PRODUCTS } from './constants';
import type { Category } from './types';
import { Menu } from 'lucide-react';

const Layout: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const location = useLocation();

  // Reset search when going home (optional logic, keeping simple for now)

  return (
    <div className="flex min-h-screen bg-prado-cream">
      <Sidebar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main className="flex-1 min-w-0 md:ml-0">
        {/* Mobile Header Toggle */}
        <div className="md:hidden flex items-center justify-between p-4 bg-prado-cream shadow-sm sticky top-0 z-30">
            <span className="font-bold text-prado-navy text-lg">Prado Calçados</span>
            <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 text-prado-navy hover:bg-prado-beige/20 rounded-lg"
            >
                <Menu size={24} />
            </button>
        </div>

        <div className="p-0 md:p-8 lg:p-12 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home setSearchTerm={setSearchTerm} />} />
            <Route 
              path="/catalog" 
              element={
                <Catalog 
                  products={PRODUCTS} 
                  category={selectedCategory} 
                  searchTerm={searchTerm} 
                />
              } 
            />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
};

export default App;