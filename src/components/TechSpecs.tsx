import React, { useState } from 'react';
import { TECH_SPECS } from '../data/monitorData';
import { Layers, CheckCircle2, Sliders, Shield, Download, FileText } from 'lucide-react';

export const TechSpecs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', ...TECH_SPECS.map((c) => c.category)];

  const filteredSpecs = selectedCategory === 'Todas'
    ? TECH_SPECS
    : TECH_SPECS.filter((c) => c.category === selectedCategory);

  return (
    <section id="especificacoes" className="py-20 lg:py-28 relative overflow-hidden bg-black border-t border-[#26143c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f51a7e]/15 border border-[#f51a7e]/30 text-xs font-bold text-[#ff60a8] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Ficha Técnica Completa</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
            Especificações Técnicas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f51a7e] via-[#ec4899] to-[#9d00f7]">
              HQ Gamer 24" 180Hz White
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Transparência total em cada componente de hardware. Dados certificados para atender às exigências
            de jogadores profissionais e entusiastas.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#f51a7e] to-[#9d00f7] text-white font-bold shadow-md shadow-pink-500/20'
                  : 'bg-[#0c0817] text-slate-300 hover:bg-[#180d2b] border border-[#26143c]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Specs Table & Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecs.map((specGroup) => (
            <div
              key={specGroup.category}
              className="p-6 rounded-3xl bg-[#0c0817] border border-[#2d1547] shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white font-['Syne'] pb-3 mb-4 border-b border-[#26143c] flex items-center justify-between">
                  <span>{specGroup.category}</span>
                  <span className="w-2 h-2 rounded-full bg-[#f51a7e]"></span>
                </h3>

                <dl className="space-y-3">
                  {specGroup.items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl flex items-center justify-between text-xs gap-3 ${
                        item.highlight ? 'bg-[#f51a7e]/15 border border-[#f51a7e]/30' : 'bg-black/60 border border-[#26143c]/50'
                      }`}
                    >
                      <dt className="text-slate-400 font-medium">{item.label}</dt>
                      <dd className={`font-mono font-bold text-right ${item.highlight ? 'text-[#ff60a8]' : 'text-slate-200'}`}>
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance & Certifications Footer */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0c0817] border border-[#26143c] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-emerald-400 shrink-0" />
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white">Certificações de Qualidade: </span>
              Anatel, FCC, CE, RoHS, ISO 9241-307 Classe I (Norma internacional de painéis).
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#ff60a8] bg-[#f51a7e]/15 border border-[#f51a7e]/30 px-3 py-1 rounded-lg">
              Manual PDF em Português
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
