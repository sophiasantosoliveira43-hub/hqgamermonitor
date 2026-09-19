import React, { useState } from 'react';
import { BundleOption } from '../types';
import { BUNDLE_OPTIONS, MONITOR_IMAGES } from '../data/monitorData';
import { 
  X, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  QrCode, 
  CheckCircle2, 
  ArrowRight,
  PackageCheck,
  Check
} from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBundle: BundleOption | null;
  onSelectBundle: (bundle: BundleOption) => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  selectedBundle,
  onSelectBundle,
}) => {
  const currentBundle = selectedBundle || BUNDLE_OPTIONS[0];

  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit'>('pix');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  if (!isOpen) return null;

  const pixDiscountPrice = currentBundle.price * 0.95; // Extra 5% for instant order simulation

  const handleFinishOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-xl bg-[#0c0817] border border-[#2d1547] rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="p-6 bg-black border-b border-[#26143c] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#f51a7e]/15 border border-[#f51a7e]/30 flex items-center justify-center text-[#ff60a8]">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-['Syne']">
                {orderPlaced ? 'Pedido Confirmado!' : 'Checkout Seguro'}
              </h3>
              <p className="text-xs text-slate-400">
                {orderPlaced ? 'Obrigado pela sua compra!' : 'Monitor Gamer HQ 24" 180Hz White'}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setOrderPlaced(false);
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#180d2b] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {orderPlaced ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-2xl font-extrabold text-white font-['Syne']">
                Parabéns pelo novo setup!
              </h4>
              <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                Seu pedido foi registrado com sucesso. Enviamos os dados de rastreio e nota fiscal para o seu e-mail.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black border border-[#26143c] text-left space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Produto:</span>
                <span className="text-white font-bold">{currentBundle.name}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Forma de Pagamento:</span>
                <span className="text-[#ff60a8] font-bold uppercase">{paymentMethod === 'pix' ? 'PIX Instantâneo' : 'Cartão de Crédito 12x'}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Frete:</span>
                <span className="text-emerald-400 font-bold">Grátis (Expresso com Seguro)</span>
              </div>
              <div className="flex justify-between text-slate-400 pt-2 border-t border-[#26143c]">
                <span className="text-sm font-bold text-white">Total Pago:</span>
                <span className="text-sm font-extrabold text-white font-mono">
                  R$ {(paymentMethod === 'pix' ? pixDiscountPrice : currentBundle.price).toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setOrderPlaced(false);
                onClose();
              }}
              className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#f51a7e] via-[#ec4899] to-[#9d00f7] shadow-lg shadow-pink-500/30 cursor-pointer"
            >
              Concluir e Voltar à Página
            </button>
          </div>
        ) : (
          <form onSubmit={handleFinishOrder} className="p-6 space-y-6">
            {/* Selected Product Card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-black border border-[#26143c]">
              <img
                src={MONITOR_IMAGES.hero}
                alt="HQ Gamer 24 180Hz"
                referrerPolicy="no-referrer"
                className="w-20 h-14 rounded-lg object-cover border border-[#3b1c60] shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs text-[#ff60a8] font-bold uppercase tracking-wider">
                  White Edition • 180Hz • 1ms
                </div>
                <div className="text-sm font-extrabold text-white truncate font-['Syne']">
                  {currentBundle.name}
                </div>
                <div className="text-xs text-slate-400">
                  Base c/ Passa-Cabos + DisplayPort 1.4 Incluso
                </div>
              </div>
            </div>

            {/* Bundle Switcher */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Selecione o Pacote:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {BUNDLE_OPTIONS.map((bundle) => (
                  <button
                    key={bundle.id}
                    type="button"
                    onClick={() => onSelectBundle(bundle)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      currentBundle.id === bundle.id
                        ? 'bg-[#180d2b] border-[#f51a7e] text-white ring-1 ring-[#f51a7e]/40'
                        : 'bg-black border-[#26143c] text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold truncate">{bundle.name.replace('Monitor ', '')}</div>
                    <div className="text-xs font-mono font-extrabold text-[#ff60a8] mt-1">
                      R$ {bundle.price.toFixed(2).replace('.', ',')}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Information */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Seus Dados para Envio:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Nome Completo"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl bg-black border border-[#3b1c60] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f51a7e]"
                />
                <input
                  type="email"
                  required
                  placeholder="Seu Melhor E-mail"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl bg-black border border-[#3b1c60] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f51a7e]"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Forma de Pagamento:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3.5 rounded-xl border flex items-center gap-2.5 transition-all cursor-pointer ${
                    paymentMethod === 'pix'
                      ? 'bg-emerald-500/10 border-emerald-400 text-white ring-1 ring-emerald-400/40'
                      : 'bg-black border-[#26143c] text-slate-400 hover:text-white'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-white">PIX (5% OFF Extra)</div>
                    <div className="text-[10px] text-emerald-400 font-bold">Aprovação Imediata</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('credit')}
                  className={`p-3.5 rounded-xl border flex items-center gap-2.5 transition-all cursor-pointer ${
                    paymentMethod === 'credit'
                      ? 'bg-[#180d2b] border-[#f51a7e] text-white ring-1 ring-[#f51a7e]/40'
                      : 'bg-black border-[#26143c] text-slate-400 hover:text-white'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-[#ff60a8] shrink-0" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-white">Cartão de Crédito</div>
                    <div className="text-[10px] text-slate-400">Até 12x sem juros</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Price Summary */}
            <div className="p-4 rounded-2xl bg-black border border-[#26143c] space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal ({currentBundle.name})</span>
                <span className="font-mono text-white">R$ {currentBundle.price.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Frete Expresso Seguro</span>
                <span className="font-bold text-emerald-400 uppercase">Grátis</span>
              </div>
              {paymentMethod === 'pix' && (
                <div className="flex justify-between text-emerald-400">
                  <span>Desconto Especial PIX</span>
                  <span className="font-mono font-bold">- R$ {(currentBundle.price - pixDiscountPrice).toFixed(2).replace('.', ',')}</span>
                </div>
              )}
              <div className="pt-2 border-t border-[#26143c] flex justify-between items-baseline">
                <span className="text-sm font-bold text-white">Total a Pagar:</span>
                <span className="text-lg font-extrabold text-[#ff60a8] font-mono">
                  R$ {(paymentMethod === 'pix' ? pixDiscountPrice : currentBundle.price).toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-[#f51a7e] via-[#ec4899] to-[#9d00f7] hover:opacity-95 shadow-xl shadow-pink-500/25 cursor-pointer flex items-center justify-center gap-2"
            >
              <PackageCheck className="w-4 h-4" />
              <span>Finalizar Pedido com Frete Grátis</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ff60a8]" /> 12 Meses de Garantia
              </span>
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#ff60a8]" /> Rastreamento Correios
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
