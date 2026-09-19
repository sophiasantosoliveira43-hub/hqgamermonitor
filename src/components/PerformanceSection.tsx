import React, { useState, useEffect } from 'react';
import { Zap, Clock, ShieldAlert, CheckCircle2, Sparkles, Sliders, Layers } from 'lucide-react';

export const PerformanceSection: React.FC = () => {
  const [selectedHz, setSelectedHz] = useState<60 | 144 | 180>(180);
  const [adaptiveSync, setAdaptiveSync] = useState<boolean>(true);
  const [overdrive, setOverdrive] = useState<'off' | 'normal' | 'turbo'>('turbo');

  // Animation counter for smooth crosshair/target animation
  const [ticker, setTicker] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTicker((prev) => (prev + 1) % 100);
    }, selectedHz === 180 ? 16 : selectedHz === 144 ? 24 : 45);
    return () => clearInterval(interval);
  }, [selectedHz]);

  return (
    <section id="performance" className="py-20 lg:py-28 relative overflow-hidden bg-black border-t border-[#26143c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f51a7e]/15 border border-[#f51a7e]/30 text-xs font-bold text-[#ff60a8] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Engenharia de Painel Fast IPS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
            180Hz Nativo com <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f51a7e] via-[#ec4899] to-[#9d00f7]">
              1ms MPRT de Resposta Ultrarrápida
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Veja cada detalhe da ação antes dos seus oponentes. A combinação da taxa de 180Hz com painel Fast IPS
            proporciona clareza cristalina em movimentos em alta velocidade sem os rastros indesejados (ghosting).
          </p>
        </div>

        {/* Interactive Motion & Hz Simulator */}
        <div className="rounded-3xl bg-[#0c0817] border border-[#2d1547] p-6 sm:p-8 lg:p-10 shadow-2xl mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#26143c]">
            <div>
              <h3 className="text-xl font-bold text-white font-['Syne']">
                Simulador Interativo de Taxa de Quadros (Hz) & Motion Blur
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Alterne entre as frequências para sentir visualmente a diferença de nitidez no rastreamento.
              </p>
            </div>

            {/* Hz Selector Buttons */}
            <div className="flex items-center gap-2 p-1.5 bg-black rounded-2xl border border-[#2d1547]">
              <button
                onClick={() => setSelectedHz(60)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  selectedHz === 60
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                60Hz (Padrão)
              </button>

              <button
                onClick={() => setSelectedHz(144)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  selectedHz === 144
                    ? 'bg-[#9d00f7] text-white shadow-lg shadow-purple-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                144Hz
              </button>

              <button
                onClick={() => setSelectedHz(180)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  selectedHz === 180
                    ? 'bg-gradient-to-r from-[#f51a7e] to-[#9d00f7] text-white shadow-lg shadow-pink-500/30 scale-105'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                180Hz (HQ Gamer)
              </button>
            </div>
          </div>

          {/* Canvas-like Visual Simulation Box */}
          <div className="my-8 relative rounded-2xl bg-[#06030c] border border-[#2d1547] p-6 overflow-hidden h-64 sm:h-72 flex flex-col justify-between">
            {/* Background speed grid lines */}
            <div className="absolute inset-0 opacity-20 pointer-events-none flex justify-between px-10">
              <div className="w-[1px] h-full bg-[#f51a7e]"></div>
              <div className="w-[1px] h-full bg-[#9d00f7]"></div>
              <div className="w-[1px] h-full bg-[#f51a7e]"></div>
              <div className="w-[1px] h-full bg-[#9d00f7]"></div>
            </div>

            {/* Status bar inside simulation */}
            <div className="flex items-center justify-between text-xs z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f51a7e] animate-ping"></span>
                <span className="font-mono font-bold text-white uppercase">
                  Modo de Demonstração: {selectedHz} FPS / {selectedHz}Hz
                </span>
              </div>
              <div className="font-mono text-[#ff60a8] font-bold">
                Tempo por Quadro: {(1000 / selectedHz).toFixed(2)} ms
              </div>
            </div>

            {/* Moving Object (Fast Target) */}
            <div className="relative w-full h-24 my-auto overflow-hidden flex items-center">
              <div
                className="absolute flex items-center gap-3 transition-all ease-linear"
                style={{
                  left: `${(ticker * 1.05) % 100}%`,
                  filter:
                    selectedHz === 60
                      ? 'blur(4.5px) opacity(70%)'
                      : selectedHz === 144
                      ? 'blur(1.5px)'
                      : 'blur(0px)',
                  transform: 'translateX(-50%)',
                }}
              >
                {/* Simulated Target Object */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#9d00f7] via-[#f51a7e] to-white flex flex-col items-center justify-center shadow-2xl border-2 border-white text-black font-black">
                  <div className="text-[10px] uppercase tracking-tighter font-extrabold">Alvo</div>
                  <div className="text-sm font-mono">{selectedHz}Hz</div>
                </div>

                {/* Simulated Ghosting tail when 60Hz */}
                {selectedHz === 60 && (
                  <div className="flex gap-2 opacity-40">
                    <div className="w-12 h-12 rounded-xl bg-[#9d00f7]/40 blur-sm"></div>
                    <div className="w-8 h-8 rounded-lg bg-[#f51a7e]/30 blur-md"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom HUD inside simulator */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#1f0f35] text-xs text-slate-400 z-10">
              <div>
                <span className="text-slate-300 font-semibold">Avaliação visual: </span>
                {selectedHz === 180 && (
                  <span className="text-[#ff60a8] font-bold">Rastreamento perfeito, zero ghosting, precisão competitiva máxima.</span>
                )}
                {selectedHz === 144 && (
                  <span className="text-[#c084fc] font-medium">Boa fluidez, porém com leve arrasto em movimentos súbitos.</span>
                )}
                {selectedHz === 60 && (
                  <span className="text-rose-400 font-medium">Arrasto severo (motion blur), perda de foco visual em jogos rápidos.</span>
                )}
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={adaptiveSync}
                    onChange={(e) => setAdaptiveSync(e.target.checked)}
                    className="rounded border-[#3b1c60] text-[#f51a7e] focus:ring-[#f51a7e]"
                  />
                  <span className="text-slate-300">FreeSync / G-Sync Ativo</span>
                </label>
              </div>
            </div>
          </div>

          {/* 3 Tech Pill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-black/80 border border-[#2d1547]">
              <div className="flex items-center gap-2 text-[#ff60a8] font-bold text-sm mb-1.5">
                <Zap className="w-4 h-4" />
                <span>180 Quadros por Segundo</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Atualização a cada 5.5ms. A mira responde no exato milissegundo do movimento da sua mão.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/80 border border-[#2d1547]">
              <div className="flex items-center gap-2 text-[#c084fc] font-bold text-sm mb-1.5">
                <Clock className="w-4 h-4" />
                <span>1ms MPRT / 0.5ms GTG Turbo</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Circuito de Overdrive calibrado que desliga pixels com rapidez estroboscópica para zerar o smearing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/80 border border-[#2d1547]">
              <div className="flex items-center gap-2 text-[#f51a7e] font-bold text-sm mb-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>99% sRGB Fast IPS</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cores fiéis e vibrantes com 178° de ângulo de visão. Ideal para jogos imersivos e edição de vídeo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
