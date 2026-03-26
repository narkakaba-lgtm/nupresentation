"use client";
import React, { useState } from 'react';

type LangType = 'fr' | 'en' | 'pt';

export default function DashboardPage() {
  const [lang, setLang] = useState<LangType>('fr');
  const [activeSerie, setActiveSerie] = useState(0); // 0: Risques, 1: Rêves S1, 2: Rêves S2

  const series = [
    { title: "Réalll Preneur de Risssques", episodes: 12 },
    { title: "NUcours de Rêves Série 1", episodes: 12 },
    { title: "NUcours de Rêves Série 2", episodes: 12 }
  ];

  const translations = {
    fr: {
      welcome: "tableau de bord", balance: "montant disponible", withdraw: "retirer les fonds",
      progression: "progression", refLink: "ton lien de partage", access: "accéder",
      locked: "verrouillé", next: "prochain cours dans 24 jours", history: "historique reall*life"
    },
    en: {
      welcome: "dashboard", balance: "available balance", withdraw: "withdraw funds",
      progression: "progression", refLink: "your sharing link", access: "access",
      locked: "locked", next: "next course in 24 days", history: "reall*life history"
    },
    pt: {
      welcome: "painel", balance: "montante disponível", withdraw: "retirar fundos",
      progression: "progressão", refLink: "seu link de partilha", access: "acessar",
      locked: "bloqueado", next: "próximo curso em 24 dias", history: "histórico reall*life"
    }
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#87CEEB] via-[#00BFFF] to-[#008080] text-slate-900 font-sans pb-20">
      
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-xl border-b border-white/40 py-3 px-6 flex justify-between items-center shadow-sm">
        <img src="/logo-gold.jpg" alt="Logo" className="h-10 w-auto" />
        <div className="flex items-center gap-4">
          <div className="flex gap-1 bg-white/30 p-1 rounded-xl border border-white/20">
            {(['fr', 'en', 'pt'] as LangType[]).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`text-[10px] px-2 py-1 rounded-lg transition ${lang === l ? 'bg-blue-950 text-white font-bold' : 'opacity-40'}`}>{l.toUpperCase()}</button>
            ))}
          </div>
          <div className="w-10 h-10 bg-blue-950 rounded-full border-2 border-white"></div>
        </div>
      </nav>

      {/* HEADER STATS & AFFILIATION */}
      <header className="pt-32 px-6 max-w-7xl mx-auto">
        <div className="bg-white/30 backdrop-blur-3xl border border-white/50 rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Progression */}
          <div className="w-full md:w-1/3 space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-blue-950 font-black uppercase tracking-tighter text-xl">{t.progression}</span>
              <span className="text-blue-950 font-bold italic">Mois 1 / 12</span>
            </div>
            <div className="h-4 w-full bg-white/40 rounded-full border border-white/20 overflow-hidden">
              <div className="h-full bg-blue-950 w-[8.33%] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
            </div>
            <p className="text-[10px] font-bold text-blue-900 uppercase opacity-60 tracking-widest">{t.next}</p>
          </div>

          {/* Lien Affiliation */}
          <div className="w-full md:w-1/3 bg-white/40 p-6 rounded-[2rem] border border-white/60 shadow-inner">
            <span className="text-[10px] font-black text-blue-950 uppercase tracking-[0.2em] block mb-2">{t.refLink}</span>
            <div className="flex items-center gap-3">
              <input readOnly value="nupresentation.org/ref/yu789" className="bg-transparent border-none text-blue-950 font-bold text-sm w-full focus:outline-none" />
              <button className="bg-blue-950 text-white px-4 py-2 rounded-xl text-[10px] font-bold shadow-lg hover:scale-105 transition">COPIER</button>
            </div>
          </div>

          {/* Solde & Retrait */}
          <div className="w-full md:w-1/4 text-right">
            <span className="text-[10px] font-black text-blue-950 uppercase tracking-[0.2em] block mb-1">{t.balance}</span>
            <div className="text-6xl font-black text-blue-950 tracking-tighter">150.00 <span className="text-xl">$</span></div>
            <button className="mt-4 w-full bg-blue-950 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-900 transition shadow-xl">{t.withdraw}</button>
          </div>
        </div>
      </header>

      {/* SÉLECTEUR DE SÉRIE */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="flex flex-wrap gap-4 mb-12 border-b border-white/20 pb-8">
          {series.map((s, idx) => (
            <button key={idx} onClick={() => setActiveSerie(idx)} className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl ${activeSerie === idx ? 'bg-blue-950 text-white scale-105' : 'bg-white/40 text-blue-950 hover:bg-white/60'}`}>
              {s.title}
            </button>
          ))}
        </div>

        {/* GRILLE DES 12 ÉPISODES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((ep) => {
            const isLocked = ep > 1; // Un seul cours ouvert par mois
            return (
              <div key={ep} className={`group relative bg-white/30 backdrop-blur-md border border-white/40 rounded-[2.5rem] p-8 transition-all ${isLocked ? 'opacity-50 grayscale' : 'hover:bg-white/50 shadow-2xl hover:-translate-y-2'}`}>
                <div className="absolute top-4 right-8 text-7xl font-black text-blue-950/5 italic">{ep < 10 ? `0${ep}` : ep}</div>
                <div className="relative z-10">
                  <div className="mb-6 text-3xl">{isLocked ? "🔒" : "🔓"}</div>
                  <h4 className="text-2xl font-black text-blue-950 mb-1 uppercase tracking-tighter">Épisode {ep}</h4>
                  <p className="text-[10px] font-bold text-blue-900/60 uppercase tracking-widest mb-8">{isLocked ? t.locked : "Ready to explore"}</p>
                  <button disabled={isLocked} className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition ${isLocked ? 'bg-slate-200 text-slate-400' : 'bg-blue-950 text-white hover:shadow-lg'}`}>
                    {isLocked ? t.locked : t.access}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HISTORIQUE DES TRANSACTIONS */}
      <section className="max-w-7xl mx-auto mt-24 px-6">
        <div className="bg-white/20 backdrop-blur-3xl border border-white/40 rounded-[3.5rem] p-10 shadow-2xl">
          <h3 className="text-3xl font-black text-blue-950 uppercase tracking-tighter italic mb-10">{t.history}</h3>
          <div className="space-y-4">
            {[
              { label: "Achat NU-Cours Mois 1", date: "25 Mars", amount: "- 25.00 $", type: "out" },
              { label: "Bonus Affiliation (Yu10)", date: "20 Mars", amount: "+ 15.00 $", type: "in" }
            ].map((item, i) => (
              <div key={i} className="bg-white/40 p-6 rounded-3xl flex justify-between items-center border border-white/40 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${item.type === 'in' ? 'bg-yellow-400' : 'bg-blue-950 text-white'}`}>{item.type === 'in' ? '✨' : '📖'}</div>
                  <div>
                    <p className="text-lg font-black text-blue-950">{item.label}</p>
                    <p className="text-[10px] font-bold opacity-40 uppercase">{item.date}</p>
                  </div>
                </div>
                <div className={`text-xl font-black ${item.type === 'in' ? 'text-blue-950' : 'text-blue-950/70'}`}>{item.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

