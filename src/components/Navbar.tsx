import React, { useState, useEffect } from 'react';
import { Monitor, Zap, ShoppingBag, ShieldCheck, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Visão Geral', href: '#inicio' },
    { name: '180Hz & 1ms', href: '#performance' },
    { name: 'Ergonomia da Base', href: '#ergonomia', badge: 'Destaque' },
    { name: 'Conexões I/O', href: '#conexoes', badge: 'Destaque' },
    { name: 'Design', href: '#galeria' },
    { name: 'Especificações', href: '#especificacoes' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-[#2e134b] shadow-2xl shadow-purple-950/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#inicio" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#9d00f7] via-[#f51a7e] to-white flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform">
              <Monitor className="w-5 h-5 text-black stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-['Syne']">
                  HQ<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f51a7e] to-[#9d00f7]">GAMER</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/10 text-white border border-white/20">
                  White
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                24" • 180Hz • 1ms
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-[#150e24] transition-colors flex items-center gap-1.5"
              >
                {link.name}
                {link.badge && (
                  <span className="text-[9px] uppercase font-extrabold px-1.5 py-0.2 rounded-full bg-[#f51a7e]/20 text-[#ff60a8] border border-[#f51a7e]/40">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-[11px] text-[#ff60a8] font-semibold flex items-center gap-1 justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f51a7e] animate-pulse"></span>
                Em Estoque
              </span>
              <span className="text-xs text-slate-400">12x de R$ 57,49</span>
            </div>

            <button
              id="navbar-buy-button"
              onClick={onOpenCart}
              className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#f51a7e] to-[#9d00f7] hover:from-[#ff2a8d] hover:to-[#b22aff] shadow-lg shadow-pink-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Comprar Agora</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline-block" />
            </button>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#1a0f2e] transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-[#2e134b] bg-black/95 rounded-2xl px-4 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-[#ff60a8] hover:bg-[#190f2b] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#f51a7e]/20 text-[#ff60a8] border border-[#f51a7e]/40">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
              <div className="pt-2 border-t border-[#2e134b] mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCart();
                  }}
                  className="w-full py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#f51a7e] to-[#9d00f7] flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Garantir por R$ 689,90 à vista</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
