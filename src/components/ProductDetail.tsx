import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ArrowLeft, ShieldCheck, Ruler, Scale, Palette, Layers, Info } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (product) {
      setActiveImage(product.images[0]);
    }
    // Scroll to top when loading a detail page
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Produto não encontrado</h2>
        <button 
          onClick={() => navigate('/catalog')}
          className="text-prado-rust hover:underline"
        >
          Voltar para o catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-0 py-8">
      {/* Breadcrumb / Back */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-500 hover:text-prado-navy transition-colors mb-8 group"
      >
        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mr-3 group-hover:border-prado-navy transition-colors">
            <ArrowLeft size={16} />
        </div>
        <span className="font-medium">Voltar</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Gallery Section */}
        <div className="space-y-4">
          <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative">
            <img 
              src={activeImage} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            {product.category === 'seguranca' && (
              <div className="absolute top-4 right-4 bg-prado-navy text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
                LINHA SEGURANÇA
              </div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`
                  aspect-square rounded-xl overflow-hidden border-2 transition-all
                  ${activeImage === img ? 'border-prado-rust ring-2 ring-prado-rust/20' : 'border-transparent hover:border-gray-300'}
                `}
              >
                <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div>
          <div className="mb-2 flex items-center gap-3">
             <span className="px-3 py-1 rounded bg-gray-100 text-gray-600 text-xs font-bold tracking-wider uppercase">
               Ref: {product.code}
             </span>
             {product.isNew && (
               <span className="px-3 py-1 rounded bg-prado-gold text-prado-dark text-xs font-bold tracking-wider uppercase">
                 Lançamento
               </span>
             )}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-prado-navy mb-6 leading-tight">
            {product.name}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 border-l-4 border-prado-gold pl-6">
            {product.description}
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h3 className="text-xl font-bold text-prado-navy mb-6 flex items-center gap-2">
              <Info size={20} className="text-prado-rust" /> Ficha Técnica
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                {/* Material */}
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-prado-cream rounded-lg text-prado-navy">
                        <Layers size={20} />
                    </div>
                    <div>
                        <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Material</span>
                        <span className="text-gray-900 font-medium">{product.specs.material}</span>
                    </div>
                </div>

                {/* Numeracao */}
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-prado-cream rounded-lg text-prado-navy">
                        <Ruler size={20} />
                    </div>
                    <div>
                        <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Numeração</span>
                        <span className="text-gray-900 font-medium">{product.specs.numeracao}</span>
                    </div>
                </div>

                {/* Certificacao */}
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-prado-cream rounded-lg text-prado-navy">
                        <ShieldCheck size={20} />
                    </div>
                    <div>
                        <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Certificação</span>
                        <span className="text-gray-900 font-medium">{product.specs.certificacao || 'N/A'}</span>
                    </div>
                </div>

                {/* Peso */}
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-prado-cream rounded-lg text-prado-navy">
                        <Scale size={20} />
                    </div>
                    <div>
                        <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Peso Aproximado</span>
                        <span className="text-gray-900 font-medium">{product.specs.peso}</span>
                    </div>
                </div>

                {/* Cores */}
                <div className="col-span-1 md:col-span-2 flex items-start gap-3 pt-4 border-t border-gray-100">
                     <div className="p-2 bg-prado-cream rounded-lg text-prado-navy">
                        <Palette size={20} />
                    </div>
                    <div className="flex-1">
                        <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">Cores Disponíveis</span>
                        <div className="flex flex-wrap gap-2">
                            {product.specs.cores.map((cor) => (
                                <span key={cor} className="px-3 py-1 rounded-full border border-gray-200 text-sm text-gray-700 bg-gray-50">
                                    {cor}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
             <button className="flex-1 bg-prado-navy text-white font-bold py-4 rounded-xl hover:bg-prado-dark transition-colors shadow-lg shadow-slate-900/20">
                Solicitar Orçamento
             </button>
             <button className="px-6 py-4 rounded-xl border-2 border-prado-navy text-prado-navy font-bold hover:bg-prado-beige/20 transition-colors">
                Baixar PDF
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;