import React, { useState } from 'react';
import { MONITOR_IMAGES } from '../data/monitorData';
import { Sparkles, Maximize2, ShieldCheck, Eye, Layers } from 'lucide-react';

export const DesignGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hero' | 'side' | 'base' | 'ports'>('hero');

  const galleryItems = [
    {
      id: 'hero' as const,
      title: 'Visão Frontal & Bordas Ultrafinas',
      subtitle: 'Design Frameless de 3 lados (1.8mm)',
      image: MONITOR_IMAGES.hero,
      description: 'Acabamento branco com moldura frontal quase invisível, ideal para setups multi-monitor com emenda contínua.'
    },
    {
      id: 'side' as const,
      title: 'Perfil Lateral & Ângulo Esbelto',
      subtitle: 'Estrutura ultra-slim de alta rigidez',
      image: MONITOR_IMAGES.side,
      description: 'Chassi com espessura reduzida que ocupa mínimo espaço sobre a escrivaninha e confere estética futurista.'
    },
    {
      id: 'base' as const,
      title: 'Base Ergonômica com Passa-Cabos',
      subtitle: 'Tripé geométrico em liga metálica branca',
      image: MONITOR_IMAGES.base,
      description: 'Abertura vertical para ocultação de fiação e inclinação angular suave sem folgas mecânicas.'
    },
    {
      id: 'ports' as const,
      title: 'Painel Traseiro de Conectividade',
      subtitle: 'DisplayPort 1.4 & Dual HDMI 2.0',
      image: MONITOR_IMAGES.ports,
      description: 'Conectores orientados de modo a proteger os cabos contra dobras excessivas e facilitar o encaixe rápido.'
    }
  ];

  const currentItem = galleryItems.find((item) => item.id === activeTab) || galleryItems[0];

  return (
    <section id="galeria" className="py-20 lg:py-28 relative overflow-hidden bg-black border-t border-[#26143c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f51a7e]/15 border border-[#f51a7e]/30 text-xs font-bold text-[#ff60a8] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Design Moderno & Acabamento White Edition</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
            Minimalismo Imersivo em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f51a7e] via-[#ec4899] to-[#9d00f7]">
              Cada Ângulo e Detalhe
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Desenvolvido para harmonizar com setups gamers contemporâneos e ambientes de criação clean.
            Estrutura toda em branco polar com texturas foscas e montagem milimétrica.
          </p>
        </div>

        {/* Gallery Interactive Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-[#f51a7e] to-[#9d00f7] text-white shadow-lg shadow-pink-500/25 scale-105'
                  : 'bg-[#0c0817] text-slate-300 hover:bg-[#180d2b] hover:text-white border border-[#26143c]'
              }`}
            >
              <span>{item.title.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Featured View Showcase */}
        <div className="rounded-3xl bg-[#0c0817] border border-[#2d1547] p-4 sm:p-6 lg:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Main Visual Display */}
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-[#26143c] group">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#3b1c60] text-xs font-mono text-[#ff60a8] font-bold">
                  {currentItem.subtitle}
                </div>
              </div>
            </div>

            {/* View Details & Specs */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#ff60a8] font-mono font-bold">
                  Perspectiva Selecionada
                </span>
                <h3 className="text-2xl font-extrabold text-white font-['Syne'] mt-1">
                  {currentItem.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {currentItem.description}
                </p>
              </div>

              {/* 3 Quick Bullet Points for this Angle */}
              <div className="space-y-3 pt-4 border-t border-[#26143c] text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#f51a7e]"></div>
                  <span>Chassi em polímero nobre anti-amarelamento UV</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#9d00f7]"></div>
                  <span>Bordas ultrafinas para imersão periférica total</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#f51a7e]"></div>
                  <span>Pintura texturizada agradável ao toque</span>
                </div>
              </div>

              {/* Mini Gallery Selector Thumbnails */}
              <div className="pt-4 border-t border-[#26143c]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Trocar Perspectiva
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {galleryItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeTab === item.id ? 'border-[#f51a7e] ring-2 ring-[#f51a7e]/40' : 'border-[#26143c] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
