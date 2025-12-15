import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Hammer, Sparkles, LayoutList, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductListItem from './ProductListItem';
// import ProductCard from './ProductCard'; // Keeping if needed for other sections, but mainly using ListItem

interface HomeProps {
  setSearchTerm: (term: string) => void;
}

const Home: React.FC<HomeProps> = ({ setSearchTerm }) => {
  const navigate = useNavigate();
  const [localSearch, setLocalSearch] = useState('');
  
  // Getting more products to show in the list
  const collectionProducts = PRODUCTS.slice(0, 4);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearch.trim()) {
      setSearchTerm(localSearch);
      navigate('/catalog');
    }
  };

  return (
    <div className="space-y-12 pb-12">
      {/* Main Search Bar */}
      <section className="px-4 lg:px-0 pt-4">
        <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto group">
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Busque por nome, código ou modelo..." 
                    value={localSearch}
                    onChange={(e) => setLocalSearch(e.target.value)}
                    className="w-full bg-white border-2 border-gray-100 text-gray-700 text-lg rounded-full py-4 pl-14 pr-32 shadow-lg shadow-gray-200/50 focus:outline-none focus:border-prado-gold focus:ring-4 focus:ring-prado-gold/10 transition-all placeholder-gray-400"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-prado-gold transition-colors" size={24} />
                <button 
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 bg-prado-navy hover:bg-prado-dark text-white rounded-full px-8 font-bold transition-transform hover:scale-105 active:scale-95 shadow-md"
                >
                    Buscar
                </button>
            </div>
        </form>
      </section>

      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-prado-dark text-white shadow-2xl mx-4 lg:mx-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-prado-dark via-prado-dark/80 to-transparent"></div>
        
        <div className="relative z-10 px-8 py-20 md:py-32 max-w-4xl">
          <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-prado-gold text-xs font-bold tracking-widest uppercase mb-6 border border-white/10">
            Nova Coleção 2024
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Excelência em cada passo.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-prado-gold to-yellow-200">Segurança e Tradição.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
            Há mais de 20 anos produzindo calçados que unem a robustez necessária para o trabalho pesado com o conforto que seus pés merecem.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
                onClick={() => navigate('/catalog')}
                className="bg-prado-gold hover:bg-[#eeb14e] text-prado-dark font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 transform hover:scale-105 shadow-lg shadow-[#FEC761]/20"
            >
                Explorar Catálogo
                <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-prado-gold/30 hover:shadow-md transition-all group">
            <div className="w-14 h-14 bg-prado-navy/5 rounded-2xl flex items-center justify-center text-prado-navy mb-6 group-hover:bg-prado-navy group-hover:text-white transition-colors">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-prado-navy mb-3">Certificação CA</h3>
            <p className="text-gray-600 leading-relaxed">
              Todos os nossos produtos da linha de segurança possuem Certificado de Aprovação (CA) válido e rigorosamente testado.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-prado-gold/30 hover:shadow-md transition-all group">
            <div className="w-14 h-14 bg-prado-navy/5 rounded-2xl flex items-center justify-center text-prado-navy mb-6 group-hover:bg-prado-navy group-hover:text-white transition-colors">
              <Hammer size={28} />
            </div>
            <h3 className="text-xl font-bold text-prado-navy mb-3">Durabilidade Extrema</h3>
            <p className="text-gray-600 leading-relaxed">
              Couro legítimo e solados de alta performance garantem uma vida útil superior mesmo nas condições mais adversas.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-prado-gold/30 hover:shadow-md transition-all group">
            <div className="w-14 h-14 bg-prado-navy/5 rounded-2xl flex items-center justify-center text-prado-navy mb-6 group-hover:bg-prado-navy group-hover:text-white transition-colors">
              <Sparkles size={28} />
            </div>
            <h3 className="text-xl font-bold text-prado-navy mb-3">Design Ergonômico</h3>
            <p className="text-gray-600 leading-relaxed">
              Tecnologia de conforto que reduz a fadiga muscular, permitindo que você trabalhe melhor por mais tempo.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products List */}
      <section className="px-4 lg:px-0">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <div>
              <h2 className="text-3xl font-bold text-prado-navy flex items-center gap-3">
                <LayoutList className="text-prado-rust" />
                Destaques da Coleção
              </h2>
              <p className="text-gray-500 mt-1">Produtos selecionados para máxima performance.</p>
          </div>
          <button 
            onClick={() => navigate('/catalog')}
            className="hidden md:flex items-center gap-2 text-prado-navy font-bold hover:text-prado-rust transition-colors px-4 py-2 hover:bg-white rounded-lg"
          >
            Ver catálogo completo <ArrowRight size={16} />
          </button>
        </div>
        
        {/* List Layout */}
        <div className="flex flex-col gap-6">
          {collectionProducts.map(product => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
            <button 
                onClick={() => navigate('/catalog')}
                className="text-prado-navy font-bold hover:text-prado-rust transition-colors inline-flex items-center gap-2"
            >
                Ver catálogo completo <ArrowRight size={16} />
            </button>
        </div>
      </section>
    </div>
  );
};

export default Home;