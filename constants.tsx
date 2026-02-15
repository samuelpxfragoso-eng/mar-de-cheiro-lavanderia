
import React from 'react';
import { 
  Zap, 
  Clock, 
  Droplet, 
  ShieldCheck, 
  ThumbsUp, 
  Heart, 
  Smartphone, 
  Leaf,
  Wifi,
  Coffee,
  CheckCircle2,
  Cloud,
  Wind,
  Gem,
  Layers,
  Sparkles,
  Headset,
  PiggyBank,
  Armchair,
  Megaphone
} from 'lucide-react';
import { NavItem, Differential, Plan, Testimonial, FAQItem, FabricCare } from './types';

export const WHATSAPP_LINK = "https://wa.link/2b3779";
export const GOOGLE_REVIEWS_LINK = "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID";
export const INSTAGRAM_LINK = "https://www.instagram.com/mardecheiro_lavanderia/";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#home' },
  { label: 'Nossa Estrutura', href: '#structure' },
  { label: 'Serviços', href: '#plans' },
  { label: 'Diferenciais', href: '#differentials' },
  { label: 'Sobre', href: '#about' },
  { label: 'Localização', href: '#contact' },
];

export const DIFFERENTIALS: Differential[] = [
  { 
    title: 'Tempo recorde', 
    description: 'Roupas limpas e secas em média 60 minutos.', 
    icon: <Clock className="w-10 h-10 text-blue-400" /> 
  },
  { 
    title: 'Personalização total', 
    description: 'Escolha fragrância ou opte por sem cheiro.', 
    icon: <Sparkles className="w-10 h-10 text-blue-400" /> 
  },
  { 
    title: 'Lave, seque e receba dobrado.', 
    description: 'Roupas sempre perfumadas com produtos OMO e Comfort.', 
    icon: <Smartphone className="w-10 h-10 text-blue-400" /> 
  },
  { 
    title: 'Serviço premium', 
    description: 'Atendimento destaque na região.', 
    icon: <Gem className="w-10 h-10 text-blue-400" /> 
  },
  { 
    title: 'Suporte humano', 
    description: 'Atendimento rápido via chat 24h.', 
    icon: <Headset className="w-10 h-10 text-blue-400" /> 
  },
  { 
    title: 'Economize dinheiro', 
    description: 'Mais barato que lavar em casa e sem esforço.', 
    icon: <PiggyBank className="w-10 h-10 text-blue-400" /> 
  },
  { 
    title: 'Ambiente confortável', 
    description: 'Lounge climatizado, Wi-Fi e TV.', 
    icon: <Armchair className="w-10 h-10 text-blue-400" /> 
  },
  { 
    title: 'Promoções exclusivas', 
    description: 'Pague menos com nossos pacotes mensais.', 
    icon: <Megaphone className="w-10 h-10 text-blue-400" /> 
  },
];

