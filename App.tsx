
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Instagram as InstagramIcon, 
  Facebook, 
  Phone, 
  MapPin, 
  Clock as ClockIcon, 
  ChevronRight, 
  ChevronLeft,
  ChevronDown, 
  Star,
  MessageCircle,
  Play,
  CheckCircle2,
  PartyPopper,
  Droplets,
  Wind,
  Medal,
  Gem,
  HelpCircle,
  Heart,
  Sparkles
} from 'lucide-react';
import { 
  NAV_ITEMS, 
  DIFFERENTIALS, 
  FABRIC_CARE_DATA, 
  TESTIMONIALS, 
  FAQ_ITEMS, 
  STRUCTURE_IMAGES,
  INSTAGRAM_IMAGES,
  WHATSAPP_LINK,
  GOOGLE_REVIEWS_LINK,
  INSTAGRAM_LINK
} from './constants';

// --- Utility Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href 
}: { 
  children?: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'success' | 'navy'; 
  className?: string;
  onClick?: () => void;
  href?: string;
}) => {
  const base = "px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 shadow-md",
    secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
    ghost: "text-slate-600 hover:text-blue-500 hover:bg-blue-50",
    accent: "bg-yellow-500 text-slate-900 hover:bg-yellow-600 shadow-md",
    success: "bg-[#22c55e] text-white hover:bg-[#1eb054] shadow-md",
    navy: "bg-[#2d3a82] text-white hover:bg-[#232d66] shadow-md"
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component 
      href={href}
      onClick={onClick} 
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};

// --- Section Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className={`text-3xl font-brand ${scrolled ? 'text-blue-500' : 'text-white'}`}>Mar de Cheiro</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className={`font-medium transition-colors hover:text-blue-500 ${scrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <Button variant="accent" href={WHATSAPP_LINK} className="rounded-full">
            <MessageCircle size={18} /> Agendar
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-slate-800' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-lg font-medium text-slate-700 border-b border-slate-50 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button variant="primary" className="w-full rounded-full" href={WHATSAPP_LINK}>
            Fale Conosco
          </Button>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/40 to-transparent z-20 backdrop-blur-[2px]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white z-20 opacity-30"></div>

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=2000"
      >
        <source src="https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/Motion_slow_logo_1080p_202602081650.mp4" type="video/mp4" />
      </video>
      <div className="container mx-auto px-4 z-20 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-brand mb-4">Bem-vindo à</h2>
        <h1 className="text-6xl md:text-9xl font-heading mb-8 tracking-tighter">MAR DE CHEIRO</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 opacity-90 font-light">
          Cuidado premium para suas roupas com a praticidade que você merece. Lave, seque e sinta a diferença.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="accent" className="text-lg px-10 py-4 rounded-full" href={WHATSAPP_LINK}>
            Agende Sua Coleta
          </Button>
          <Button variant="outline" className="text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-blue-500 rounded-full" href="#structure">
            Conheça Nosso Espaço
          </Button>
        </div>
      </div>
    </section>
  );
};

