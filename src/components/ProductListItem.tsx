import React from 'react';
import type { Product } from '../types';
import { ArrowUpRight, Shield, Leaf, Ruler, Layers } from 'lucide-react';

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  // Function to handle opening in new tab/window
  const handleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    // Using hash router format for the new window
    window.open(`#/product/${product.id}`, '_blank');
  };

  return (
    <a 
      href={`#/product/${product.id}`}
      onClick={handleOpen}
      className="group flex flex-col md:flex-row bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-prado-gold/50 transition-all duration-300 overflow-hidden"
    >
      {/* Image Section */}
      <div className="w-full md:w-64 h-64 md:h-auto bg-prado-cream relative flex-shrink-0 overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.isNew && (
            <span className="absolute top-3 left-3 bg-prado-gold text-prado-dark text-xs font-bold px-3 py-1 rounded shadow-sm">
                NOVO
            </span>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
            <div className="flex items-center gap-3 mb-2">
                {product.category === 'seguranca' ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-prado-navy/10 text-prado-navy text-xs font-bold uppercase tracking-wide">
                        <Shield size={12} /> Segurança
                    </span>
                ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-prado-rust/10 text-prado-rust text-xs font-bold uppercase tracking-wide">
                        <Leaf size={12} /> Tradicional
                    </span>
                )}
                <span className="text-gray-400 text-xs">|</span>
                <span className="text-gray-500 text-xs font-mono tracking-wider">{product.code}</span>
            </div>

            <h3 className="text-2xl font-bold text-prado-navy mb-3 group-hover:text-prado-rust transition-colors">
                {product.name}
            </h3>
            
            <p className="text-gray-600 mb-6 line-clamp-2">
                {product.description}
            </p>

            {/* Tech Specs Preview */}
            <div className="grid grid-cols-2 gap-3 mb-4 md:mb-0">
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                    <Layers size={16} className="text-prado-rust" />
                    <span className="truncate">{product.specs.material}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                    <Ruler size={16} className="text-prado-rust" />
                    <span>{product.specs.numeracao}</span>
                </div>
            </div>
        </div>

        <div className="flex items-center text-prado-navy font-bold text-sm mt-4 md:mt-0 pt-4 border-t border-gray-100 group-hover:border-prado-gold/30 transition-colors">
            Ver Ficha Técnica Completa
            <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </a>
  );
};

export default ProductListItem;