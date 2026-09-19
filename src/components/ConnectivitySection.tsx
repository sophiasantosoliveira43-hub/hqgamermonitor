import React, { useState } from 'react';
import { MONITOR_IMAGES, PORTS_DATA } from '../data/monitorData';
import { PortDetail } from '../types';
import { 
  Tv, 
  Zap, 
  Headphones, 
  BatteryCharging, 
  Gamepad2, 
  Laptop, 
  CheckCircle2, 
  Activity, 
  ArrowUpRight,
  Sparkles,
  Info
} from 'lucide-react';

export const ConnectivitySection: React.FC = () => {
  const [activePortId, setActivePortId] = useState<string>('dp');

  const activePort: PortDetail = PORTS_DATA.find((p) => p.id === activePortId) || PORTS_DATA[0];

  const getPortIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-[#ff60a8]" />;
      case 'Tv': return <Tv className="w-5 h-5 text-[#c084fc]" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-[#ff60a8]" />;
      case 'BatteryCharging': return <BatteryCharging className="w-5 h-5 text-emerald-400" />;
      default: return <Tv className="w-5 h-5 text-[#ff60a8]" />;
    }
  };

  return (
    <section id="conexoes" className="py-20 lg:py-28 relative overflow-hidden bg-black border-t border-[#26143c]">
      {/* Background illumination in purple */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#9d00f7]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f51a7e]/15 border border-[#f51a7e]/30 text-xs font-bold text-[#ff60a8] mb-4">
            <Tv className="w-3.5 h-3.5" />
            <span>I/O de Alta Performance</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
            Conexões de Vídeo de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f51a7e] via-[#ec4899] to-[#9d00f7]">
              Alta Performance & Velocidade
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Elimine gargalos de largura de banda. Conecte seu PC Gamer de alta taxa de quadros e seus consoles
            de última geração simultaneamente com entradas digitais de baixíssima latência.
          </p>
        </div>

        {/* Main Grid: Interactive Port Explorer + Real Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Real Ports Image & Callout Highlights */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-[#2d1547] bg-[#0c0817] p-2 shadow-2xl group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black">
                <img
                  src={MONITOR_IMAGES.ports}
                  alt="Painel traseiro de conexões de vídeo DisplayPort e HDMI do monitor gamer HQ"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlaid Port Labels */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded bg-black/90 text-[#ff60a8] border border-[#f51a7e]/50 text-xs font-mono font-bold backdrop-blur-sm">
                      1x DisplayPort 1.4
                    </span>
                    <span className="px-2.5 py-1 rounded bg-black/90 text-[#c084fc] border border-[#9d00f7]/50 text-xs font-mono font-bold backdrop-blur-sm">
                      2x HDMI 2.0
                    </span>
                    <span className="px-2.5 py-1 rounded bg-black/90 text-[#ff60a8] border border-[#f51a7e]/40 text-xs font-mono font-bold backdrop-blur-sm">
                      1x Áudio 3.5mm
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simultaneous Setup Diagram (PC + Console) */}
            <div className="p-5 rounded-2xl bg-[#0c0817] border border-[#26143c] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f51a7e]/15 border border-[#f51a7e]/30 flex items-center justify-center text-[#ff60a8] shrink-0">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Setup Híbrido Multidispositivo</div>
                  <div className="text-xs text-slate-400">PC Gamer no DisplayPort (180Hz) + PS5 / Xbox no HDMI (120Hz)</div>
                </div>
              </div>
              <span className="text-[11px] text-[#ff60a8] font-bold bg-[#f51a7e]/15 border border-[#f51a7e]/30 px-2.5 py-1 rounded-full whitespace-nowrap">
                Zero Troca de Cabos
              </span>
            </div>
          </div>

          {/* Right: Interactive Port Spec Inspector */}
          <div className="lg:col-span-6 space-y-4">
            {/* Port Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PORTS_DATA.map((port) => {
                const isSelected = activePortId === port.id;
                return (
                  <button
                    key={port.id}
                    onClick={() => setActivePortId(port.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#180d2b] border-[#f51a7e] shadow-lg shadow-pink-500/15 ring-1 ring-[#f51a7e]/50'
                        : 'bg-[#0c0817] border-[#26143c] text-slate-400 hover:text-slate-200 hover:bg-[#150a24]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="shrink-0">{getPortIcon(port.iconName)}</div>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#f51a7e] animate-pulse"></span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-white truncate">{port.name}</div>
                    <div className="text-[10px] text-[#c084fc] font-mono">{port.version}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Port Detailed Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0c0817] border border-[#2d1547] shadow-2xl space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#26143c]">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#ff60a8] font-bold">
                    {activePort.badge}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white font-['Syne'] mt-0.5">
                    {activePort.name}
                  </h3>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-400 font-medium">Largura de Banda Máxima</div>
                  <div className="text-lg font-mono font-extrabold text-[#ff60a8]">
                    {activePort.maxBandwidth}
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activePort.description}
              </p>

              {/* Supported Modes / Capabilities Checklist */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ff60a8]" />
                  <span>Recursos & Modos Suportados:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activePort.supportedModes.map((mode, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-black border border-[#26143c] flex items-start gap-2 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ff60a8] shrink-0 mt-0.5" />
                      <span>{mode}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bandwidth Comparison Bar Chart Visualizer */}
              <div className="pt-4 border-t border-[#26143c]">
                <div className="text-xs font-bold text-slate-400 mb-2 flex items-center justify-between">
                  <span>Comparativo de Largura de Banda de Vídeo</span>
                  <span className="text-[10px] text-slate-500 font-mono">Gbps (Gigabits por segundo)</span>
                </div>

                <div className="space-y-2.5">
                  {/* DP 1.4 */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-white">DisplayPort 1.4 (HQ Gamer)</span>
                      <span className="font-mono text-[#ff60a8] font-bold">32.4 Gbps</span>
                    </div>
                    <div className="w-full h-3 bg-black rounded-full overflow-hidden p-0.5 border border-[#26143c]">
                      <div className="h-full bg-gradient-to-r from-[#f51a7e] to-[#9d00f7] rounded-full w-full"></div>
                    </div>
                  </div>

                  {/* HDMI 2.0 */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-300">HDMI 2.0 (HQ Gamer)</span>
                      <span className="font-mono text-[#c084fc] font-bold">18.0 Gbps</span>
                    </div>
                    <div className="w-full h-3 bg-black rounded-full overflow-hidden p-0.5 border border-[#26143c]">
                      <div className="h-full bg-[#9d00f7] rounded-full" style={{ width: '55%' }}></div>
                    </div>
                  </div>

                  {/* Legacy HDMI 1.4 */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-500">HDMI 1.4 Tradicional (Outros monitores)</span>
                      <span className="font-mono text-slate-500">10.2 Gbps</span>
                    </div>
                    <div className="w-full h-3 bg-black rounded-full overflow-hidden p-0.5 border border-[#26143c]">
                      <div className="h-full bg-slate-800 rounded-full" style={{ width: '31%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Console & PC Compatibilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0c0817] border border-[#26143c] flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f51a7e]/15 border border-[#f51a7e]/30 flex items-center justify-center text-[#ff60a8] shrink-0">
              <Laptop className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-['Syne']">PC Gamer & eSports</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Atinge 180Hz com DisplayPort 1.4 e compatibilidade direta com placas NVIDIA GeForce e AMD Radeon.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0817] border border-[#26143c] flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#9d00f7]/15 border border-[#9d00f7]/30 flex items-center justify-center text-[#c084fc] shrink-0">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-['Syne']">PlayStation 5 & Xbox Series</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Suporta nativamente 1080p @ 120 FPS via HDMI 2.0 nos títulos compatíveis como Call of Duty e Fortnite.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0817] border border-[#26143c] flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f51a7e]/15 border border-[#f51a7e]/30 flex items-center justify-center text-[#ff60a8] shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-['Syne']">Saída de Áudio Integrada</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Conector P2 para fones ou soundbar, eliminando a necessidade de cabos longos até o gabinete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