const PremiumService = () => {
  return (
    <section id="premium" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100 rounded-[40px] transform -rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
              <img 
                src="https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/WhatsApp%20Image%202026-02-07%20at%2011.11.45%20PM%20(1).jpeg" 
                alt="Serviço de organização premium Mar de Cheiro" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#2d3a82] text-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block animate-bounce-custom">
              <Sparkles className="text-yellow-400 mb-2" size={24} />
              <p className="font-bold text-sm leading-tight">Organização impecável feita por especialistas.</p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h3 className="text-blue-500 font-brand text-2xl mb-4">Exclusividade Mar de Cheiro</h3>
            <h2 className="text-4xl md:text-6xl font-brand text-[#2d3a82] mb-8 leading-tight">
              Lave, Seque e Receba <span className="text-blue-500">Tudo Dobrado</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10">
              Cansado de ter que dobrar montanhas de roupas após a secagem? Na Mar de Cheiro, oferecemos o serviço <strong>Premium Assistido</strong>. Nossos colaboradores cuidam de cada peça com carinho, organizando tudo em cestos para que você só precise guardar no armário.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full"><CheckCircle2 size={18} className="text-green-600" /></div>
                <div>
                  <h4 className="font-bold text-[#2d3a82]">Produtos OMO e Comfort</h4>
                  <p className="text-sm text-slate-500">Fragrância premium inclusa em cada ciclo.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full"><CheckCircle2 size={18} className="text-green-600" /></div>
                <div>
                  <h4 className="font-bold text-[#2d3a82]">Pronto em 60 minutos</h4>
                  <p className="text-sm text-slate-500">Agilidade sem abrir mão da qualidade.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full"><CheckCircle2 size={18} className="text-green-600" /></div>
                <div>
                  <h4 className="font-bold text-[#2d3a82]">Toque Humano</h4>
                  <p className="text-sm text-slate-500">Colaboradores treinados para cuidar das suas peças.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full"><CheckCircle2 size={18} className="text-green-600" /></div>
                <div>
                  <h4 className="font-bold text-[#2d3a82]">Organização VIP</h4>
                  <p className="text-sm text-slate-500">Suas roupas separadas e dobradas com perfeição.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-start">
              <Button variant="navy" className="rounded-xl px-12 py-5 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1" href={WHATSAPP_LINK}>
                Quero o Serviço Premium
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Structure = () => {
  return (
    <section id="structure" className="py-20 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h3 className="text-blue-500 font-brand text-2xl mb-2">Conforto & Qualidade</h3>
        <h2 className="text-4xl md:text-5xl font-heading text-slate-800">Nossa Estrutura</h2>
      </div>
      <div className="relative">
        <div className="animate-infinite-scroll flex gap-6">
          {[...STRUCTURE_IMAGES, ...STRUCTURE_IMAGES].map((img, idx) => (
            <div key={idx} className="w-[250px] md:w-[350px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <img src={img} alt={`Estrutura ${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhatsAppNotice = () => {
  return (
    <section className="py-20 bg-[#e9eff5]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="text-[#25D366]">
              <MessageCircle size={38} fill="#25D366" className="text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-brand text-[#2d3a82]">
              Notificamos no WhatsApp
            </h2>
          </div>
          <div className="bg-[#22c55e] text-white px-6 py-3 rounded-xl flex items-center gap-3 w-fit shadow-lg shadow-green-500/20">
            <CheckCircle2 size={28} className="text-white" />
            <span className="font-bold text-xl md:text-2xl">Quando suas roupas estão prontas!</span>
          </div>
          <div className="mt-4 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-lg">
            <div className="flex items-start gap-5">
              <div className="text-blue-400 mt-1">
                <PartyPopper size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#2d3a82] mb-3">Mais liberdade para você</h4>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Aproveite seu tempo para fazer outras coisas enquanto cuidamos da sua roupa com todo carinho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Plans = () => {
  const plans = [
    {
      title: "Lavagem Avulsa",
      description: "Ciclo de 60 minutos para cesto de até 10kg. Limpeza profunda with produtos OMO.",
      price: "17",
      cents: "50",
      unit: "cesto",
      icon: <Droplets size={44} className="text-[#2d3a82]" />,
      buttonText: "Agendar Lavagem",
      variant: "success" as const
    },
    {
      title: "Secagem Avulsa",
      description: "Ciclo de 45 minutos. Suas roupas secas e prontas para usar.",
      price: "17",
      cents: "50",
      unit: "ciclo",
      icon: <Wind size={44} className="text-[#2d3a82]" />,
      buttonText: "Agendar Secagem",
      variant: "success" as const
    },
    {
      title: "Plano Ouro - 10 ciclos",
      description: "Ideal para Airbnb e Salões. Economia e praticidade para seu negócio.",
      price: "149",
      cents: "99",
      unit: "pacote",
      icon: <Medal size={44} className="text-[#2d3a82]" />,
      buttonText: "Saber Mais",
      variant: "navy" as const,
      popular: true
    },
    {
      title: "Plano Diamante - 20 ciclos",
      description: "Máximo custo-benefício para alto volume de lavagens.",
      price: "289",
      cents: "00",
      unit: "pacote",
      icon: <Gem size={44} className="text-[#2d3a82]" />,
      buttonText: "Saber Mais",
      variant: "navy" as const
    }
  ];

  return (
    <section id="plans" className="py-24 bg-[#e9eff5]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-brand text-[#2d3a82] mb-4">Nossos Planos</h2>
          <p className="text-slate-500 text-xl">Planos que cabem no seu bolso. Pague por lavagem ou assine e economize!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {plans.map((plan, idx) => (
            <div key={idx} className="relative bg-white rounded-[40px] p-10 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center">
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#70b9f1] text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 border-2 border-white shadow-md">
                  <Star size={14} className="fill-white" /> Mais popular
                </div>
              )}
              
              <div className="mb-6">
                {plan.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-[#2d3a82] mb-4">{plan.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-[280px]">
                {plan.description}
              </p>

              <div className="flex items-start text-[#2d3a82] mb-10">
                <span className="text-lg font-bold mt-2 mr-1">R$</span>
                <span className="text-6xl font-bold leading-none">{plan.price}</span>
                <div className="flex flex-col items-start ml-1">
                  <span className="text-2xl font-bold border-b-2 border-[#2d3a82] leading-none mb-1">,{plan.cents}</span>
                  <span className="text-xs font-medium text-slate-400">/ {plan.unit}</span>
                </div>
              </div>

              <Button 
                variant={plan.variant} 
                className="w-full py-4 text-base"
                href={WHATSAPP_LINK}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ScheduleCollection = () => {
  return (
    <section className="relative py-28 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/grok%20mar%20de%20cheiro.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#e9eff5]/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-slate-100 max-w-lg w-full text-left transition-all hover:shadow-3xl">
          <h2 className="text-4xl md:text-5xl font-brand text-[#2d3a82] mb-4">Agende sua Coleta</h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            Clique no botão abaixo para agendar sua coleta diretamente pelo WhatsApp.
          </p>
          <Button 
            variant="success" 
            className="w-full py-5 text-lg rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-green-200"
            href={WHATSAPP_LINK}
          >
            <MessageCircle size={26} className="fill-white" /> Agendar via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section id="about" className="bg-[#f8fafc]">
      <div className="py-24 px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-brand text-[#2d3a82] mb-6">Uma História de Cuidado e Frescor</h2>
        <p className="text-slate-500 text-xl">Descubra os pilares que tornam a Mar de Cheiro única.</p>
      </div>

      <div className="py-24 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-brand text-[#2d3a82] mb-8">Nossa Essência</h3>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Nascemos da paixão por tecidos finos e do desejo de oferecer um cuidado que vai além da simples limpeza. Cada peça é tratada como única, com a delicadeza que ela merece.
          </p>
        </div>
      </div>

      <div className="py-24 px-4 text-center bg-[#e9eff5]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-brand text-[#2d3a82] mb-8">Compromisso com a Natureza</h3>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Utilizamos produtos biodegradáveis e processos de baixo impacto ambiental. A água que usamos passa por um rigoroso processo de filtragem e é reutilizada, porque acreditamos que cuidar das suas roupas é também cuidar do nosso planeta.
          </p>
        </div>
      </div>

      <div className="py-24 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-brand text-[#2d3a82] mb-8">Tecnologia e Tradição</h3>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Combinamos a sabedoria do cuidado artesanal com a mais alta tecnologia em lavanderia. Nossos equipamentos de ponta garantem uma limpeza profunda, enquanto o acabamento manual assegura um toque de perfeição.
          </p>
        </div>
      </div>
    </section>
  );
};

const Influencers = () => {
  const videoUrls = [
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/SnapInsta.to_AQO-K7JP3yoSjNCXyEH90PtxTmUU2LeKUuhdCo30MT-Z-rfR-RbfiRL0k87g3G76ZgtQsM6ob2sdp_iAKjVRa_atIC3SNsQ26h1w8kY.mp4",
    "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/SnapInsta.to_AQMWc9FAAto_UlpgGam2OJ7m9E7qfnP9NsEZn2SEfLGgCVBSEs5Ps0dZRYkht1KNyCdQDr1hwCSJSq10vlWN1Gb0qPbww48LrQpZyBY.mp4"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center mb-16">
        <h3 className="text-blue-500 font-brand text-2xl mb-2">Quem Recomenda</h3>
        <h2 className="text-4xl md:text-6xl font-heading text-slate-800 tracking-tight">Influenciadores</h2>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {videoUrls.map((url, idx) => (
          <div key={idx} className="relative aspect-[9/16] rounded-[32px] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={url} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </section>
  );
};

const FabricCare = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentData = FABRIC_CARE_DATA[activeTab];

  return (
    <section className="py-24 bg-[#e9eff5]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-brand text-[#2d3a82] mb-4">Cuidado para cada Tecido</h2>
        <p className="text-slate-500 text-lg mb-16">Selecione o tipo de tecido para ver nossas recomendações de tratamento.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
          {FABRIC_CARE_DATA.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-8 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 border-2 ${
                activeTab === idx 
                ? 'bg-[#f0f7ff] border-[#3b82f6] shadow-lg shadow-blue-100 scale-105' 
                : 'bg-white border-transparent hover:bg-slate-50 text-slate-400'
              }`}
            >
              <div className={`${activeTab === idx ? 'text-[#2d3a82]' : 'text-slate-400'}`}>
                {item.icon}
              </div>
              <span className={`font-medium ${activeTab === idx ? 'text-[#2d3a82]' : 'text-slate-500'}`}>
                {item.type}
              </span>
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto animate-fadeIn">
          <h3 className="text-2xl md:text-3xl font-bold text-[#2d3a82] mb-6">
            {currentData.title}
          </h3>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            {currentData.description}
          </p>
        </div>
      </div>
    </section>
  );
};

const Instagram = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-brand text-[#2d3a82] mb-4">Siga nosso Instagram</h2>
        <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Também nos acompanhe nas redes sociais para ficar por dentro de novas atualizações, promoções, eventos e muito mais, tudo para tornar a sua experiência cada vez melhor!
        </p>
        <Button 
          variant="navy" 
          className="rounded-xl px-10 py-4 mb-20 bg-[#2d3a82] hover:bg-[#1e2a63]"
          href={INSTAGRAM_LINK}
        >
          <InstagramIcon size={20} className="mr-2" /> Nos siga no Instagram
        </Button>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {INSTAGRAM_IMAGES.map((url, idx) => (
            <a 
              key={idx} 
              href={INSTAGRAM_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg group"
            >
              <img 
                src={url} 
                alt={`Instagram Post ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <InstagramIcon size={32} className="text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  return (
    <section id="differentials" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-brand text-[#2d3a82] mb-4 tracking-tight">Desfrute dos nossos maiores diferenciais</h2>
        <p className="text-slate-500 text-xl">Conheça os benefícios que só a Mar de Cheiro oferece.</p>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
        {DIFFERENTIALS.map((item, idx) => (
          <div 
            key={idx} 
            className="p-10 rounded-[20px] bg-[#2d3a82] text-white flex flex-col items-center text-center shadow-2xl transition-transform hover:-translate-y-2 duration-300"
          >
            <div className="mb-6">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold mb-4 leading-snug">{item.title}</h4>
            <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(TESTIMONIALS.length / (window.innerWidth < 768 ? 1 : 3)));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.ceil(TESTIMONIALS.length / (window.innerWidth < 768 ? 1 : 3)) - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-[#e9eff5]">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-brand text-[#2d3a82] mb-4">O que nossos clientes dizem</h2>
        <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Gostou do nosso atendimento? Deixe seu comentário de 5 estrelas, conte um pouco sobre a sua experiência e compartilhe uma foto das suas roupas dobradas, limpas e cheirosas!
        </p>
        <Button 
          variant="navy" 
          className="rounded-xl px-10 py-4 mb-20"
          href={GOOGLE_REVIEWS_LINK}
        >
          Deixe sua Avaliação
        </Button>
      </div>

      <div className="container mx-auto px-4 relative max-w-7xl">
        <button 
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-10 z-10 p-3 bg-white rounded-full shadow-lg text-slate-400 hover:text-blue-500 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-10 z-10 p-3 bg-white rounded-full shadow-lg text-slate-400 hover:text-blue-500 transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        <div className="overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-full px-4">
              {TESTIMONIALS.slice(0, 3).map((item) => (
                <div key={item.id} className="bg-white p-10 rounded-[20px] shadow-xl border border-slate-100 flex flex-col h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex-grow border-l-2 border-blue-200 pl-6 mb-10">
                    <p className="text-slate-600 italic text-lg leading-relaxed">
                      "{item.comment}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 bg-[#2d3a82] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.avatar}
                    </div>
                    <span className="font-bold text-[#2d3a82]">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
            {TESTIMONIALS.length > 3 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-full px-4">
                {TESTIMONIALS.slice(3, 6).map((item) => (
                  <div key={item.id} className="bg-white p-10 rounded-[20px] shadow-xl border border-slate-100 flex flex-col h-full">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex-grow border-l-2 border-blue-200 pl-6 mb-10">
                      <p className="text-slate-600 italic text-lg leading-relaxed">
                        "{item.comment}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 bg-[#2d3a82] rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {item.avatar}
                      </div>
                      <span className="font-bold text-[#2d3a82]">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-500 mb-4">
            <HelpCircle size={30} />
          </div>
          <h2 className="text-4xl md:text-6xl font-brand text-[#2d3a82] mb-4">Perguntas Frequentes</h2>
          <p className="text-slate-500 text-xl font-medium">Tire suas dúvidas sobre nossos serviços de lavanderia.</p>
        </div>
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={idx} className="overflow-hidden">
              <button 
                className="w-full py-6 flex items-center justify-between text-left group transition-all" 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-blue-500' : 'text-slate-800'}`}>
                  {item.question}
                </span>
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-blue-500' : ''}`} size={20} />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-slate-500 text-lg leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-50">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-blue-500 font-brand text-2xl mb-2">Visite-nos</h3>
          <h2 className="text-4xl md:text-5xl font-heading text-slate-800 mb-8">Localização & Contato</h2>
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl text-blue-600"><MapPin size={24} /></div>
              <div><h4 className="font-bold text-slate-800">Endereço</h4><p className="text-slate-600">Av. Caravelas, 39 – Praia do Francês, Marechal Deodoro – AL</p></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-xl text-blue-600"><ClockIcon size={24} /></div>
              <div><h4 className="font-bold text-slate-800">Horário</h4><p className="text-slate-600">Segunda a Sábado: 07h às 22h (Atendimento 24h via Totem)</p></div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="primary" className="rounded-full" href={WHATSAPP_LINK}>WhatsApp</Button>
          </div>
        </div>
        <div className="h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.33418512215!2d-35.8458909!3d-9.7801833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7067d983448f415%3A0x86094727188293d2!2sAv.%20Caravelas%2C%2039%20-%20Praia%20do%20Franc%C3%AAs%2C%20Marechal%20Deodoro%20-%20AL%2C%2057160-000!5e0!3m2!1spt-BR!2sbr!4v1707000000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left flex flex-col md:flex-row justify-between items-start">
        <div className="max-w-xs">
          <h2 className="text-4xl font-brand text-blue-400 mb-6">Mar de Cheiro</h2>
          <p className="text-slate-400">Especialistas em lavanderia premium e self-service.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold">Navegação</h4>
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}><a href={item.href} className="text-slate-400 hover:text-blue-400 transition-colors">{item.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold">Redes Sociais</h4>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-500 transition-colors"><InstagramIcon size={20} /></a>
            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-500 transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-10 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Mar de Cheiro Lavanderia Ltda.</p>
      </div>
    </footer>
  );
};

const WhatsAppWidget = () => {
  return (
    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl animate-bounce-custom">
      <MessageCircle size={32} />
    </a>
  );
};

export default function App() {
  return (
    <div className="antialiased overflow-x-hidden">
      <Header />
      <Hero />
      <Structure />
      <PremiumService />
      <WhatsAppNotice />
      <Plans />
      <ScheduleCollection />
      <AboutUs />
      <Influencers />
      <FabricCare />
      <Differentials />
      <Instagram />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
