"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    {
      number: "01",
      title: "Nasza historia",
      description: "Od pierwszego spotkania do tego dnia",
      href: "/historia",
    },
    {
      number: "02",
      title: "Dzień ślubu",
      description: "Najważniejsze informacje i harmonogram",
      href: "#",
    },
    {
      number: "03",
      title: "Dla gości",
      description: "Wszystko, co warto wiedzieć",
      href: "#",
    },
    {
      number: "04",
      title: "Galeria",
      description: "Wspólne chwile uchwycone w kadrze",
      href: "#",
    },
    {
      number: "05",
      title: "Życzenia",
      description: "Zostaw nam kilka słów od siebie",
      href: "#",
    },
    {
      number: "06",
      title: "Księga gości",
      description: "Wasze wpisy, wspomnienia i wiadomości",
      href: "#",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#102d26] text-[#f7f3e9]">

      {/* TŁO */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#c7a35b]/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-[#d8d0bb]/10 blur-[140px]" />
      </div>

      {/* RAMKA */}
      <div className="pointer-events-none fixed inset-4 z-40 border border-[#c9aa68]/30 md:inset-7" />

      {/* STRONA GŁÓWNA */}
      <section className="relative flex min-h-screen items-center justify-center px-6 py-20">

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">

          {/* TOP */}
          <div
            className={`mb-12 flex items-center gap-5 transition-all duration-1000 ${
              loaded
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
          >
            <span className="h-px w-16 bg-[#c9aa68]/70 md:w-28" />

            <span className="text-[10px] uppercase tracking-[0.5em] text-[#d9c28d]">
              Nasza historia
            </span>

            <span className="h-px w-16 bg-[#c9aa68]/70 md:w-28" />
          </div>

          {/* DATA */}
          <p
            className={`mb-7 text-xs uppercase tracking-[0.55em] text-[#d8d0bb]/70 transition-all delay-200 duration-1000 ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            28 sierpnia 2027
          </p>

          {/* IMIONA */}
          <div className="relative">

            <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9aa68]/10 blur-[80px]" />

            <h1
              className={`font-serif text-[4.5rem] font-light leading-[0.8] tracking-[-0.04em] text-[#f7f3e9] transition-all duration-[1400ms] md:text-[9rem] lg:text-[11rem] ${
                loaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              Natalia
            </h1>

            <div
              className={`my-6 flex items-center justify-center gap-4 transition-all delay-500 duration-1000 ${
                loaded ? "scale-100 opacity-100" : "scale-50 opacity-0"
              }`}
            >
              <span className="h-px w-10 bg-[#c9aa68]" />

              <span className="font-serif text-4xl italic text-[#d3b56f] md:text-5xl">
                &amp;
              </span>

              <span className="h-px w-10 bg-[#c9aa68]" />
            </div>

            <h1
              className={`font-serif text-[4.5rem] font-light leading-[0.8] tracking-[-0.04em] text-[#f7f3e9] transition-all duration-[1400ms] ${
                loaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              Radosław
            </h1>
          </div>

          {/* ORNAMENT */}
          <div
            className={`my-12 transition-all delay-700 duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-20 bg-[#c9aa68]/50" />

              <span className="text-[#d3b56f]">✦</span>

              <span className="text-xs uppercase tracking-[0.35em] text-[#d8d0bb]/70">
                Rybnik
              </span>

              <span className="text-[#d3b56f]">✦</span>

              <span className="h-px w-20 bg-[#c9aa68]/50" />
            </div>
          </div>

          {/* TEKST */}
          <p
            className={`max-w-xl font-serif text-lg font-light leading-8 text-[#e4dfd3]/80 transition-all delay-1000 duration-1000 md:text-xl ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Dwa serca.
            <br />
            Jedna historia.
            <br />
            <span className="italic text-[#d3b56f]">
              I początek wszystkiego, co przed nami.
            </span>
          </p>

          {/* PRZYCISK */}
          <div
            className={`mt-12 transition-all delay-[1200ms] duration-1000 ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <button
              onClick={() => setMenuOpen(true)}
              className="group relative overflow-hidden border border-[#c9aa68]/70 px-10 py-4 text-[10px] uppercase tracking-[0.4em] text-[#f7f3e9] transition-all duration-500 hover:border-[#d8bd78]"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#c9aa68] transition-transform duration-500 group-hover:translate-x-0" />

              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#102d26]">
                Odkryj naszą historię
              </span>
            </button>
          </div>

          {/* DATA NA DOLE */}
          <div
            className={`mt-20 transition-all delay-[1400ms] duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#d8d0bb]/40">
              28 · 08 · 2027
            </p>
          </div>
        </div>

        {/* DEKORACJE */}
        <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 md:block">
          <div className="relative h-[420px] w-[180px]">
            <div className="absolute left-0 top-20 h-56 w-56 rounded-full border border-[#c9aa68]/10" />
            <div className="absolute left-10 top-32 h-36 w-36 rounded-full border border-[#c9aa68]/10" />
            <div className="absolute left-14 top-10 h-80 w-px rotate-[18deg] bg-gradient-to-b from-transparent via-[#c9aa68]/40 to-transparent" />
          </div>
        </div>

        <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 md:block">
          <div className="relative h-[420px] w-[180px]">
            <div className="absolute right-0 top-20 h-56 w-56 rounded-full border border-[#c9aa68]/10" />
            <div className="absolute right-10 top-32 h-36 w-36 rounded-full border border-[#c9aa68]/10" />
            <div className="absolute right-14 top-10 h-80 w-px -rotate-[18deg] bg-gradient-to-b from-transparent via-[#c9aa68]/40 to-transparent" />
          </div>
        </div>

        {/* DÓŁ */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap">
          <p className="text-[8px] uppercase tracking-[0.45em] text-[#d8d0bb]/40">
            With love · Natalia &amp; Radosław
          </p>
        </div>
      </section>

      {/* MENU */}
      <div
        className={`fixed inset-0 z-50 overflow-y-auto bg-[#102d26] transition-all duration-700 ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >

        {/* ZŁOTE ŚWIATŁO */}
        <div className="pointer-events-none fixed left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9aa68]/5 blur-[130px]" />

        {/* RAMKA */}
        <div className="pointer-events-none fixed inset-4 border border-[#c9aa68]/30 md:inset-7" />

        {/* ZAMKNIĘCIE */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute right-10 top-9 z-20 flex items-center gap-3 text-[#d8d0bb]/70 transition hover:text-white"
        >
          <span className="text-[9px] uppercase tracking-[0.35em]">
            Zamknij
          </span>

          <span className="text-2xl font-light">×</span>
        </button>

        {/* MENU CONTENT */}
        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-8 py-28 md:px-16">

          {/* HEADER */}
          <div className="mb-20">
            <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#c9aa68]">
              Natalia &amp; Radosław
            </p>

            <h2 className="font-serif text-5xl font-light text-[#f7f3e9] md:text-7xl">
              Witajcie
            </h2>

            <p className="mt-5 max-w-lg font-serif text-lg italic leading-8 text-[#d8d0bb]/60">
              Miło nam, że jesteście częścią naszej historii.
            </p>
          </div>

          {/* POZYCJE */}
          <div className="grid border-t border-[#c9aa68]/20 md:grid-cols-2">

            {menuItems.map((item, index) => (

              item.href === "#" ? (

                <button
                  key={item.number}
                  type="button"
                  className="group relative border-b border-[#c9aa68]/20 py-8 text-left transition-all duration-500 hover:bg-[#c9aa68]/5 md:px-6 md:py-10"
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                >
                  <div className="flex items-start gap-6">

                    <span className="pt-1 font-mono text-[10px] tracking-widest text-[#c9aa68]/60">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="font-serif text-3xl font-light text-[#f7f3e9] transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-sm text-xs uppercase tracking-[0.15em] text-[#d8d0bb]/40">
                        {item.description}
                      </p>
                    </div>

                    <span className="ml-auto pt-1 text-xl text-[#c9aa68]/40 transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#c9aa68]">
                      →
                    </span>

                  </div>
                </button>

              ) : (

                <Link
                  key={item.number}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="group relative border-b border-[#c9aa68]/20 py-8 text-left transition-all duration-500 hover:bg-[#c9aa68]/5 md:px-6 md:py-10"
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                >
                  <div className="flex items-start gap-6">

                    <span className="pt-1 font-mono text-[10px] tracking-widest text-[#c9aa68]/60">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="font-serif text-3xl font-light text-[#f7f3e9] transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-sm text-xs uppercase tracking-[0.15em] text-[#d8d0bb]/40">
                        {item.description}
                      </p>
                    </div>

                    <span className="ml-auto pt-1 text-xl text-[#c9aa68]/40 transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#c9aa68]">
                      →
                    </span>

                  </div>
                </Link>

              )

            ))}

          </div>

          {/* STOPKA */}
          <div className="mt-auto pt-20 text-center">
            <div className="mx-auto mb-6 h-px w-20 bg-[#c9aa68]/40" />

            <p className="text-[9px] uppercase tracking-[0.5em] text-[#d8d0bb]/30">
              28 · 08 · 2027
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}