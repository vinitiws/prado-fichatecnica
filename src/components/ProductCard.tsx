import type { Product } from '../types';
import { ArrowRight, Shield, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
    >
      <div className="relative aspect-square overflow-hidden bg-prado-cream">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
            {product.category === 'seguranca' ? (
                <span className="bg-prado-navy/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Shield size={10} /> Segurança
                </span>
            ) : (
                <span className="bg-prado-rust/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Leaf size={10} /> Tradicional
                </span>
            )}
            {product.isNew && (
                <span className="bg-prado-gold text-prado-dark font-bold text-xs px-2 py-1 rounded-full">
                    NOVO
                </span>
            )}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-2">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">{product.code}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-prado-navy transition-colors mb-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm font-medium text-prado-navy">Ver detalhes</span>
          <div className="w-8 h-8 rounded-full bg-prado-beige/30 text-prado-navy flex items-center justify-center group-hover:bg-prado-gold group-hover:text-prado-dark transition-colors">
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;