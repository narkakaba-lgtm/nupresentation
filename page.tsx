"use client";
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

type LangType = 'fr' | 'en' | 'pt';

export default function SignupPage() {
  const [lang, setLang] = useState<LangType>('fr');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const translations = {
    fr: {
      title: "s'inscrire", nameLabel: "nom complet", namePlaceholder: "votre nom",
      emailLabel: "email", emailPlaceholder: "votre@email.com",
      passLabel: "mot de passe", passPlaceholder: "••••••••",
      btn: "créer mon compte", loading: "chargement...",
      footer: "déjà un compte ?", loginLink: "se connecter",
      success: "succès ! vérifie tes e-mails pour confirmer.",
      error: "erreur : "
    },
    en: {
      title: "sign up", nameLabel: "full name", namePlaceholder: "your name",
      emailLabel: "email", emailPlaceholder: "your@email.com",
      passLabel: "password", passPlaceholder: "••••••••",
      btn: "create my account", loading: "loading...",
      footer: "already have an account ?", loginLink: "login",
      success: "success ! check your emails to confirm.",
      error: "error: "
    },
    pt: {
      title: "cadastrar", nameLabel: "nome completo", namePlaceholder: "seu nome",
      emailLabel: "email", emailPlaceholder: "seu@email.com",
      passLabel: "senha", passPlaceholder: "••••••••",
      btn: "criar minha conta", loading: "carregando...",
      footer: "já tem uma conta ?", loginLink: "entrar",
      success: "sucesso ! verifique seu e-mail para confirmar.",
      error: "erro: "
    }
  };

  const t = translations[lang];

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } }
    });

    if (error) {
      setMessage(t.error + error.message);
    } else {
      setMessage(t.success);
      setTimeout(() => router.push('/login'), 3000);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#87CEEB] to-[#008080] flex items-center justify-center p-6 font-sans">
      <div className="bg-white/20 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl border border-white/30 w-full max-w-md">
        
        {/* SÉLECTEUR DE LANGUE */}
        <div className="flex justify-center gap-2 mb-8 bg-white/10 p-1 rounded-xl w-fit mx-auto border border-white/10">
          {(['fr', 'en', 'pt'] as LangType[]).map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`text-[10px] px-3 py-1 rounded-lg transition font-black ${lang === l ? 'bg-white shadow-sm' : 'opacity-40'}`}>{l.toUpperCase()}</button>
          ))}
        </div>

        <h1 className="text-4xl font-black text-blue-950 mb-8 text-center uppercase tracking-tighter">{t.title}</h1>
        
        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-blue-950 mb-2 opacity-60 italic">{t.nameLabel}</label>
            <input type="text" placeholder={t.namePlaceholder} className="w-full bg-white/40 border border-white/20 p-4 rounded-2xl focus:outline-none focus:bg-white/60 transition italic font-medium" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-blue-950 mb-2 opacity-60 italic">{t.emailLabel}</label>
            <input type="email" placeholder={t.emailPlaceholder} className="w-full bg-white/40 border border-white/20 p-4 rounded-2xl focus:outline-none focus:bg-white/60 transition italic font-medium" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-blue-950 mb-2 opacity-60 italic">{t.passLabel}</label>
            <input type="password" placeholder={t.passPlaceholder} className="w-full bg-white/40 border border-white/20 p-4 rounded-2xl focus:outline-none focus:bg-white/60 transition italic font-medium" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button type="submit" disabled={loading} className="w-full bg-blue-950 text-white font-bold py-5 rounded-[2rem] shadow-xl hover:bg-blue-900 transition-all text-lg tracking-widest lowercase">
            {loading ? t.loading : t.btn}
          </button>

          {message && <p className="text-center text-sm font-black text-blue-950 italic mt-4 bg-white/30 p-3 rounded-xl">{message}</p>}
        </form>
        
        <p className="mt-8 text-center text-xs font-bold text-blue-950 opacity-60 italic">
          {t.footer} <a href="/login" className="underline not-italic font-black">{t.loginLink}</a>
        </p>
      </div>
    </div>
  );
}

