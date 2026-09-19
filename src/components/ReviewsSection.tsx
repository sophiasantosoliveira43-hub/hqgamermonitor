import React from 'react';
import { REVIEWS } from '../data/monitorData';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black border-t border-[#26143c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f51a7e]/15 border border-[#f51a7e]/30 text-xs font-bold text-[#ff60a8] mb-4">
            <Star className="w-3.5 h-3.5 fill-[#f51a7e] text-[#f51a7e]" />
            <span>Avaliações de Quem Joga Sério</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
            Aprovado pela <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f51a7e] via-[#ec4899] to-[#9d00f7]">
              Comunidade Gamer & Criadores
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-300">
            Mais de 12.000 setups equipados em todo o Brasil. Nota média 4.9/5.0 estrelas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#0c0817] border border-[#26143c] shadow-xl flex flex-col justify-between hover:border-[#f51a7e]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#ff60a8] bg-[#f51a7e]/15 border border-[#f51a7e]/30 px-2 py-0.5 rounded">
                    {review.game}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#26143c]">
                <img
                  src={review.avatar}
                  alt={review.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-[#f51a7e]/40"
                />
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff60a8]" />
                  </div>
                  <div className="text-xs text-slate-400">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
