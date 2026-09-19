import React from 'react';
import { MONITOR_IMAGES } from '../data/monitorData';
import { 
  Zap, 
  Clock, 
  Maximize2, 
  Tv, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw,
  Sliders,
  Cable
} from 'lucide-react';

interface HeroSectionProps {
  onOpenCart: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCart }) => {
  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-center bg-black">
      {/* Background radial glow & geometric grid accents in purple & pink */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#9d00f7]/15 rounded-full blur-[140px] opacity-80"></div>
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#f51a7e]/15 rounded-full blur-[130px] opacity-70"></div>
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#6b00b6]/20 rounded-full blur-[120px] opacity-60"></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #f51a7e 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Badges & Announcement */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#120a1f]/90 border border-[#3b1c60] text-xs font-semibold text-slate-200 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-[#f51a7e] animate-ping"></span>
            <Sparkles className="w-3.5 h-3.5 text-[#f51a7e]" />
            <span>HQ Gamer 24" White Edition</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f51a7e]/15 border border-[#f51a7e]/40 text-xs font-bold text-[#ff60a8]">
            <Zap className="w-3.5 h-3.5" />
            <span>180Hz Nativo + 1ms MPRT</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9d00f7]/15 border border-[#9d00f7]/40 text-xs font-medium text-[#c084fc]">
            <Cable className="w-3.5 h-3.5" />
            <span>DisplayPort 1.4 + Dual HDMI 2.0</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-['Syne'] leading-[1.08]">
            Fluidez Máxima em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f51a7e] via-[#ec4899] to-[#9d00f7]">
              180Hz & 1ms de Resposta
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Projetado para eSports de elite. Design all-white moderno, bordas ultrafinas,
            <span className="text-white font-semibold"> base ergonômica com passa-cabos integrado </span>
            e <span className="text-white font-semibold">conexões de vídeo DisplayPort de alta performance</span>.
          </p>

          {/* Quick CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              id="hero-buy-cta"
              onClick={onOpenCart}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-white bg-gradient-to-r from-[#f51a7e] via-[#c026d3] to-[#9d00f7] hover:from-[#ff2a8d] hover:to-[#b22aff] shadow-xl shadow-pink-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-base cursor-pointer"
            >
              <span>Comprar por R$ 689,90</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <a
              href="#ergonomia"
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-slate-200 bg-[#120a1f] hover:bg-[#1a0f2e] hover:text-white border border-[#3b1c60] hover:border-[#f51a7e]/60 transition-all flex items-center justify-center gap-2 text-base shadow-sm"
            >
              <Sliders className="w-4 h-4 text-[#ff60a8]" />
              <span>Ver Ergonomia & Conexões</span>
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> Em até 12x sem juros
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#f51a7e]" /> Frete Grátis para todo o Brasil
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#9d00f7]" /> 12 Meses de Garantia Oficial
            </span>
          </div>
        </div>

        {/* Hero Visual Showcase: High-Res Monitor Product Image */}
        <div className="relative max-w-5xl mx-auto mt-4">
          {/* Ambient glow behind monitor */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#9d00f7]/25 via-[#f51a7e]/15 to-transparent blur-3xl -z-10 transform scale-95"></div>

          <div className="relative rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-[#1b0d2d]/70 to-black border border-[#381a5c] shadow-2xl backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-2xl bg-black aspect-[16/9] flex items-center justify-center group">
              <img
                src={MONITOR_IMAGES.hero}
                alt="Monitor Gamer HQ 24 polegadas 180Hz White Edition"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
              />

              {/* In-image Interactive Overlays / Feature Hotspots */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-col gap-2">
                <div className="bg-black/85 backdrop-blur-md border border-[#3b1c60] text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-[#f51a7e] animate-pulse"></div>
                  <span>180 FPS Nativos</span>
                </div>
                <div className="hidden sm:flex bg-black/85 backdrop-blur-md border border-[#3b1c60] text-white px-3 py-1 rounded-lg text-[11px] font-medium items-center gap-1.5">
                  <span className="text-[#ff60a8] font-bold">1ms</span> MPRT Fast IPS
                </div>
              </div>

              {/* Bottom Hotspots: Ergonomia & Conexões */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
                <a
                  href="#ergonomia"
                  className="pointer-events-auto bg-black/85 hover:bg-[#160b29] border border-[#3b1c60] hover:border-[#f51a7e] text-white text-xs px-3.5 py-2 rounded-xl backdrop-blur-md shadow-xl flex items-center gap-2 transition-all hover:scale-105"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#ff60a8]" />
                  <span className="font-semibold">Base Ergonômica c/ Passa-Cabos</span>
                  <span className="text-[10px] text-[#ff60a8] bg-[#f51a7e]/20 px-1.5 py-0.5 rounded border border-[#f51a7e]/40">Ver</span>
                </a>

                <a
                  href="#conexoes"
                  className="pointer-events-auto bg-black/85 hover:bg-[#160b29] border border-[#3b1c60] hover:border-[#9d00f7] text-white text-xs px-3.5 py-2 rounded-xl backdrop-blur-md shadow-xl flex items-center gap-2 transition-all hover:scale-105"
                >
                  <Tv className="w-3.5 h-3.5 text-[#c084fc]" />
                  <span className="font-semibold">DisplayPort 1.4 & Dual HDMI 2.0</span>
                  <span className="text-[10px] text-[#c084fc] bg-[#9d00f7]/20 px-1.5 py-0.5 rounded border border-[#9d00f7]/40">Ver</span>
                </a>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Excellence Bar Below Monitor */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl bg-[#0c0816]/90 border border-[#26143c] hover:border-[#f51a7e]/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f51a7e]/15 border border-[#f51a7e]/30 flex items-center justify-center text-[#ff60a8]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-['Syne']">180Hz</div>
                  <div className="text-xs text-slate-400 font-medium">Taxa de Atualização</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0c0816]/90 border border-[#26143c] hover:border-[#9d00f7]/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#9d00f7]/15 border border-[#9d00f7]/30 flex items-center justify-center text-[#c084fc]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-['Syne']">1ms MPRT</div>
                  <div className="text-xs text-slate-400 font-medium">Sem Motion Blur</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0c0816]/90 border border-[#26143c] hover:border-[#f51a7e]/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f51a7e]/15 border border-[#f51a7e]/30 flex items-center justify-center text-[#ff60a8]">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-['Syne']">-5° a +15°</div>
                  <div className="text-xs text-slate-400 font-medium">Ergonomia & Passa-Cabos</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0c0816]/90 border border-[#26143c] hover:border-[#9d00f7]/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#9d00f7]/15 border border-[#9d00f7]/30 flex items-center justify-center text-[#c084fc]">
                  <Tv className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-['Syne']">DP + 2x HDMI</div>
                  <div className="text-xs text-slate-400 font-medium">Conexões de Alta Taxa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
