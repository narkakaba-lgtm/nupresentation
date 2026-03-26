"use client";
import React, { useState } from 'react';

type LangType = 'fr' | 'en' | 'pt';

export default function Page() {
  const [lang, setLang] = useState<LangType>('fr');
  const contactEmail = "info@nupresentation.org";

  const translations = {
    fr: {
      login: "connexion", signup: "s'inscrire",
      heroTitle: "Devenez", heroSpan: "More Aware",
      heroSlogan: "une plateforme structurée pour briser les taplines et explorer ce qui est invisssible : la reall*awarenisss.",
      explore: "explorer les nu-books", access: "accéder",
      aboutTitle: "À PROPOS DE NUPRÉSENTATION SERVICE INTERNATIONAL",
      aboutP1: "nuprésentation est une plateforme service international à l’éveil de la awarenisss, à la découverte de yu et au développement d’une perception plus grande de la réalllité.",
      aboutP2: "nuprésentation a pour mission d’aider chaque individu à devenir moreaware & autonome intérieurement.",
      aboutP3: "nuprésentation s’adresse à toute personne qui cherche une expérience directe, personnelle et realll de la réallité.",
      infoHero: "pour plus d'informations, contactez :",
      about: "à propos", privacy: "confidentialité", help: "aide", contact: "contacter",
      copyright: "© 2024 Nuprésentation. Tous droits réservés."
    },
    en: {
      login: "login", signup: "sign up",
      heroTitle: "Become", heroSpan: "More Aware",
      heroSlogan: "a structured platform to break taplines and explore what is invisssible: the reall*awarenisss.",
      explore: "explore nu-books", access: "access",
      aboutTitle: "ABOUT NUPRESENTATION INTERNATIONAL SERVICE",
      aboutP1: "nupresentation is an international service platform for the awakening of awarenisss and discovery of yu.",
      aboutP2: "nupresentation's mission is to help each individual become moreaware & autonomous internally.",
      aboutP3: "nupresentation is for anyone seeking a direct, personal and realll experience of reallity.",
      infoHero: "for more information, contact:",
      about: "about", privacy: "privacy", help: "help", contact: "contact",
      copyright: "© 2024 Nupresentation. All rights reserved."
    },
    pt: {
      login: "entrar", signup: "cadastrar",
      heroTitle: "Torne-se", heroSpan: "More Aware",
      heroSlogan: "uma plateforme estruturada para quebrar as taplines e explorar o que é invisssível: a reall*awarenisss.",
      explore: "explorar os nu-books", access: "acessar",
      aboutTitle: "SOBRE A NUPRESENTATION SERVIÇO INTERNACIONAL",
      aboutP1: "a nupresentation é uma plateforme de serviço internacional para o despertar da awarenisss.",
      aboutP2: "a missão da nupresentation é ajudar cada indivíduo a tornar-se moreaware e autônomo internamente.",
      aboutP3: "a nupresentation destina-se a quem procura uma expérience direta e realll da reallidade.",
      infoHero: "para mais informações, contate:",
      about: "sobre", privacy: "privacidade", help: "ajuda", contact: "contatar",
      copyright: "© 2024 Nupresentation. Todos os direitos reservados."
    }
  };

  const t = translations[lang];

  const books = [
    { id: 1, title: "NU-Book 1", img: "https://postimg.cc", price: "25$", desc: { fr: "du hier à aujourd'hui", en: "from yesterday to today", pt: "de ontem para hoje" } },
    { id: 2, title: "NU-Book 2", img: "https://postimg.cc", price: "25$", desc: { fr: "les étapes pour s'éveiller", en: "steps to awaken", pt: "passos para despertar" } },
    { id: 3, title: "NU-Book 3", img: "https://postimg.cc", price: "25$", desc: { fr: "le véritable pays lointain", en: "the true distant country", pt: "o verdadeiro pays distante" } },
    { id: 4, title: "NU-Book 4", img: "https://postimg.cc", price: "25$", desc: { fr: "aventures de duane et rebisar", en: "adventures of duane and rebisar", pt: "aventuras de duane e rebisar" } },
    { id: 5, title: "NU-Book 5", img: "https://postimg.cc", price: "25$", desc: { fr: "tes visions de rêves", en: "your dream visions", pt: "suas visões de sonhos" } },
    { id: 6, title: "NU-Book 6", img: "https://postimg.cc", price: "25$", desc: { fr: "les mystères des rêves", en: "the mysteries of dreams", pt: "os mistérios dos sonhos" } },
    { id: 7, title: "NU-Book 7", img: "https://postimg.cc", price: "25$", desc: { fr: "rebisar et les guides dorés", en: "rebisar and the golden guides", pt: "rebisar e os guias dourados" } },
    { id: 8, title: "NU-Book 8", img: "https://postimg.cc", price: "25$", desc: { fr: "l'île au ciel bleu", en: "the blue sky island", pt: "a ilha do céu azul" } },
    { id: 9, title: "NU-Book 9", img: "https://postimg.cc", price: "25$", desc: { fr: "histoire de rebisar et pall", en: "story of rebisar and pall", pt: "história de rebisar e pall" } }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#87CEEB] via-[#00BFFF] to-[#008080] text-slate-900 font-sans scroll-smooth">
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-white/40 backdrop-blur-xl border-b border-white/40 py-2 px-6 shadow-sm flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo-gold.jpg" alt="Logo" className="h-10 w-auto" />
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-1 bg-white/30 p-1 rounded-xl border border-white/20">
            {(['fr', 'en', 'pt'] as LangType[]).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`text-xs px-2 py-1 rounded-lg transition ${lang === l ? 'bg-white font-bold shadow-sm' : 'opacity-40'}`}>{l.toUpperCase()}</button>
            ))}
          </div>
          <div className="flex gap-2 text-[10px] font-bold">
            <a href="/login" className="text-blue-950 px-3 py-2 rounded-lg hover:bg-white/20 transition lowercase">{t.login}</a>
            <a href="/signup" className="bg-blue-950 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-900 transition lowercase">{t.signup}</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="pt-48 pb-32 px-6 text-center max-w-6xl mx-auto">
        <div className="flex justify-center mb-14">
          <img src="/logo-light.jpg" alt="Hero Logo" className="w-[300px] md:w-[400px] h-auto drop-shadow-2xl animate-pulse" />
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-blue-950 mb-8 tracking-tighter uppercase leading-none">
          {t.heroTitle} <span className="italic text-white underline decoration-white/30">{t.heroSpan}</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-blue-950/80 mb-12 max-w-3xl mx-auto italic leading-tight">
          {t.heroSlogan}
        </p>
        <a href="#books" className="bg-blue-950 text-white px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block lowercase tracking-widest">
          {t.explore}
        </a>
      </header>

      {/* BOOKS SECTION */}
      <section id="books" className="max-w-7xl mx-auto py-20 px-6 scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {books.map((book) => (
            <div key={book.id} className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-[3rem] p-4 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="h-[450px] overflow-hidden rounded-[2.5rem] relative bg-blue-100">
                {/* LA BALISE IMG EN MINUSCULE POUR QUE ÇA MARCHE ENFIN */}
                <img 
                  src={book.img} 
                  alt={book.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white font-bold text-3xl drop-shadow-lg italic">{book.title}</div>
              </div>
              <div className="p-6 text-center">
                <p className="text-blue-900 font-medium mb-4 italic h-12 flex items-center justify-center">{book.desc[lang]}</p>
                <button className="bg-blue-950 text-white px-8 py-3 rounded-full font-bold transition hover:bg-blue-900 shadow-md">
                   {book.price} - {t.access}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white/10 py-24 px-6 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-blue-950 mb-10 tracking-tighter">{t.aboutTitle}</h2>
          <div className="space-y-8 text-xl text-blue-950/80 leading-relaxed italic">
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <p>{t.aboutP3}</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 bg-blue-950 text-white/80">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-widest opacity-60 mb-3">{t.infoHero}</p>
            <a href={`mailto:${contactEmail}`} className="text-2xl font-black hover:text-white transition decoration-white/30 underline underline-offset-8">{contactEmail}</a>
          </div>
          
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition">{t.about}</a>
            <a href="#" className="hover:text-white transition">{t.privacy}</a>
            <a href="#" className="hover:text-white transition">{t.help}</a>
          </div>
        </div>
        <div className="text-center mt-16 text-[10px] opacity-40 uppercase tracking-[0.4em]">
          {t.copyright}
        </div>
      </footer>
    </div>
  );
}