export const FABRIC_CARE_DATA = [
  {
    type: "Algodão",
    icon: <Cloud size={32} />,
    title: "Cuidado Essencial para Algodão",
    description: "Peças de algodão são lavadas com sabões neutros em temperaturas controladas para manter a maciez e evitar encolhimento. A secagem é suave para preservar as fibras."
  },
  {
    type: "Linho",
    icon: <Wind size={32} />,
    title: "Tratamento Nobre para Linho",
    description: "O linho exige um processo de lavagem que minimiza vincos profundos. Utilizamos ciclos de baixa rotação e produtos que mantêm o frescor e a estrutura natural das peças."
  },
  {
    type: "Seda/Festa",
    icon: <Gem size={32} />,
    title: "Zelo Absoluto para Peças Finas",
    description: "Roupas de festa e tecidos como seda recebem tratamento individualizado com sacos de proteção e higienização manual, preservando bordados, brilhos e delicadeza extrema."
  },
  {
    type: "Enxoval",
    icon: <Layers size={32} />,
    title: "Frescor de Hotel para seu Enxoval",
    description: "Cama, mesa e banho são submetidos a ciclos de alta performance para desinfecção profundos, finalizados com amaciantes premium que garantem toque aveludado e perfume duradouro."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Beatriz Amorim",
    comment: "Lavanderia maravilhosa, produtos de ótima qualidade, serviço bem prestativo e atencioso, ganhou mais um cliente extremamente satisfeito 🥇👏👏",
    rating: 5,
    avatar: "BA"
  },
  {
    id: 2,
    name: "Thawana Santos",
    comment: "Lavadoras e secadoras bem modernas e fáceis de usar. Lugar super confortável para quem prefere aguardar os serviços das máquinas. E o fato de ser 24h ajuda muito.",
    rating: 5,
    avatar: "TS"
  },
  {
    id: 3,
    name: "Carlos Henrique S. Trindade",
    comment: "Ambiente mto limpo e organizado, o tempo que passamos esperando passa que nem damos conta kkk. Parabéns pelo empreendimento.",
    rating: 5,
    avatar: "CH"
  },
  {
    id: 4,
    name: "Andrea Luz",
    comment: "Ótima!!! Mesmo com a modernização e praticidade do auto atendimento, a pessoa humana ainda é um diferencial! Atendimento de excelência. Nota 10!",
    rating: 5,
    avatar: "AL"
  },
  {
    id: 5,
    name: "Klara Olivera",
    comment: "A melhor lavanderia da cidade, roupas bem cuidada, ambiente agradável, tudo organizado.",
    rating: 5,
    avatar: "KO"
  },
  {
    id: 6,
    name: "Elizangela Pereira",
    comment: "Experiência maravilhosa! Lugar limpo e organizado, e as roupas super cheirosas e sequinhas. Super indico!",
    rating: 5,
    avatar: "EP"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Quanto tempo demora para lavar e secar?",
    answer: "Os ciclos de lavagem e secagem duram entre 30 e 40 minutos, dependendo do ciclo escolhido."
  },
  {
    question: "Como funciona a lavanderia? O que é autoatendimento?",
    answer: "Funciona em autoatendimento: você escolhe a máquina, coloca as roupas, realiza o pagamento, inicia o ciclo e retira as peças ao final. Simples, rápido e prático."
  },
  {
    question: "Qual é a capacidade máxima por máquina?",
    answer: "As máquinas possuem diferentes capacidades, ideais para roupas do dia a dia e peças grandes, como cobertores e edredons."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos PIX, cartão de débito e cartão de crédito."
  },
  {
    question: "Preciso levar sabão e amaciante?",
    answer: "Não. Sabão e amaciante já estão inclusos em todos os ciclos."
  },
  {
    question: "Qual é o preço?",
    answer: "O valor do ciclo é R$ 17,50."
  },
  {
    question: "Onde fica?",
    answer: "Estamos localizados em Av. Caravelas, 39 – Praia do Francês, Marechal Deodoro – AL."
  },
  {
    question: "Lava cobertor e edredom?",
    answer: "Sim, lavamos cobertores e edredons, respeitando a capacidade da máquina."
  },
  {
    question: "Lava tapetes?",
    answer: "Não. Não lavamos tapetes."
  },
  {
    question: "Posso lavar ternos, paletós e roupas de festa?",
    answer: "Não recomendamos. Essas peças exigem lavagem especial ou a seco."
  },
  {
    question: "Lava tênis?",
    answer: "Não. Tênis não são lavados."
  },
  {
    question: "Lava roupa de pet?",
    answer: "Não. Roupas e itens de pet não são aceitos."
  },
  {
    question: "Lava roupa hospitalar?",
    answer: "Não. Roupas hospitalares não são lavadas, por questões de segurança e higiene."
  }
];

export const STRUCTURE_IMAGES = [
  "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/01.jpeg",
  "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/02.jpeg",
  "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/03.jpeg",
  "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/04.jpeg",
  "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/05.jpeg",
  "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/06.jpeg",
  "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/07.jpeg",
  "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/08.jpeg",
  "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/09.jpeg",
  "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/10.jpeg",
  "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/11.jpeg",
];

export const INSTAGRAM_IMAGES = [
  "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20102323%20(1).png",
  "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20102428.png",
  "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20102503.png",
  "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20102531.png",
  "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Captura%20de%20tela%202026-02-08%20102552.png"
];
