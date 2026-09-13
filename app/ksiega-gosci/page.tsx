import Link from "next/link";

export default function KsiegaGosci() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#102d26] text-[#f7f3e9]">

      {/* DELIKATNE ZŁOTE ŚWIATŁO */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[25%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#c9aa68]/5 blur-[160px]" />
      </div>

      {/* ZŁOTA RAMKA */}
      <div className="pointer-events-none fixed inset-4 z-50 border border-[#d3b56f]/30 md:inset-6" />

      {/* POWRÓT */}
      <Link
        href="/"
        className="fixed left-10 top-10 z-40 flex items-center gap-3 text-[9px] uppercase tracking-[0.35em] text-[#d3b56f]/70 transition hover:text-[#f7f3e9] md:left-16 md:top-14"
      >
        <span>←</span>
        <span>Powrót</span>
      </Link>

      <div className="relative z-10 mx-auto max-w-5xl px-8 pb-28 pt-32 md:pt-36">

        {/* NAGŁÓWEK */}
        <section className="mx-auto max-w-3xl text-center">

          <p className="text-[9px] uppercase tracking-[0.55em] text-[#d3b56f]">
            Natalia &amp; Radosław
          </p>

          <h1 className="mt-6 font-serif text-5xl font-light italic md:text-7xl">
            Księga gości
          </h1>

          <div className="mx-auto mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#d3b56f]/30" />
            <span className="text-[10px] text-[#d3b56f]/70">✦</span>
            <span className="h-px w-12 bg-[#d3b56f]/30" />
          </div>

          <p className="mx-auto mt-9 max-w-2xl font-serif text-lg font-light italic leading-8 text-[#d8d0bb]/70 md:text-xl">
            Zostawcie po sobie mały ślad w naszej historii.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-7 text-[#d8d0bb]/55">
            Kilka słów, wspomnienie, dobra rada albo coś, co po prostu
            chcecie nam powiedzieć. Chcemy móc wrócić tutaj za rok,
            dziesięć i pięćdziesiąt lat.
          </p>

        </section>

        {/* DODAJ WPIS */}
        <section className="mt-16">

          <div className="relative overflow-hidden border border-[#d3b56f]/25 bg-[#f7f3e9]/[0.015] px-7 py-10 text-center md:px-12 md:py-12">

            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-[#d3b56f]/5 blur-3xl" />

            <div className="relative z-10">

              <p className="text-[9px] uppercase tracking-[0.4em] text-[#d3b56f]/65">
                Wasze słowa
              </p>

              <h2 className="mt-5 font-serif text-3xl font-light md:text-4xl">
                Zostaw wpis w naszej księdze
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-7 text-[#d8d0bb]/55">
                Podpiszcie się i napiszcie nam kilka słów od siebie.
                Wasze wpisy zostaną częścią naszej weselnej pamiątki.
              </p>

              <button
                type="button"
                className="group relative mt-8 overflow-hidden border border-[#c9aa68]/70 px-9 py-4 text-[9px] uppercase tracking-[0.35em] text-[#f7f3e9] transition-all duration-500 hover:border-[#d8bd78]"
              >
                <span className="absolute inset-0 -translate-x-full bg-[#c9aa68] transition-transform duration-500 group-hover:translate-x-0" />

                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#102d26]">
                  Dodaj wpis
                </span>
              </button>

            </div>

          </div>

        </section>

        {/* WPISY */}
        <section className="mt-20">

          <div className="text-center">

            <p className="text-[9px] uppercase tracking-[0.45em] text-[#d3b56f]/65">
              Karty naszej historii
            </p>

            <h2 className="mt-5 font-serif text-3xl font-light italic md:text-4xl">
              Zostawione przez Was
            </h2>

            <div className="mx-auto mt-6 h-px w-12 bg-[#d3b56f]/35" />

          </div>

          {/* PRZYKŁADOWE KARTY */}
          <div className="mt-12 grid gap-5 md:grid-cols-2">

            <article className="relative border border-[#d3b56f]/20 bg-[#f7f3e9]/[0.015] p-8 md:p-10">

              <span className="absolute right-7 top-6 font-serif text-4xl text-[#d3b56f]/20">
                “
              </span>

              <p className="font-serif text-lg font-light italic leading-8 text-[#f7f3e9]/80">
                Niech każdy wspólny dzień daje Wam tyle powodów do
                uśmiechu, ile dzisiejszy.
              </p>

              <div className="mt-8 h-px w-10 bg-[#d3b56f]/35" />

              <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-[#d3b56f]/65">
                Przykładowy wpis
              </p>

            </article>

            <article className="relative border border-[#d3b56f]/20 bg-[#f7f3e9]/[0.015] p-8 md:p-10">

              <span className="absolute right-7 top-6 font-serif text-4xl text-[#d3b56f]/20">
                “
              </span>

              <p className="font-serif text-lg font-light italic leading-8 text-[#f7f3e9]/80">
                Kochajcie się, śmiejcie się dużo i nigdy nie przestawajcie
                być dla siebie najlepszymi przyjaciółmi.
              </p>

              <div className="mt-8 h-px w-10 bg-[#d3b56f]/35" />

              <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-[#d3b56f]/65">
                Przykładowy wpis
              </p>

            </article>

          </div>

          <p className="mt-7 text-center text-[10px] font-light italic text-[#d8d0bb]/35">
            Tutaj pojawią się prawdziwe wpisy naszych gości. ♡
          </p>

        </section>

        {/* CZYM RÓŻNI SIĘ OD ŻYCZEŃ */}
        <section className="mt-20 border-y border-[#d3b56f]/15 py-12 text-center">

          <span className="font-serif text-2xl text-[#d3b56f]/60">
            ♡
          </span>

          <h2 className="mt-4 font-serif text-2xl font-light">
            Jedna księga, wiele wspomnień
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-7 text-[#d8d0bb]/55">
            Księga gości będzie naszym wspólnym miejscem pełnym wpisów
            od osób, które świętowały razem z nami. Każdy podpis i każde
            zdanie stworzą mały fragment tego dnia.
          </p>

        </section>

        {/* ZAKOŃCZENIE */}
        <section className="pb-4 pt-20 text-center">

          <p className="font-serif text-2xl font-light italic text-[#d8d0bb]/70">
            Dziękujemy, że jesteście częścią naszej historii.
          </p>

          <p className="mt-5 text-[9px] uppercase tracking-[0.45em] text-[#d3b56f]/60">
            Natalia &amp; Radosław
          </p>

          <p className="mt-3 font-serif text-sm tracking-[0.2em] text-[#d3b56f]/40">
            28 · 08 · 2027
          </p>

        </section>

      </div>

    </main>
  );
}