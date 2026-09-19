import { PortDetail, SpecGroup, ErgonomicFeature, BundleOption, ReviewItem } from '../types';

// Real generated high-res visual assets based on user's reference
export const MONITOR_IMAGES = {
  hero: '/src/assets/images/monitor_gamer_hero_1789830861659.jpg',
  base: '/src/assets/images/monitor_stand_base_1789830874056.jpg',
  ports: '/src/assets/images/monitor_video_ports_1789830886353.jpg',
  side: '/src/assets/images/monitor_side_view_1789830900610.jpg',
};

export const PORTS_DATA: PortDetail[] = [
  {
    id: 'dp',
    name: 'DisplayPort 1.4',
    type: 'video',
    version: 'v1.4 HBR3',
    maxBandwidth: '32.4 Gbps',
    supportedModes: [
      '1920x1080 @ 180Hz Nativo',
      'Compatível G-Sync & FreeSync Premium',
      'Profundidade de cor 8-bit + FRC / HDR10',
      'Latência ultra-baixa de entrada (Input Lag < 2ms)'
    ],
    description: 'A interface definitiva para eSports competitivos. Permite extrair o potencial máximo de 180Hz com sincronização adaptativa sem tearing ou ghosting.',
    badge: 'Máxima Performance (180Hz)',
    iconName: 'Zap'
  },
  {
    id: 'hdmi1',
    name: 'HDMI 2.0 (Porta 1)',
    type: 'video',
    version: 'v2.0 High Speed',
    maxBandwidth: '18.0 Gbps',
    supportedModes: [
      '1920x1080 @ 180Hz (PC)',
      '1920x1080 @ 120Hz (PlayStation 5 & Xbox Series X|S)',
      'Suporte a VRR (Variable Refresh Rate)',
      'Suporte a HDR nativo'
    ],
    description: 'Conexão versátil de alta velocidade ideal para setups híbridos de PC Gamer ou consoles de nova geração rodando jogos a 120 FPS cravados.',
    badge: 'Ideal para Consoles & PC',
    iconName: 'Tv'
  },
  {
    id: 'hdmi2',
    name: 'HDMI 2.0 (Porta 2)',
    type: 'video',
    version: 'v2.0 High Speed',
    maxBandwidth: '18.0 Gbps',
    supportedModes: [
      '1920x1080 @ 180Hz (PC)',
      '1920x1080 @ 120Hz (Consoles)',
      'Troca rápida de entrada via menu OSD rápido',
      'Compatibilidade total com notebooks gamer'
    ],
    description: 'Segunda porta de vídeo independente para manter console e PC conectados ao mesmo tempo sem precisar trocar cabos.',
    badge: 'Conexão Secundária',
    iconName: 'Tv'
  },
  {
    id: 'audio',
    name: 'Saída de Áudio Jack 3.5mm (P2)',
    type: 'audio',
    version: 'P2 Estéreo 3.5mm',
    maxBandwidth: 'Áudio Analógico Puro',
    supportedModes: [
      'Saída de áudio direta do HDMI/DisplayPort',
      'Compatível com fones de ouvido, headsets e caixas de som',
      'Amplificação de sinal limpa sem ruído elétrico'
    ],
    description: 'Conecte seu headset ou caixa de som diretamente atrás do monitor, mantendo sua mesa livre de cabos longos indo até o gabinete.',
    badge: 'Áudio Direto',
    iconName: 'Headphones'
  },
  {
    id: 'dc',
    name: 'Entrada DC 12V / 3A',
    type: 'power',
    version: 'Conector Coaxial Seguro',
    maxBandwidth: 'Bivolt Automático 100V - 240V',
    supportedModes: [
      'Fonte externa compacta de alta eficiência',
      'Reduz aquecimento interno do painel IPS',
      'Consumo operacional típico: 28W (Standby < 0.5W)'
    ],
    description: 'Alimentação externa que reduz drasticamente a espessura do monitor e evita aquecimento residual no painel.',
    badge: 'Eficiência Energética',
    iconName: 'BatteryCharging'
  }
];

