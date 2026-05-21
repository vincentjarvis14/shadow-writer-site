"use client";

import { useState, useEffect } from "react";
import {
  PenLine,
  BookOpen,
  MessageSquare,
  Globe,
  Quote,
  ChevronRight,
  Star,
  ArrowUpRight,
  Menu,
  X,
  Send,
  CheckCircle,
  Sparkles,
  Eye,
  FileText,
  Users,
} from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const isVisible = (id: string) => visibleSections.includes(id);

  const services = [
    {
      icon: BookOpen,
      title: "Livres & Romans",
      desc: "De l'idée au manuscrit final, je façonne votre récit avec la plume d'un artisan.",
    },
    {
      icon: FileText,
      title: "Articles & Blog",
      desc: "Des contenus percutants qui captivent votre audience et renforcent votre autorité.",
    },
    {
      icon: MessageSquare,
      title: "Discours & Prises de Parole",
      desc: "Des mots qui marquent les esprits et laissent une empreinte durable.",
    },
    {
      icon: Globe,
      title: "Contenu Web & SEO",
      desc: "Des textes optimisés qui allient qualité littéraire et performance digitale.",
    },
    {
      icon: PenLine,
      title: "Correspondance & Lettres",
      desc: "L'art perdu de la lettre, réinventé pour vos communications les plus précieuses.",
    },
    {
      icon: Eye,
      title: "Relecture & Correction",
      desc: "Un regard neuf et expert pour polir vos textes jusqu'à la perfection.",
    },
  ];

  const testimonials = [
    {
      text: "Vincent a su capturer ma voix mieux que je n'aurais pu le faire moi-même. Un véritable artisan des mots.",
      author: "Sophie L.",
      role: "Chef d'entreprise",
    },
    {
      text: "Mon livre n'aurait jamais vu le jour sans son talent. Il a transformé mes idées en une œuvre dont je suis fier.",
      author: "Marc D.",
      role: "Consultant & Auteur",
    },
    {
      text: "Une discrétion absolue et une qualité d'écriture exceptionnelle. Je recommande les yeux fermés.",
      author: "Claire M.",
      role: "Influenceuse & Créatrice",
    },
  ];

  const stats = [
    { value: "50+", label: "Projets réalisés" },
    { value: "15+", label: "Auteurs accompagnés" },
    { value: "100%", label: "Discret & Confidentiel" },
    { value: "4.9/5", label: "Satisfaction client" },
  ];

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* ===== NAVBAR ===== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark-900/95 backdrop-blur-xl border-b border-gold-500/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:border-gold-500/60 transition-all duration-300">
              <PenLine className="w-5 h-5 text-gold-500" />
            </div>
            <span className="text-lg font-semibold tracking-wider text-silver-100">
              SHADOW<span className="text-gold-500">WRITER</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["services", "realisations", "a-propos", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm tracking-widest uppercase text-silver-400 hover:text-gold-500 transition-all duration-300 relative group"
              >
                {item === "realisations" ? "Réalisations" : item === "a-propos" ? "À propos" : item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 border border-gold-500/40 text-gold-500 text-sm tracking-widest uppercase hover:bg-gold-500/10 transition-all duration-300 rounded-sm"
            >
              Collaborer
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-silver-200 hover:text-gold-500 transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-400 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6 space-y-4 bg-dark-800/95 backdrop-blur-xl border-b border-gold-500/10">
            {["services", "realisations", "a-propos", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-sm tracking-widest uppercase text-silver-400 hover:text-gold-500 transition-colors py-2"
              >
                {item === "realisations" ? "Réalisations" : item === "a-propos" ? "À propos" : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full px-6 py-3 border border-gold-500/40 text-gold-500 text-sm tracking-widest uppercase hover:bg-gold-500/10 transition-all duration-300 rounded-sm text-center"
            >
              Collaborer
            </button>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-500/3 rounded-full blur-[100px] animate-float stagger-2" />

        {/* Decorative Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold-500/20 rounded-full text-xs tracking-widest uppercase text-gold-400 mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Écrivain fantôme premium
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 animate-fade-in-up">
            <span className="text-silver-100">L&apos;Art du Mot</span>
            <br />
            <span className="text-gradient-gold">dans l&apos;Ombre</span>
          </h1>

          <p className="text-lg md:text-xl text-silver-400 max-w-2xl mx-auto mb-12 animate-fade-in-up stagger-3 leading-relaxed">
            Vos idées méritent d&apos;être racontées. Je les habille de mots
            choisis avec soin, pour que votre voix résonne — sans que la mienne
            ne se voie.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-4">
            <button
              onClick={() => scrollToSection("services")}
              className="group px-8 py-4 bg-gold-500/10 border border-gold-500/40 text-gold-500 hover:bg-gold-500/20 transition-all duration-300 rounded-sm text-sm tracking-widest uppercase flex items-center gap-2"
            >
              Découvrir mes services
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group px-8 py-4 border border-silver-400/20 text-silver-300 hover:border-silver-400/40 hover:text-silver-100 transition-all duration-300 rounded-sm text-sm tracking-widest uppercase flex items-center gap-2"
            >
              Me contacter
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
            <div className="w-6 h-10 rounded-full border border-gold-500/20 flex items-start justify-center p-1.5">
              <div className="w-1 h-3 bg-gold-500/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="relative py-20 border-t border-gold-500/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-light text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-xs tracking-widest uppercase text-silver-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section
        id="services"
        data-animate
        className={`relative py-32 transition-all duration-700 ${
          isVisible("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4 block">
              Ce que je propose
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-silver-100 mb-6">
              Des mots qui vous
              <span className="text-gradient-gold"> ressemblent</span>
            </h2>
            <p className="text-silver-400 max-w-2xl mx-auto leading-relaxed">
              Chaque projet est unique. Je m&apos;imprègne de votre univers pour
              créer des textes qui portent votre signature, pas la mienne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-600/30">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="group relative bg-dark-800/50 p-8 hover:bg-dark-700/50 transition-all duration-500"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-gold-500/0 to-gold-500/0 group-hover:from-gold-500/[0.02] group-hover:via-gold-500/[0.01] group-hover:to-gold-500/0 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center mb-6 group-hover:border-gold-500/40 group-hover:bg-gold-500/5 transition-all duration-300">
                    <service.icon className="w-5 h-5 text-gold-500" />
                  </div>
                  <h3 className="text-lg font-medium text-silver-100 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-silver-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section
        id="realisations"
        data-animate
        className={`relative py-32 transition-all duration-700 ${
          isVisible("realisations") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4 block">
              Témoignages
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-silver-100 mb-6">
              Ce qu&apos;ils disent de
              <span className="text-gradient-gold"> mon travail</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative p-8 border border-dark-600/50 hover:border-gold-500/20 transition-all duration-500 group"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <Quote className="w-8 h-8 text-gold-500/20 mb-6" />
                <p className="text-silver-300 leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center">
                    <span className="text-xs font-medium text-gold-500">
                      {t.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-silver-200">
                      {t.author}
                    </div>
                    <div className="text-xs text-silver-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section
        id="a-propos"
        data-animate
        className={`relative py-32 transition-all duration-700 ${
          isVisible("a-propos") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4 block">
                Qui suis-je
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-silver-100 mb-8">
                L&apos;homme derrière
                <br />
                <span className="text-gradient-gold">la plume</span>
              </h2>

              <div className="space-y-4 text-silver-400 leading-relaxed">
                <p>
                  Depuis plus de 10 ans, je prête ma plume à celles et ceux qui
                  ont des histoires à raconter, des idées à partager, des messages
                  à délivrer.
                </p>
                <p>
                  Mon métier ? Disparaître derrière vos mots. Comprendre votre
                  voix, votre style, votre vision — puis les transcrire avec une
                  fidélité absolue.
                </p>
                <p>
                  Chaque projet est une rencontre, une immersion dans un univers
                  qui n&apos;appartient qu&apos;à vous. Mon rôle est de le rendre
                  tangible, beau, inoubliable.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="w-10 h-10 rounded-full border-2 border-dark-900 bg-dark-700 flex items-center justify-center"
                    >
                      <Star className="w-4 h-4 text-gold-500" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-silver-500">
                  Recommandé par des auteurs exigeants
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden border border-dark-600/50">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <PenLine className="w-16 h-16 text-gold-500/30 mx-auto mb-4" />
                    <p className="text-silver-500 text-sm tracking-widest uppercase">
                      L&apos;art de l&apos;ombre
                    </p>
                  </div>
                </div>
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold-500/30" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold-500/30" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold-500/30" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold-500/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="relative py-32 border-t border-gold-500/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4 block">
              Mon processus
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-silver-100 mb-6">
              De l&apos;idée au
              <span className="text-gradient-gold"> chef-d&apos;œuvre</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Rencontre",
                desc: "On échange pour comprendre votre vision, votre voix et vos attentes.",
              },
              {
                step: "02",
                title: "Immersion",
                desc: "Je m'imprègne de votre univers pour écrire juste et vrai.",
              },
              {
                step: "03",
                title: "Création",
                desc: "J'écris, je peaufine, je réécris jusqu'à la perfection.",
              },
              {
                step: "04",
                title: "Livraison",
                desc: "Vous recevez un texte fini, prêt à être publié — sous votre nom.",
              },
            ].map((step, i) => (
              <div
                key={step.step}
                className="text-center group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-5xl font-light text-gold-500/20 mb-4 group-hover:text-gold-500/40 transition-colors duration-500">
                  {step.step}
                </div>
                <h3 className="text-lg font-medium text-silver-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-silver-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
        id="contact"
        data-animate
        className={`relative py-32 transition-all duration-700 ${
          isVisible("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4 block">
              Travaillons ensemble
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-silver-100 mb-6">
              Donnez vie à
              <span className="text-gradient-gold"> votre projet</span>
            </h2>
            <p className="text-silver-400 max-w-xl mx-auto leading-relaxed">
              Vous avez une idée, un projet, une histoire ? Prenons le temps
              d&apos;en parler. La première conversation est toujours offerte.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative border-t border-gold-500/5 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <PenLine className="w-5 h-5 text-gold-500" />
              <span className="text-sm tracking-wider text-silver-400">
                SHADOW<span className="text-gold-500">WRITER</span>
              </span>
            </div>

            <div className="text-xs text-silver-600 tracking-wider">
              &copy; {new Date().getFullYear()} Shadow Writer. Tous droits réservés.
            </div>

            <div className="flex items-center gap-6 text-xs text-silver-600">
              <span className="tracking-wider">Confidentialité absolue</span>
              <span className="w-px h-4 bg-dark-600" />
              <span className="tracking-wider">Devis sur demande</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez intégrer votre service d'envoi d'emails
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16 animate-scale-in">
        <CheckCircle className="w-16 h-16 text-gold-500 mx-auto mb-6" />
        <h3 className="text-2xl font-light text-silver-100 mb-4">
          Message envoyé
        </h3>
        <p className="text-silver-400">
          Je vous répondrai dans les plus brefs délais. À très vite.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="group">
          <input
            type="text"
            placeholder="Votre nom"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-5 py-4 bg-dark-800/50 border border-dark-600/50 text-silver-200 placeholder:text-silver-600 focus:outline-none focus:border-gold-500/40 focus:bg-dark-800/80 transition-all duration-300 rounded-sm text-sm"
          />
        </div>
        <div className="group">
          <input
            type="email"
            placeholder="Votre email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-5 py-4 bg-dark-800/50 border border-dark-600/50 text-silver-200 placeholder:text-silver-600 focus:outline-none focus:border-gold-500/40 focus:bg-dark-800/80 transition-all duration-300 rounded-sm text-sm"
          />
        </div>
      </div>

      <div className="group">
        <input
          type="text"
          placeholder="Type de projet"
          value={formData.project}
          onChange={(e) => setFormData({ ...formData, project: e.target.value })}
          className="w-full px-5 py-4 bg-dark-800/50 border border-dark-600/50 text-silver-200 placeholder:text-silver-600 focus:outline-none focus:border-gold-500/40 focus:bg-dark-800/80 transition-all duration-300 rounded-sm text-sm"
        />
      </div>

      <div className="group">
        <textarea
          placeholder="Parlez-moi de votre projet..."
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-5 py-4 bg-dark-800/50 border border-dark-600/50 text-silver-200 placeholder:text-silver-600 focus:outline-none focus:border-gold-500/40 focus:bg-dark-800/80 transition-all duration-300 rounded-sm text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full group px-8 py-4 bg-gold-500/10 border border-gold-500/40 text-gold-500 hover:bg-gold-500/20 hover:border-gold-500/60 transition-all duration-300 rounded-sm text-sm tracking-widest uppercase flex items-center justify-center gap-3"
      >
        <Send className="w-4 h-4" />
        Envoyer mon message
      </button>

      <p className="text-center text-xs text-silver-600">
        Votre message restera confidentiel. Aucun spam, jamais.
      </p>
    </form>
  );
}
