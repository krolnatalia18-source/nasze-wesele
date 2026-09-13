"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    number: "01",
    title: "Nasza historia",
    href: "/historia",
    symbol: "♡",
  },
  {
    number: "02",
    title: "Dzień ślubu",
    href: "/dzien-slubu",
    symbol: "✦",
  },
  {
    number: "03",
    title: "Dla gości",
    href: "/dla-gosci",
    symbol: "⌂",
  },
  {
    number: "04",
    title: "Galeria",
    href: "/galeria",
    symbol: "◫",
  },
  {
    number: "05",
    title: "Życzenia",
    href: "/zyczenia",
    symbol: "✉",
  },
  {
    number: "06",
    title: "Księga gości",
    href: "/ksiega-gosci",
    symbol: "✎",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const openPage = (href: string) => {
    setMenuOpen(false);
    router.push(href);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#102d26] text-[#f7f3e9]">

      {/* ZŁOTE ŚWIATŁO */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[43%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9aa68]/5 blur-[170px]" />
      </div>

      {/* RAMKA */}
      <div className="pointer-events-none fixed inset-4 z-50 border border-[#d3b56f]/30 md:inset-6" />

      {/* STRONA GŁÓWNA */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">

        <p className="font-serif text-base font-light uppercase tracking-[0.28em] text-[#d3b56f] sm:text-lg md:text-xl">
          Save the date
        </p>

        <div className="mx-auto mt-7 h-px w-16 bg-[#d3b56f]/45" />

        <h1 className="mt-11 whitespace-nowrap font-serif text-[2.5rem] font-extralight leading-none tracking-[-0.04em] text-[#f7f3e9] sm:text-5xl md:text-7xl lg:text-[5.5rem]">
          Natalia
          <span className="mx-3 font-serif text-[0.72em] font-light italic text-[#d3b56f] sm:mx-5 md:mx-7">
            &amp;
          </span>
          Radosław
        </h1>

        <div className="mt-10 flex items-center gap-4">
          <span className="h-px w-10 bg-[#d3b56f]/25 md:w-16" />
          <span className="text-[9px] text-[#d3b56f]/70">✦</span>
          <span className="h-px w-10 bg-[#d3b56f]/25 md:w-16" />
        </div>

        <div className="mt-9 flex items-center justify-center gap-5 md:gap-8">

          <span className="hidden h-px w-12 bg-[#d3b56f]/30 sm:block md:w-20" />

          <p className="whitespace-nowrap font-serif text-base font-light tracking-[0.28em] text-[#d3b56f] sm:text-lg md:text-xl">
            28 · 08 · 2027
          </p>

          <span className="hidden h-px w-12 bg-[#d3b56f]/30 sm:block md:w-20" />

        </div>

        <p className="mt-10 max-w-xl font-serif text-lg font-light italic leading-8 text-[#d8d0bb]/70 md:text-xl">
          Będzie nam ogromnie miło przeżyć ten wyjątkowy dzień razem z Wami.
        </p>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="group relative mt-11 overflow-hidden border border-[#c9aa68]/70 px-10 py-4 text-[9px] uppercase tracking-[0.4em] text-[#f7f3e9] transition-all duration-500 hover:border-[#d8bd78]"
        >
          <span className="absolute inset-0 -translate-x-full bg-[#c9aa68] transition-transform duration-500 group-hover:translate-x-0" />

          <span className="relative z-10 transition-colors duration-500 group-hover:text-[#102d26]">
            Odkryj więcej
          </span>
        </button>

      </section>

      {/* MENU KAFELKOWE */}
      <div
        className={`fixed inset-0 z-[100] overflow-y-auto bg-[#102d26] transition-all duration-700 ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >

        {/* ŚWIATŁO */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">

          <div className="absolute left-[-15%] top-[-10%] h-[650px] w-[650px] rounded-full bg-[#c9aa68]/5 blur-[150px]" />

          <div className="absolute bottom-[-20%] right-[-15%] h-[650px] w-[650px] rounded-full bg-[#d3b56f]/5 blur-[150px]" />

        </div>

        {/* RAMKA */}
        <div className="pointer-events-none fixed inset-4 border border-[#d3b56f]/30 md:inset-6" />

        {/* ZAMKNIJ */}
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="fixed right-10 top-10 z-30 flex items-center gap-3 text-[9px] uppercase tracking-[0.35em] text-[#d3b56f]/80 transition hover:text-[#f7f3e9] md:right-16 md:top-14"
        >
          <span>Zamknij</span>
          <span className="text-xl font-light">×</span>
        </button>

        {/* ZAWARTOŚĆ */}
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-8 py-28">

          <div className="mb-12 text-center">

            <p className="text-[9px] uppercase tracking-[0.55em] text-[#d3b56f]">
              Natalia &amp; Radosław
            </p>

            <h2 className="mt-5 font-serif text-4xl font-light italic md:text-5xl">
              Nasz dzień
            </h2>

            <div className="mx-auto mt-7 h-px w-12 bg-[#d3b56f]/50" />

          </div>

          {/* KAFELKI */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            {menuItems.map((item) => (
              <button
                key={item.number}
                type="button"
                onClick={() => openPage(item.href)}
                className="group relative min-h-[150px] overflow-hidden border border-[#d3b56f]/25 bg-[#f7f3e9]/[0.015] p-7 text-left transition-all duration-500 hover:-translate-y-1 hover:border-[#d3b56f]/65 hover:bg-[#d3b56f]/[0.04]"
              >

                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d3b56f]/0 blur-3xl transition-all duration-500 group-hover:bg-[#d3b56f]/10" />

                <div className="relative z-10 flex h-full flex-col justify-between">

                  <div className="flex items-start justify-between">

                    <span className="text-[9px] tracking-[0.3em] text-[#d3b56f]/45">
                      {item.number}
                    </span>

                    <span className="font-serif text-2xl font-light text-[#d3b56f]/60 transition-all duration-500 group-hover:scale-110 group-hover:text-[#d3b56f]">
                      {item.symbol}
                    </span>

                  </div>

                  <div className="mt-10 flex items-end justify-between gap-4">

                    <h3 className="font-serif text-2xl font-light text-[#f7f3e9] transition-colors duration-300 group-hover:text-[#d3b56f] md:text-3xl">
                      {item.title}
                    </h3>

                    <span className="mb-1 text-lg text-[#d3b56f]/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#d3b56f]">
                      →
                    </span>

                  </div>

                </div>

              </button>
            ))}

          </div>

          <div className="mt-12 text-center">

            <div className="mx-auto mb-6 h-px w-12 bg-[#d3b56f]/30" />

            <p className="font-serif text-sm tracking-[0.25em] text-[#d3b56f]/50">
              28 · 08 · 2027
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}