export const ERGONOMIC_FEATURES: ErgonomicFeature[] = [
  {
    title: 'Ajuste de Inclinação Angular (Tilt)',
    subtitle: '-5° para frente até +15° para trás',
    description: 'Ajuste o ângulo visual com precisão milimétrica para evitar reflexos de luz e manter sua coluna cervical alinhada em maratonas intensas de gameplay.',
    icon: 'Maximize2',
    spec: '-5° a +15°'
  },
  {
    title: 'Passa-Cabos Integrado na Coluna',
    subtitle: 'Canal vertical para roteamento limpo',
    description: 'Furo passante ergonômico estrategicamente posicionado no pescoço da base para guiar os cabos de vídeo e energia diretamente para trás da mesa.',
    icon: 'Route',
    spec: 'Setup 100% Clean'
  },
  {
    title: 'Base Tripé de Perfil Baixo em Liga Metálica',
    subtitle: 'Estabilidade máxima com pegada mínima',
    description: 'Pés em ângulo aberto que oferecem firmeza inabalável mesmo em movimentos bruscos de mouse, deixando espaço livre para mousepads estendidos de até 90cm.',
    icon: 'ShieldCheck',
    spec: 'Perfil Slim Aerodinâmico'
  },
  {
    title: 'Compatibilidade Padrão VESA 75x75mm',
    subtitle: 'Liberdade total para braços articulados',
    description: 'Destaque a base original em segundos e instale o monitor em qualquer braço a gás mecânico ou suporte de parede com total facilidade.',
    icon: 'Grid',
    spec: 'Padrão VESA 75x75'
  }
];

export const TECH_SPECS: SpecGroup[] = [
  {
    category: 'Tela & Painel',
    items: [
      { label: 'Tamanho da Tela', value: '23.8" / 24 Polegadas Wide' },
      { label: 'Tipo de Painel', value: 'Fast IPS (In-Plane Switching)', highlight: true },
      { label: 'Resolução Nativa', value: 'Full HD (1920 x 1080 pixels)' },
      { label: 'Proporção de Tela', value: '16:9 Widescreen' },
      { label: 'Taxa de Atualização', value: '180Hz Nativo (via DisplayPort & HDMI)', highlight: true },
      { label: 'Tempo de Resposta', value: '1ms MPRT / 0.5ms GTG Turbo', highlight: true },
      { label: 'Ângulo de Visão', value: '178° Horizontal / 178° Vertical' },
      { label: 'Tratamento de Tela', value: 'Anti-reflexo (Matte 3H)' }
    ]
  },
  {
    category: 'Cores & Luminosidade',
    items: [
      { label: 'Gama de Cores', value: '99% sRGB / 85% DCI-P3 / 74% NTSC' },
      { label: 'Profundidade de Cores', value: '16.7 Milhões de cores (8-bit)' },
      { label: 'Brilho Típico', value: '300 cd/m² (Nits)' },
      { label: 'Contraste Estático', value: '1.000:1' },
      { label: 'Contraste Dinâmico', value: '20.000.000:1 (Mega DCR)' },
      { label: 'Suporte a HDR', value: 'HDR Ready / HDR10 decoding' }
    ]
  },
  {
    category: 'Conectividade I/O',
    items: [
      { label: 'DisplayPort', value: '1x DisplayPort 1.4 (180Hz nativo)', highlight: true },
      { label: 'HDMI', value: '2x HDMI 2.0 (180Hz PC / 120Hz Consoles)', highlight: true },
      { label: 'Saída de Áudio', value: '1x Jack 3.5mm P2 Estéreo' },
      { label: 'Alimentação', value: '1x DC 12V (Fonte externa bivolt 100-240V)' }
    ]
  },
  {
    category: 'Ergonomia & Construção',
    items: [
      { label: 'Design do Chassi', value: 'White Edition (Chassi e Base Brancos)', highlight: true },
      { label: 'Bordas', value: 'Design Frameless ultrafino em 3 lados (1.8mm)' },
      { label: 'Ajuste de Inclinação (Tilt)', value: '-5° a +15°', highlight: true },
      { label: 'Passa-Cabos na Base', value: 'Integrado na coluna vertical' },
      { label: 'Furação VESA', value: '75 x 75 mm' },
      { label: 'Peso c/ Base', value: '3.1 kg' }
    ]
  },
  {
    category: 'Recursos Gamer Especiais',
    items: [
      { label: 'Sincronização Adaptativa', value: 'AMD FreeSync Premium & G-Sync Compatible' },
      { label: 'Proteção Ocular', value: 'Low Blue Light & Flicker-Free' },
      { label: 'Mira Gamer OSD', value: 'Crosshair integrado na tela' },
      { label: 'Game Modes', value: 'Perfis para FPS, RTS, RPG e Cinema' },
      { label: 'Overdrive', value: '3 níveis de aceleração de resposta' }
    ]
  }
];

