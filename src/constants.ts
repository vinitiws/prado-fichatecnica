import type { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Botina Robust Security Pro',
    code: 'PRD-001',
    category: 'seguranca',
    description: 'Botina de segurança confeccionada em couro nobuck, ideal para ambientes industriais e de construção civil. Oferece máxima proteção sem sacrificar o conforto.',
    images: [
      'https://picsum.photos/seed/boot1/800/800',
      'https://picsum.photos/seed/boot1-side/800/800',
      'https://picsum.photos/seed/boot1-top/800/800',
    ],
    specs: {
      material: 'Couro Nobuck Hidrofugado',
      numeracao: '35 ao 46',
      solado: 'Poliuretano Bidensidade Injetado',
      peso: '980g (par)',
      cores: ['Preto', 'Marrom Café'],
      certificacao: 'CA 42.105',
      biqueira: 'Composite de Alta Resistência'
    },
    isNew: true
  },
  {
    id: '2',
    name: 'Botina Tradicional Campo',
    code: 'PRD-T05',
    category: 'tradicional',
    description: 'O clássico modelo vira francesa, perfeito para o dia a dia no campo ou na cidade. Durabilidade extrema com acabamento artesanal.',
    images: [
      'https://picsum.photos/seed/boot2/800/800',
      'https://picsum.photos/seed/boot2-side/800/800',
    ],
    specs: {
      material: 'Couro Latego Legítimo',
      numeracao: '34 ao 45',
      solado: 'Borracha Antiderrapante Costurada',
      peso: '850g (par)',
      cores: ['Amarelo', 'Pinhão'],
      certificacao: 'N/A'
    }
  },
  {
    id: '3',
    name: 'Botina Agro Work',
    code: 'PRD-003',
    category: 'seguranca',
    description: 'Desenvolvida para o agronegócio, esta botina resiste a óleos e combustíveis, com fechamento em elástico lateral recoberto.',
    images: [
      'https://picsum.photos/seed/boot3/800/800',
      'https://picsum.photos/seed/boot3-detail/800/800',
    ],
    specs: {
      material: 'Couro Vaqueta',
      numeracao: '36 ao 44',
      solado: 'PU Bidensidade',
      peso: '900g (par)',
      cores: ['Preto'],
      certificacao: 'CA 38.200',
      biqueira: 'Aço Carbono'
    }
  },
  {
    id: '4',
    name: 'Botina Elegance Urbana',
    code: 'PRD-T09',
    category: 'tradicional',
    description: 'Estilo e sofisticação. Uma botina chelsea boot adaptada para o conforto brasileiro. Ideal para uso casual.',
    images: [
      'https://picsum.photos/seed/boot4/800/800',
      'https://picsum.photos/seed/boot4-b/800/800',
    ],
    specs: {
      material: 'Camurça Premium',
      numeracao: '37 ao 44',
      solado: 'Crepe Natural',
      peso: '750g (par)',
      cores: ['Areia', 'Cinza', 'Azul Marinho'],
    }
  },
  {
    id: '5',
    name: 'Coturno Tático Force',
    code: 'PRD-010',
    category: 'seguranca',
    description: 'Proteção tornozelo acima. Ideal para eletricistas e trabalhos em altura. Livre de componentes metálicos.',
    images: [
      'https://picsum.photos/seed/boot5/800/800',
    ],
    specs: {
      material: 'Microfibra de Alta Performance',
      numeracao: '38 ao 45',
      solado: 'Borracha Nitrílica',
      peso: '1.1kg (par)',
      cores: ['Preto Fosco'],
      certificacao: 'CA 45.300',
      biqueira: 'Plástico de Engenharia'
    },
    isNew: true
  },
  {
    id: '6',
    name: 'Botina Raiz Sertaneja',
    code: 'PRD-T12',
    category: 'tradicional',
    description: 'Bordada à mão, honrando a tradição sertaneja. Couro macio que se molda ao pé.',
    images: [
      'https://picsum.photos/seed/boot6/800/800',
    ],
    specs: {
      material: 'Couro Bovino Florão',
      numeracao: '33 ao 44',
      solado: 'Latex',
      peso: '800g (par)',
      cores: ['Havana', 'Castanho'],
    }
  }
];