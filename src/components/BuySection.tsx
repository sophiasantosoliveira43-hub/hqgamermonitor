import React, { useState } from 'react';
import { BUNDLE_OPTIONS, MONITOR_IMAGES } from '../data/monitorData';
import { BundleOption } from '../types';
import { 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  Check, 
  Sparkles, 
  CreditCard, 
  QrCode, 
  Clock, 
  Award,
  ArrowRight
} from 'lucide-react';

interface BuySectionProps {
  onSelectBundle: (bundle: BundleOption) => void;
}

export const BuySection: React.FC<BuySectionProps> = ({ onSelectBundle }) => {
  const [selectedBundleId, setSelectedBundleId] = useState<string>('solo');
  const [cepInput, setCepInput] = useState<string>('');
  const [shippingResult, setShippingResult] = useState<{ city: string; days: string; price: string } | null>(null);

  const selectedBundle = BUNDLE_OPTIONS.find((b) => b.id === selectedBundleId) || BUNDLE_OPTIONS[0];

  const handleCalculateShipping = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cepInput || cepInput.length < 5) return;

    // Simulated real Brazilian CEP calculation
    const cleanCep = cepInput.replace(/\D/g, '');
    let city = 'São Paulo e Região (SP)';
    let days = '2 a 4 dias úteis';

    if (cleanCep.startsWith('2')) {
      city = 'Rio de Janeiro e Região (RJ)';
      days = '3 a 5 dias úteis';
    } else if (cleanCep.startsWith('3')) {
      city = 'Belo Horizonte e Região (MG)';
      days = '3 a 5 dias úteis';
    } else if (cleanCep.startsWith('8') || cleanCep.startsWith('9')) {
      city = 'Região Sul (PR, SC, RS)';
      days = '4 a 6 dias úteis';
    } else if (cleanCep.startsWith('4') || cleanCep.startsWith('5')) {
      city = 'Região Nordeste';
      days = '5 a 7 dias úteis';
    } else if (cleanCep.startsWith('7')) {
      city = 'Brasília e Centro-Oeste';
      days = '4 a 6 dias úteis';
    }

    setShippingResult({
      city,
      days,
      price: 'GRÁTIS (Expresso com Seguro)'
    });
  };

  return (
    <section id="comprar" className="py-20 lg:py-28 relative overflow-hidden bg-black border-t border-[#26143c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f51a7e]/15 border border-[#f51a7e]/30 text-xs font-bold text-[#ff60a8] mb-4">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Condição Especial de Lançamento</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
            Eleve Seu Nível com o <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f51a7e] via-[#ec4899] to-[#9d00f7]">
              HQ Gamer 180Hz White Edition
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-300">
            Aproveite o preço promocional com frete grátis, 12 meses de garantia e cabo DisplayPort incluso na caixa.
          </p>
        </div>

        {/* Bundle Options Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {BUNDLE_OPTIONS.map((bundle) => {
            const isSelected = selectedBundleId === bundle.id;
            return (
              <div
                key={bundle.id}
                onClick={() => setSelectedBundleId(bundle.id)}
                className={`relative rounded-3xl p-6 sm:p-8 transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#130822] border-2 border-[#f51a7e] shadow-2xl shadow-pink-500/20 ring-2 ring-[#f51a7e]/30 -translate-y-1'
                    : 'bg-[#0c0817] border border-[#26143c] hover:border-[#3b1c60]'
                }`}
              >
                {/* Top Badge */}
                {bundle.tag && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-[#f51a7e] to-[#9d00f7] text-white shadow-md">
                    {bundle.tag}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-['Syne']">
                      {bundle.name}
                    </h3>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? 'border-[#f51a7e] bg-[#f51a7e]' : 'border-slate-600'
                    }`}>
                      {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                    </div>
                  </div>

                  {/* Pricing Box */}
                  <div className="mb-6 pb-6 border-b border-[#26143c]">
                    <div className="text-xs text-slate-400 line-through">
                      De R$ {bundle.originalPrice.toFixed(2).replace('.', ',')}
                    </div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne']">
                        R$ {bundle.price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-xs text-[#ff60a8] font-bold bg-[#f51a7e]/20 px-2 py-0.5 rounded border border-[#f51a7e]/40">
                        À VISTA NO PIX (10% OFF)
                      </span>
                    </div>
                    <div className="text-xs text-slate-300 mt-2 font-medium">
                      ou <span className="text-white font-bold">{bundle.installments}</span> no cartão
                    </div>
                  </div>

                  {/* Included Items Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      O que está incluso:
                    </div>
                    {bundle.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <Check className="w-4 h-4 text-[#ff60a8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedBundleId(bundle.id);
                    onSelectBundle(bundle);
                  }}
                  className={`w-full py-4 rounded-xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#f51a7e] via-[#ec4899] to-[#9d00f7] text-white shadow-xl shadow-pink-500/25 hover:shadow-pink-400/40 hover:scale-[1.01]'
                      : 'bg-[#1a0c2d] text-slate-200 hover:bg-[#26143c] hover:text-white border border-[#3b1c60]'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Garantir Este Pacote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Shipping Simulator (Calculador de Frete) */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0c0817] border border-[#26143c] shadow-xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#f51a7e]/15 border border-[#f51a7e]/30 flex items-center justify-center text-[#ff60a8]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-['Syne']">
                Calcule o Frete e Prazo de Entrega
              </h4>
              <p className="text-xs text-slate-400">
                Digite seu CEP para consultar a estimativa de entrega na sua região.
              </p>
            </div>
          </div>

          <form onSubmit={handleCalculateShipping} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Ex: 01310-100"
              value={cepInput}
              onChange={(e) => setCepInput(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-black border border-[#3b1c60] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#f51a7e]"
              maxLength={9}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#1a0c2d] hover:bg-[#26143c] text-white border border-[#3b1c60] transition-colors shrink-0 cursor-pointer"
            >
              Calcular Frete
            </button>
          </form>

          {shippingResult && (
            <div className="mt-4 p-4 rounded-xl bg-[#f51a7e]/10 border border-[#f51a7e]/30 flex items-center justify-between text-xs animate-in fade-in">
              <div>
                <div className="font-bold text-white">{shippingResult.city}</div>
                <div className="text-slate-300">Prazo estimado: {shippingResult.days}</div>
              </div>
              <div className="text-right">
                <div className="font-extrabold text-[#ff60a8] text-sm">{shippingResult.price}</div>
                <div className="text-[10px] text-slate-400">Transportadora Oficial HQ Express</div>
              </div>
            </div>
          )}
        </div>

        {/* Guarantees & Safety Seals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-[#0c0817] border border-[#26143c] text-center">
            <ShieldCheck className="w-6 h-6 text-[#ff60a8] mx-auto mb-2" />
            <div className="text-xs font-bold text-white">12 Meses de Garantia</div>
            <div className="text-[11px] text-slate-400">Suporte direto com a fábrica</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c0817] border border-[#26143c] text-center">
            <Award className="w-6 h-6 text-[#c084fc] mx-auto mb-2" />
            <div className="text-xs font-bold text-white">Zero Dead Pixel</div>
            <div className="text-[11px] text-slate-400">Troca imediata garantida</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c0817] border border-[#26143c] text-center">
            <QrCode className="w-6 h-6 text-[#ff60a8] mx-auto mb-2" />
            <div className="text-xs font-bold text-white">PIX com 10% OFF</div>
            <div className="text-[11px] text-slate-400">Aprovação em segundos</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0c0817] border border-[#26143c] text-center">
            <Truck className="w-6 h-6 text-[#c084fc] mx-auto mb-2" />
            <div className="text-xs font-bold text-white">Envio com Seguro</div>
            <div className="text-[11px] text-slate-400">Rastreio online em tempo real</div>
          </div>
        </div>
      </div>
    </section>
  );
};
