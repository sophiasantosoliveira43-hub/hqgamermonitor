import React from 'react';
import { Monitor, ShieldCheck, Heart, ArrowUp, Lock, RefreshCw, Truck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-[#26143c] text-slate-400 text-xs py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f51a7e] to-[#9d00f7] flex items-center justify-center text-white font-black">
                <Monitor className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-white font-['Syne'] tracking-tight">
                HQ<span className="text-[#ff60a8]">GAMER</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Monitores gamer de alta performance desenvolvidos com rigor técnico para atletas de eSports e criadores de conteúdo que não abrem mão de fluidez e estética.
            </p>
            <div className="flex items-center gap-2 text-[#ff60a8] text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#f51a7e] animate-pulse"></span>
              <span>Garantia Nacional & Suporte Técnico no Brasil</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <div className="font-bold text-white text-sm mb-4 font-['Syne']">Navegação Rápida</div>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-[#ff60a8] transition-colors">Início</a></li>
              <li><a href="#performance" className="hover:text-[#ff60a8] transition-colors">180Hz & 1ms MPRT</a></li>
              <li><a href="#ergonomia" className="hover:text-[#ff60a8] transition-colors">Ergonomia & Passa-Cabos</a></li>
              <li><a href="#conexoes" className="hover:text-[#ff60a8] transition-colors">Conexões DisplayPort & HDMI</a></li>
              <li><a href="#especificacoes" className="hover:text-[#ff60a8] transition-colors">Ficha Técnica Completa</a></li>
            </ul>
          </div>

          {/* Tech Features */}
          <div>
            <div className="font-bold text-white text-sm mb-4 font-['Syne']">Destaques Técnicos</div>
            <ul className="space-y-2">
              <li className="text-slate-300">Fast IPS Full HD (1920x1080)</li>
              <li className="text-slate-300">Base Ergonômica c/ Tilt (-5° a +15°)</li>
              <li className="text-slate-300">Passa-Cabos Integrado na Coluna</li>
              <li className="text-slate-300">DisplayPort 1.4 & 2x HDMI 2.0</li>
              <li className="text-slate-300">Compatível PS5 & Xbox Series (120Hz)</li>
              <li className="text-slate-300">Furação VESA 75x75mm</li>
            </ul>
          </div>

          {/* Security & Badges */}
          <div>
            <div className="font-bold text-white text-sm mb-4 font-['Syne']">Compra Segura</div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-300">
                <Lock className="w-4 h-4 text-[#ff60a8]" />
                <span>Checkout 100% Criptografado SSL</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Truck className="w-4 h-4 text-[#c084fc]" />
                <span>Frete Grátis com Rastreio Correios / Jadlog</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <RefreshCw className="w-4 h-4 text-[#ff60a8]" />
                <span>7 Dias para Troca ou Devolução Grátis</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#c084fc]" />
                <span>Zero Dead Pixel Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#26143c] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} HQ Gamer Brasil. Todos os direitos reservados. Imagens meramente ilustrativas para demonstração de produto.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0c0817] hover:bg-[#180d2b] text-slate-300 hover:text-white border border-[#26143c] transition-colors cursor-pointer text-xs"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
