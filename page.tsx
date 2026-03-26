"use client";
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

type LangType = 'fr' | 'en' | 'pt';

export default function LoginPage() {
  const [lang, setLang] = useState<LangType>('fr');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const translations = {
    fr: {
      title: "se connecter", emailLabel: "email", emailPlaceholder: "votre@email.com",
      passLabel: "mot de passe", passPlaceholder: "••••••••",
      btn: "connexion", loading: "chargement...",
      footer: "pas encore de compte ?", signupLink: "s'inscrire",
      error: "erreur : identifiants invalides."
    },
    en: {
      title: "login", emailLabel: "email", emailPlaceholder: "your@email.com",
      passLabel: "password", passPlaceholder: "••••••••",
      btn: "login", loading: "loading...",
      footer: "no account yet ?", signupLink: "sign up",
      error: "error: invalid credentials."
    },
    pt: {
      title: "entrar", emailLabel: "email", emailPlaceholder: "seu@email.com",
      passLabel: "senha", passPlaceholder: "••••••••",
      btn: "entrar", loading: "carregando...",
      footer: "não tem uma conta ?", signupLink: "cadastrar",
      error: "erro: credenciais inválidas."
    }
  };

  const t = translations[lang];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(t.error);
    } else {
      // Redirection vers le dashboard après connexion réussie
      router.push('/dashboard');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#87CEEB] to-[#008080] flex items-center justify-center p-6 font-sans">
      <div className="bg-white/20 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl border border-white/30 w-full max-w-md">
        
        {/* SÉLECTEUR DE LANGUE (Ajout de type="button" pour éviter les bugs) */}
        <div className="flex justify-center gap-2 mb-8 bg-white/10 p-1 rounded-xl w-fit mx-auto border border-white/10">
          {(['fr', 'en', 'pt'] as LangType[]).map((l) => (
            <button 
              key={l} 
              type="button"
              onClick={() => setLang(l)} 
              className={`text-[10px] px-3 py-1 rounded-lg transition font-black ${lang === l ? 'bg-white shadow-sm text-blue-950' : 'opacity-40 text-blue-950'}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <h1 className="text-4xl font-black text-blue-950 mb-8 text-center uppercase tracking-tighter italic">{t.title}</h1>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-blue-950 mb-2 opacity-60 italic">{t.emailLabel}</label>
            <input 
              type="email" 
              placeholder={t.emailPlaceholder} 
              className="w-full bg-white/40 border border-white/20 p-4 rounded-2xl focus:outline-none focus:bg-white/60 transition italic font-medium" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-blue-950 mb-2 opacity-60 italic">{t.passLabel}</label>
            <input 
              type="password" 
              placeholder={t.passPlaceholder} 
              className="w-full bg-white/40 border border-white/20 p-4 rounded-2xl focus:outline-none focus:bg-white/60 transition italic font-medium" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className="w-full bg-blue-950 text-white font-bold py-5 rounded-[2rem] shadow-xl hover:bg-blue-900 hover:scale-105 transition-all text-lg tracking-widest lowercase"
          >
            {loading ? t.loading : t.btn}
          </button>

          {message && <p className="text-center text-sm font-black text-red-900 italic mt-4 bg-white/30 p-3 rounded-xl">{message}</p>}
        </form>
        
        <p className="mt-8 text-center text-xs font-bold text-blue-950 opacity-60 italic">
          {t.footer} <a href="/signup" className="underline not-italic font-black text-blue-950">{t.signupLink}</a>
        </p>

        {/* Bouton de retour à l'accueil pour éviter d'être bloqué */}
        <div className="mt-6 text-center">
            <a href="/" className="text-[10px] font-black uppercase opacity-30 hover:opacity-100 transition-opacity">retour à l'accueil</a>
        </div>
      </div>
    </div>
  );
}

