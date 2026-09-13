import Link from "next/link";

export default function ZyczeniaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#102d26] text-[#f7f3e9]">

      {/* ŚWIATŁO W TLE */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[5%] h-[520px] w-[520px] rounded-full bg-[#c9aa68]/5 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[560px] w-[560px] rounded-full bg-[#d3b56f]/5 blur-[140px]" />
      </div>

      {/* ZŁOTA RAMKA */}
      <div className="pointer-events-none fixed inset-4 z-50 border border-[#d3b56f]/30 md:inset-6" />

      {/* POWRÓT */}
      <div className="relative z-10 px-8 pt-10 md:px-16 md:pt-14">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#d3b56f]/80 transition hover:text-[#f7f3e9]"
        >
          <span className="text-lg transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Powrót
        </Link>
      </div>

      {/* HERO */}
      <section className="relative z-10 px-8 pb-28 pt-20 text-center md:px-16 md:pb-36 md:pt-28">
        <p className="text-[10px] uppercase tracking-[0.55em] text-[#d3b56f]">
          Natalia &amp; Radosław
        </p>

        <h1 className="mt-6 font-serif text-5xl font-light tracking-tight md:text-7xl">
          Życzenia
        </h1>

        <div className="mx-auto mt-8 h-px w-20 bg-[#d3b56f]/70" />

        <p className="mx-auto mt-8 max-w-2xl font-serif text-xl italic leading-9 text-[#d3b56f] md:text-2xl">
          Zostawcie nam kilka słów,
          <br />
          do których będziemy mogli wracać przez lata.
        </p>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#d8d0bb]/65">
          Możecie napisać życzenia albo nagrać krótką wiadomość.
          Nie musi być idealnie. Ma być od Was. ♡
        </p>
      </section>

      {/* SEPARATOR */}
      <div className="relative z-10 mx-auto mb-28 flex max-w-3xl items-center justify-center gap-5 px-8">
        <span className="h-px flex-1 bg-[#d3b56f]/20" />
        <span className="text-[#d3b56f]">✦</span>
        <span className="h-px flex-1 bg-[#d3b56f]/20" />
      </div>

      {/* OPCJE */}
      <section className="relative z-10 mx-auto max-w-6xl px-8 pb-36 md:px-12">
        <div className="grid gap-10 md:grid-cols-2">

          {/* NAPISZ */}
          <div className="group border border-[#d3b56f]/20 px-8 py-12 text-center transition duration-500 hover:border-[#d3b56f]/50 md:px-12 md:py-16">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]/70">
              01
            </p>

            <div className="mt-6 text-3xl text-[#d3b56f]">✎</div>

            <h2 className="mt-6 font-serif text-3xl font-light">
              Napisz życzenia
            </h2>

            <p className="mx-auto mt-6 max-w-sm text-sm leading-7 text-[#d8d0bb]/60">
              Kilka słów, wspomnienie, rada na przyszłość,
              coś zabawnego albo coś zupełnie od serca.
            </p>

            <button
              type="button"
              className="group/button relative mt-10 overflow-hidden border border-[#c9aa68]/70 px-8 py-4 text-[10px] uppercase tracking-[0.35em] text-[#f7f3e9] transition-all duration-500 hover:border-[#d8bd78]"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#c9aa68] transition-transform duration-500 group-hover/button:translate-x-0" />
              <span className="relative z-10 transition-colors duration-500 group-hover/button:text-[#102d26]">
                Napisz wiadomość
              </span>
            </button>
          </div>

          {/* NAGRAJ */}
          <div className="group border border-[#d3b56f]/20 px-8 py-12 text-center transition duration-500 hover:border-[#d3b56f]/50 md:px-12 md:py-16">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]/70">
              02
            </p>

            <div className="mt-6 text-3xl text-[#d3b56f]">◉</div>

            <h2 className="mt-6 font-serif text-3xl font-light">
              Nagraj życzenia
            </h2>

            <p className="mx-auto mt-6 max-w-sm text-sm leading-7 text-[#d8d0bb]/60">
              Jeśli wolicie powiedzieć coś zamiast pisać,
              nagrajcie dla nas krótką wiadomość głosową lub film.
            </p>

            <button
              type="button"
              className="group/button relative mt-10 overflow-hidden border border-[#c9aa68]/70 px-8 py-4 text-[10px] uppercase tracking-[0.35em] text-[#f7f3e9] transition-all duration-500 hover:border-[#d8bd78]"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#c9aa68] transition-transform duration-500 group-hover/button:translate-x-0" />
              <span className="relative z-10 transition-colors duration-500 group-hover/button:text-[#102d26]">
                Nagraj wiadomość
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* BEZ STRESU */}
      <section className="relative z-10 mx-auto max-w-4xl px-8 pb-36 text-center md:px-12">
        <div className="border-y border-[#d3b56f]/20 py-16 md:py-20">
          <p className="text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]">
            Bez stresu
          </p>

          <h2 className="mt-5 font-serif text-3xl font-light md:text-4xl">
            Nie musicie wymyślać pięknej przemowy
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#d8d0bb]/65">
            Czasem jedno zdanie zostaje w pamięci bardziej niż długa przemowa.
            Możecie napisać coś wzruszającego, śmiesznego albo po prostu
            powiedzieć nam, co macie w głowie w tej jednej konkretnej chwili.
          </p>

          <p className="mx-auto mt-7 max-w-xl font-serif text-lg italic leading-8 text-[#d3b56f]">
            To właśnie takie rzeczy chcemy zachować.
          </p>
        </div>
      </section>

      {/* PODPOWIEDZI */}
      <section className="relative z-10 mx-auto max-w-6xl px-8 pb-36 md:px-12">
        <div className="mb-14 text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]">
            Brak pomysłu?
          </p>

          <h2 className="mt-5 font-serif text-3xl font-light md:text-5xl">
            Możecie zacząć od...
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="border-t border-[#d3b56f]/30 pt-7 text-center">
            <p className="font-serif text-xl italic leading-8 text-[#d8d0bb]/70">
              „Nasza rada dla Was na wspólne życie to...”
            </p>
          </div>

          <div className="border-t border-[#d3b56f]/30 pt-7 text-center">
            <p className="font-serif text-xl italic leading-8 text-[#d8d0bb]/70">
              „Najbardziej zapamiętamy z dzisiejszego dnia...”
            </p>
          </div>

          <div className="border-t border-[#d3b56f]/30 pt-7 text-center">
            <p className="font-serif text-xl italic leading-8 text-[#d8d0bb]/70">
              „Za 20 lat życzymy Wam, żebyście...”
            </p>
          </div>
        </div>
      </section>

      {/* PRYWATNOŚĆ */}
      <section className="relative z-10 mx-auto max-w-4xl px-8 pb-36 text-center md:px-12">
        <span className="text-[#d3b56f]">♡</span>

        <h2 className="mt-6 font-serif text-3xl font-light">
          Tylko dla nas
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#d8d0bb]/60">
          Wasze życzenia nie będą publicznie wyświetlane na tej stronie.
          Chcemy zachować je jako naszą prywatną pamiątkę z dnia ślubu.
        </p>
      </section>

      {/* ZAKOŃCZENIE */}
      <section className="relative z-10 px-8 pb-28 text-center">
        <div className="mx-auto h-px w-16 bg-[#d3b56f]/40" />

        <p className="mx-auto mt-9 max-w-2xl font-serif text-2xl font-light italic leading-10 text-[#d3b56f] md:text-3xl">
          Dziękujemy, że zostawiacie nam
          <br className="hidden md:block" />
          {" "}kawałek tego dnia na zawsze.
        </p>

        <p className="mt-8 text-[10px] uppercase tracking-[0.45em] text-[#d8d0bb]/40">
          Natalia &amp; Radosław · 28.08.2027
        </p>
      </section>

      {/* STOPKA */}
      <footer className="relative z-10 border-t border-[#d3b56f]/20 px-8 py-20 text-center">
        <p className="font-serif text-3xl font-light">
          Natalia &amp; Radosław
        </p>

        <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
          Nasza historia zaczyna się tutaj
        </p>
      </footer>

    </main>
  );
}