export const BUNDLE_OPTIONS: BundleOption[] = [
  {
    id: 'solo',
    name: 'Monitor HQ Gamer 180Hz Solo',
    tag: 'Mais Popular',
    price: 689.90,
    originalPrice: 949.90,
    installments: '12x de R$ 57,49 sem juros',
    includes: [
      'Monitor HQ Gamer 24" White 180Hz',
      'Base ergonômica branca com passa-cabos',
      'Cabo DisplayPort 1.4 de alta velocidade (1.5m)',
      'Fonte de alimentação bivolt externa',
      'Guia rápido e certificado de garantia oficial de 12 meses'
    ]
  },
  {
    id: 'pro',
    name: 'Kit Pro Battlestation All-White',
    tag: 'Recomendado para Gamers',
    price: 849.90,
    originalPrice: 1199.90,
    installments: '12x de R$ 70,82 sem juros',
    includes: [
      'Tudo do Monitor HQ Gamer 24" 180Hz',
      'Braço Articulado a Gás Branco VESA 75/100',
      'Mousepad Gamer Speed Extra Grande Branco (90x40cm)',
      'Cabo DisplayPort 1.4 Blindado com pontas banhadas a ouro (2.0m)',
      'Garantia Estendida VIP com Zero Dead Pixel total por 2 anos'
    ]
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    name: 'Lucas "Vortex" Moreira',
    role: 'Jogador Competitivo de Valorant (Radiante)',
    game: 'Valorant & CS2',
    rating: 5,
    comment: 'A transição de 60Hz/144Hz para os 180Hz reais desse monitor faz uma diferença brutal na fluidez do tracking. Os inimigos parecem deslizar em câmera lenta e o tempo de resposta do painel Fast IPS não tem nada de ghosting.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    name: 'Camila Fernandes',
    role: 'Streamer & Arquiteta',
    game: 'Apex Legends & Criação 3D',
    rating: 5,
    comment: 'O visual branco é simplesmente impecável para quem quer um setup clean e minimalista. A base tem o passa-cabos perfeito que escondeu todos os fios da minha mesa, e a calibração de cor do painel IPS para trabalhar também surpreendeu!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80'
  },
  {
    name: 'Gabriel Siqueira',
    role: 'Jogador de PS5 & PC',
    game: 'Call of Duty: Warzone & Fortnite',
    rating: 5,
    comment: 'Tenho o PC no DisplayPort rodando a 180Hz e o PS5 no HDMI 2.0 rodando a 120Hz nativos. Troco entre as entradas com dois cliques no botão OSD. A ergonomia de inclinação da base encaixou como uma luva na minha altura.',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&h=120&q=80'
  }
];

export const FAQS = [
  {
    q: 'O monitor já acompanha cabo DisplayPort de 180Hz na caixa?',
    a: 'Sim! Enviamos na embalagem original um cabo DisplayPort 1.4 de alta qualidade com blindagem eletromagnética, pronto para você plugar na sua placa de vídeo e já desfrutar dos 180Hz reais e 1ms sem custos adicionais.'
  },
  {
    q: 'Como funciona a ergonomia da base e o passa-cabos?',
    a: 'A base em liga metálica branca foi projetada com geometria tripé de perfil baixo para economizar espaço no seu mousepad. Ela conta com ajuste de inclinação angular (Tilt) de -5° a +15° para alinhar perfeitamente aos seus olhos, e possui um recorte vertical estratégico no pescoço para passar os cabos DisplayPort, HDMI e de energia de forma 100% oculta.'
  },
  {
    q: 'Ele atinge os 120Hz no PlayStation 5 e Xbox Series X|S?',
    a: 'Com certeza! As duas portas HDMI 2.0 suportam perfeitamente o modo de alta taxa de quadros (1080p a 120 FPS) dos consoles de nova geração, garantindo vantagem competitiva em jogos como Fortnite, Warzone, Rainbow Six Siege e Destiny 2.'
  },
  {
    q: 'Posso usar o monitor em um braço articulado para monitor?',
    a: 'Sim. O monitor possui furação padrão VESA 75 x 75 mm no painel traseiro. Você pode desencaixar a base original rapidamente e montá-lo em braços articulados de pistão a gás simples ou duplos.'
  },
  {
    q: 'Qual a diferença entre 144Hz e 180Hz?',
    a: 'Enquanto um monitor de 144Hz atualiza a imagem a cada 6.94 milissegundos, a taxa de 180Hz reduz esse intervalo para apenas 5.55 milissegundos — são 36 quadros a mais por segundo. Isso se traduz em transições visuais mais nítidas durante flick shots rápidos e menor atraso na resposta de comandos.'
  },
  {
    q: 'Qual a garantia oferecida para o produto?',
    a: 'Oferecemos 12 meses de garantia total de fábrica contra defeitos de fabricação, com suporte técnico no Brasil e Política Zero Dead Pixel durante os primeiros 30 dias.'
  }
];
