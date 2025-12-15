import React from 'react';
import type { Product, Category } from '../types';
import ProductCard from './ProductCard';
import { FilterX } from 'lucide-react';

interface CatalogProps {
  products: Product[];
  category: Category;
  searchTerm: string;
}

const Catalog: React.FC<CatalogProps> = ({ products, category, searchTerm }) => {
  const filteredProducts = products.filter(product => {
    const matchesCategory = category === 'all' || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.code.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryTitle = () => {
    switch (category) {
      case 'seguranca': return 'Botinas de Segurança';
      case 'tradicional': return 'Botinas Tradicionais';
      default: return 'Catálogo Completo';
    }
  };

  return (
    <div className="px-4 lg:px-0 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-prado-navy mb-2">{getCategoryTitle()}</h2>
        <p className="text-gray-600">
            {filteredProducts.length} produto{filteredProducts.length !== 1 && 's'} encontrado{filteredProducts.length !== 1 && 's'}
            {searchTerm && <span> para "<span className="font-semibold text-prado-navy">{searchTerm}</span>"</span>}
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-gray-100">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4">
            <FilterX size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhum produto encontrado</h3>
          <p className="text-gray-500 max-w-md text-center">
            Tente ajustar seus filtros ou buscar por outro termo.
          </p>
        </div>
      )}
    </div>
  );
};

export default Catalog;