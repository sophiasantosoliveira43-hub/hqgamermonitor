import React, { useState } from 'react';
import { MONITOR_IMAGES, ERGONOMIC_FEATURES } from '../data/monitorData';
import { 
  RotateCcw, 
  Route, 
  Maximize2, 
  ShieldCheck, 
  Grid, 
  Check, 
  Eye, 
  Sparkles,
  ArrowRight,
  Layers
} from 'lucide-react';

export const ErgonomicsSection: React.FC = () => {
  // Interactive tilt simulator state: -5deg to +15deg
  const [selectedTilt, setSelectedTilt] = useState<number>(0);
  const [cableMode, setCableMode] = useState<'clean' | 'messy'>('clean');

  const tiltAngles = [
    { label: '-5°', value: -5, description: 'Modo Foco / Mesa Alta' },
    { label: '0°', value: 0, description: 'Ângulo Neutro Padrão' },
    { label: '+7°', value: 7, description: 'Postura Ergonométrica Ideal' },
    { label: '+15°', value: 15, description: 'Visão Confortável / Cadeira Reclinada' }
  ];

  return (
    <section id="ergonomia" className="py-20 lg:py-28 relative overflow-hidden bg-black border-t border-[#26143c]">
      {/* Background glow in purple and pink */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#9d00f7]/15 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f51a7e]/15 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f51a7e]/15 border border-[#f51a7e]/30 text-xs font-bold text-[#ff60a8] mb-4">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Ergonomia & Engenharia Estrutural</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
            Base Ergonômica com <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f51a7e] via-[#ec4899] to-[#9d00f7]">
              Passa-Cabos Integrado
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Inspirada na arquitetura minimalista nórdica, a base do HQ Gamer combina rigidez em liga metálica,
            ajuste angular preciso de inclinação e canal de roteamento para um setup 100% limpo e livre de fios soltos.
          </p>
        </div>

        {/* Feature 1: The Macro Base View + Interactive Tilt Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left: Stand Macro Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#2d1547] bg-[#0c0817] p-2 shadow-2xl group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black">
                <img
                  src={MONITOR_IMAGES.base}
                  alt="Detalhe macro da base ergonômica com passa-cabos do monitor gamer HQ"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Callout Pins on Image */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-black/90 border border-[#f51a7e] text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md shadow-xl flex items-center gap-1.5 animate-pulse">
                  <Route className="w-3.5 h-3.5 text-[#ff60a8]" />
                  <span>Passa-Cabos no Pescoço</span>
                </div>

                <div className="absolute bottom-6 left-6 bg-black/85 border border-[#3b1c60] text-slate-200 px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-md">
                  Pés em Tripé Antiderrapante
                </div>
              </div>
            </div>
            <div className="mt-3 text-center lg:text-left text-xs text-slate-400">
              *Construção em polímero técnico e liga de alumínio reforçado com pintura eletrostática branca fosca.
            </div>
          </div>

          {/* Right: Interactive Tilt & Ergonomic Simulator */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0817] border border-[#2d1547] shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-['Syne'] flex items-center gap-2">
                    <RotateCcw className="w-5 h-5 text-[#ff60a8]" />
                    Simulador de Ajuste de Inclinação (Tilt)
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Experimente os diferentes ângulos de inclinação angular para sua postura.
                  </p>
                </div>
                <span className="text-2xl font-extrabold text-[#ff60a8] font-mono">
                  {selectedTilt > 0 ? `+${selectedTilt}°` : `${selectedTilt}°`}
                </span>
              </div>

              {/* Angle Selector Tabs */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {tiltAngles.map((tilt) => (
                  <button
                    key={tilt.value}
                    onClick={() => setSelectedTilt(tilt.value)}
                    className={`py-3 px-2 rounded-xl text-center font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                      selectedTilt === tilt.value
                        ? 'bg-gradient-to-r from-[#f51a7e] to-[#9d00f7] text-white shadow-lg shadow-pink-500/30 scale-105'
                        : 'bg-black/60 text-slate-300 hover:bg-[#1a0f2b] hover:text-white border border-[#26143c]'
                    }`}
                  >
                    <div>{tilt.label}</div>
                  </button>
                ))}
              </div>

              {/* Interactive Visual Graphic Demonstrating the Tilt */}
              <div className="p-6 rounded-2xl bg-black border border-[#2d1547] flex flex-col items-center justify-center relative overflow-hidden h-52">
                <div className="absolute top-3 left-4 text-[11px] text-slate-400 font-medium">
                  Alinhamento da Visão: <span className="text-white font-bold">{tiltAngles.find(t => t.value === selectedTilt)?.description}</span>
                </div>

                {/* Animated Graphic representation of the Monitor profile tilting */}
                <div className="relative flex items-end justify-center w-full h-36">
                  {/* Stand base & neck */}
                  <div className="absolute bottom-2 flex flex-col items-center z-10">
                    {/* Stand neck with cable hole cutout */}
                    <div className="w-4 h-20 bg-slate-200 rounded-sm relative flex items-center justify-center shadow-md">
                      {/* Cable pass-through hole */}
                      <div className="w-2 h-7 bg-black rounded-full border border-slate-400/40"></div>
                    </div>
                    {/* Tripod base feet */}
                    <div className="w-32 h-2.5 bg-slate-300 rounded-full shadow-lg"></div>
                  </div>

                  {/* Monitor Display Panel that tilts with CSS transform */}
                  <div 
                    className="w-48 h-28 bg-gradient-to-tr from-[#160c29] to-[#0d0718] border-2 border-slate-200 rounded-lg shadow-2xl relative z-20 flex flex-col items-center justify-center transition-transform duration-300 ease-out origin-bottom"
                    style={{ transform: `rotate(${selectedTilt * -0.7}deg)` }}
                  >
                    <div className="text-[10px] font-mono text-[#ff60a8] font-bold uppercase tracking-wider">
                      HQ GAMER 24"
                    </div>
                    <div className="text-[9px] text-slate-300 mt-1 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-[#ff60a8]" />
                      Tilt: {selectedTilt}°
                    </div>

                    {/* Laser eye sightline indicator */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 flex items-center pointer-events-none opacity-60">
                      <div className="w-20 border-b-2 border-dashed border-[#f51a7e]"></div>
                      <Eye className="w-4 h-4 text-[#f51a7e] -ml-1" />
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 mt-2">
                  Arco ergonômico seguro contra dores musculares no pescoço e fadiga pós-partida.
                </div>
              </div>
            </div>

            {/* Cable Management Interactive Compare Switch */}
            <div className="p-6 rounded-2xl bg-[#0c0817] border border-[#2d1547] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f51a7e]/15 border border-[#f51a7e]/30 flex items-center justify-center text-[#ff60a8] shrink-0">
                  <Route className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Organização de Cabos Sem Fios à Vista</h4>
                  <p className="text-xs text-slate-400">Guie os cabos DP, HDMI e força pela abertura da coluna.</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-black p-1 rounded-xl border border-[#2d1547] shrink-0">
                <button
                  onClick={() => setCableMode('clean')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    cableMode === 'clean' ? 'bg-gradient-to-r from-[#f51a7e] to-[#9d00f7] text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Com Passa-Cabos (Clean)
                </button>
                <button
                  onClick={() => setCableMode('messy')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    cableMode === 'messy' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Sem Gestão
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Detailed Cards for Ergonomic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ERGONOMIC_FEATURES.map((feature, idx) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-[#0c0817] border border-[#26143c] hover:border-[#f51a7e]/50 transition-all hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f51a7e]/20 to-[#9d00f7]/20 border border-[#f51a7e]/30 flex items-center justify-center text-[#ff60a8]">
                    {idx === 0 && <RotateCcw className="w-6 h-6" />}
                    {idx === 1 && <Route className="w-6 h-6" />}
                    {idx === 2 && <ShieldCheck className="w-6 h-6" />}
                    {idx === 3 && <Grid className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#ff60a8] bg-[#f51a7e]/15 border border-[#f51a7e]/30 px-2 py-0.5 rounded-full">
                    {feature.spec}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-['Syne'] mb-1">
                  {feature.title}
                </h3>
                <div className="text-xs text-[#c084fc] font-medium mb-3">
                  {feature.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#26143c] flex items-center text-xs font-semibold text-[#ff60a8] gap-1.5">
                <Check className="w-4 h-4" />
                <span>Testado para 10.000+ ajustes</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
