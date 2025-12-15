export type Category = 'all' | 'seguranca' | 'tradicional';

export interface ProductSpecs {
  material: string;
  numeracao: string;
  solado: string;
  peso: string;
  cores: string[];
  certificacao?: string;
  biqueira?: string;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  category: 'seguranca' | 'tradicional';
  price?: string; // Optional for catalog mode
  description: string;
  images: string[];
  specs: ProductSpecs;
  isNew?: boolean;
}