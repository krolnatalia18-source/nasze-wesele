import Link from "next/link";

export default function DzienSlubuPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#102d26] text-[#f7f3e9]">

      {/* ŚWIATŁO W TLE */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#c9aa68]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#d3b56f]/5 blur-[120px]" />
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
          Dzień ślubu
        </h1>

        <div className="mx-auto mt-8 h-px w-20 bg-[#d3b56f]/70" />

        <p className="mt-8 text-[11px] uppercase tracking-[0.45em] text-[#d8d0bb]/60">
          28 sierpnia 2027
        </p>

        <p className="mx-auto mt-7 max-w-xl font-serif text-xl italic leading-9 text-[#d3b56f]">
          Jeden dzień. Jedno „tak”.
          <br />
          I początek kolejnego rozdziału.
        </p>

      </section>

      {/* DATA */}
      <section className="relative z-10 mx-auto max-w-5xl px-8 pb-32 md:px-12">

        <div className="border-y border-[#d3b56f]/20 py-16 text-center md:py-20">

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]">
            Zapiszcie tę datę
          </p>

          <div className="mt-10 flex items-center justify-center gap-6 md:gap-12">

            <div>
              <p className="font-serif text-5xl font-light md:text-7xl">
                28
              </p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-[#d8d0bb]/45">
                dzień
              </p>
            </div>

            <span className="font-serif text-4xl font-light text-[#d3b56f]/50">
              ·
            </span>

            <div>
              <p className="font-serif text-5xl font-light md:text-7xl">
                08
              </p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-[#d8d0bb]/45">
                miesiąc
              </p>
            </div>

            <span className="font-serif text-4xl font-light text-[#d3b56f]/50">
              ·
            </span>

            <div>
              <p className="font-serif text-5xl font-light md:text-7xl">
                27
              </p>

              <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-[#d8d0bb]/45">
                rok
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* MIEJSCA */}
      <section className="relative z-10 mx-auto max-w-6xl px-8 pb-36 md:px-12">

        <div className="mb-16 text-center">

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]">
            Najważniejsze miejsca
          </p>

          <h2 className="mt-5 font-serif text-3xl font-light md:text-5xl">
            Tu wszystko się zacznie
          </h2>

        </div>

        <div className="grid gap-14 md:grid-cols-2 md:gap-20">

          {/* CEREMONIA */}
          <div className="text-center">

            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]/70">
              01 · Ceremonia
            </p>

            <p className="mt-6 font-serif text-6xl font-light">
              13:00
            </p>

            <div className="mx-auto mt-7 h-px w-12 bg-[#d3b56f]/50" />

            <h3 className="mt-7 font-serif text-2xl font-light md:text-3xl">
              Kościół MB Częstochowskiej
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/60">
              Rybnik-Ochojec
              <br />
              ul. Milenijna 55
            </p>

            <p className="mt-6 font-serif text-base italic text-[#d3b56f]/85">
              Prosimy o przybycie około 12:50.
            </p>

          </div>

          {/* SALA */}
          <div className="text-center">

            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]/70">
              02 · Przyjęcie
            </p>

            <p className="mt-6 font-serif text-6xl font-light">
              ~ 14:30
            </p>

            <div className="mx-auto mt-7 h-px w-12 bg-[#d3b56f]/50" />

            <h3 className="mt-7 font-serif text-2xl font-light md:text-3xl">
              Dom Przyjęć Ewa
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/60">
              ul. Żytnia 5
              <br />
              44-293 Piece
            </p>

            <p className="mt-6 font-serif text-base italic text-[#d3b56f]/85">
              Tutaj zaczniemy wspólne świętowanie.
            </p>

          </div>

        </div>

      </section>

      {/* SEPARATOR */}
      <div className="relative z-10 mx-auto mb-36 flex max-w-3xl items-center justify-center gap-5 px-8">
        <span className="h-px flex-1 bg-[#d3b56f]/20" />
        <span className="text-[#d3b56f]">✦</span>
        <span className="h-px flex-1 bg-[#d3b56f]/20" />
      </div>

      {/* PLAN DNIA */}
      <section className="relative z-10 mx-auto max-w-5xl px-8 pb-36 md:px-12">

        <div className="mb-20 text-center">

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]">
            Plan dnia
          </p>

          <h2 className="mt-5 font-serif text-3xl font-light md:text-5xl">
            Jak będzie wyglądał ten dzień?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#d8d0bb]/55">
            Kilka najważniejszych momentów naszego dnia.
            Dokładne godziny uzupełnimy, gdy harmonogram będzie już gotowy.
          </p>

        </div>

        <div className="relative">

          {/* LINIA */}
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-[#d3b56f]/20 md:left-1/2 md:-translate-x-1/2" />

          {/* 01 */}
          <div className="relative mb-24 md:flex md:items-start md:justify-between">

            <div className="hidden md:block md:w-[43%]" />

            <div className="absolute left-[4px] top-1 h-6 w-6 rounded-full border border-[#d3b56f] bg-[#102d26] md:left-1/2 md:-translate-x-1/2" />

            <div className="ml-14 md:ml-0 md:w-[43%] md:pl-12">

              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
                13:00
              </p>

              <h3 className="mt-4 font-serif text-3xl font-light">
                Ceremonia
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/60">
                Moment, na który będziemy czekać najbardziej.
                To właśnie tutaj powiemy sobie nasze najważniejsze „tak”.
              </p>

            </div>

          </div>

          {/* 02 */}
          <div className="relative mb-24 md:flex md:items-start md:justify-between">

            <div className="ml-14 md:ml-0 md:w-[43%] md:pr-12 md:text-right">

              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
                Po ceremonii
              </p>

              <h3 className="mt-4 font-serif text-3xl font-light">
                Pierwsze wspólne zdjęcie
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/60">
                Zanim ruszymy na salę, zatrzymamy się jeszcze przed kościołem
                na pierwsze wspólne zdjęcie ze wszystkimi naszymi gośćmi.
              </p>

              <p className="mt-4 font-serif text-base italic text-[#d3b56f]/80">
                Nie uciekajcie nam od razu do samochodów. ♡
              </p>

            </div>

            <div className="absolute left-[4px] top-1 h-6 w-6 rounded-full border border-[#d3b56f] bg-[#102d26] md:left-1/2 md:-translate-x-1/2" />

            <div className="hidden md:block md:w-[43%]" />

          </div>

          {/* 03 */}
          <div className="relative mb-24 md:flex md:items-start md:justify-between">

            <div className="hidden md:block md:w-[43%]" />

            <div className="absolute left-[4px] top-1 h-6 w-6 rounded-full border border-[#d3b56f] bg-[#102d26] md:left-1/2 md:-translate-x-1/2" />

            <div className="ml-14 md:ml-0 md:w-[43%] md:pl-12">

              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
                W drogę
              </p>

              <h3 className="mt-4 font-serif text-3xl font-light">
                Przejazd na salę
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/60">
                Po wspólnym zdjęciu ruszamy do Domu Przyjęć Ewa,
                gdzie czeka na nas dalsza część dnia.
              </p>

            </div>

          </div>

          {/* 04 */}
          <div className="relative mb-24 md:flex md:items-start md:justify-between">

            <div className="ml-14 md:ml-0 md:w-[43%] md:pr-12 md:text-right">

              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
                Na sali
              </p>

              <h3 className="mt-4 font-serif text-3xl font-light">
                Życzenia i prezenty
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/60">
                Dopiero po przyjeździe na salę będzie spokojny czas
                na życzenia, uściski, gratulacje i prezenty.
              </p>

            </div>

            <div className="absolute left-[4px] top-1 h-6 w-6 rounded-full border border-[#d3b56f] bg-[#102d26] md:left-1/2 md:-translate-x-1/2" />

            <div className="hidden md:block md:w-[43%]" />

          </div>

          {/* 05 */}
          <div className="relative mb-24 md:flex md:items-start md:justify-between">

            <div className="hidden md:block md:w-[43%]" />

            <div className="absolute left-[4px] top-1 h-6 w-6 rounded-full border border-[#d3b56f] bg-[#102d26] md:left-1/2 md:-translate-x-1/2" />

            <div className="ml-14 md:ml-0 md:w-[43%] md:pl-12">

              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
                Świętujemy
              </p>

              <h3 className="mt-4 font-serif text-3xl font-light">
                Przyjęcie weselne
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/60">
                Jedzenie, rozmowy, śmiech i początek wspólnego
                świętowania tego dnia.
              </p>

            </div>

          </div>

          {/* 06 */}
          <div className="relative mb-24 md:flex md:items-start md:justify-between">

            <div className="ml-14 md:ml-0 md:w-[43%] md:pr-12 md:text-right">

              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
                Pierwszy raz
              </p>

              <h3 className="mt-4 font-serif text-3xl font-light">
                Pierwszy taniec
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/60">
                Nasz pierwszy taniec już jako mąż i żona.
                A chwilę później parkiet należy już do nas wszystkich.
              </p>

            </div>

            <div className="absolute left-[4px] top-1 h-6 w-6 rounded-full border border-[#d3b56f] bg-[#102d26] md:left-1/2 md:-translate-x-1/2" />

            <div className="hidden md:block md:w-[43%]" />

          </div>

          {/* 07 */}
          <div className="relative md:flex md:items-start md:justify-between">

            <div className="hidden md:block md:w-[43%]" />

            <div className="absolute left-[4px] top-1 h-6 w-6 rounded-full border border-[#d3b56f] bg-[#102d26] md:left-1/2 md:-translate-x-1/2" />

            <div className="ml-14 md:ml-0 md:w-[43%] md:pl-12">

              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
                Do białego rana
              </p>

              <h3 className="mt-4 font-serif text-3xl font-light">
                Zabawa
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/60">
                A potem już tylko muzyka, taniec, śmiech i wspólna
                zabawa tak długo, jak starczy nam sił.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* OSTATNIA SEKCJA */}
      <section className="relative z-10 mx-auto max-w-5xl px-8 pb-32 text-center md:px-12">

        <div className="border-y border-[#d3b56f]/20 py-16 md:py-20">

          <span className="text-[#d3b56f]">
            ✦
          </span>

          <p className="mt-7 text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]">
            Najważniejsze
          </p>

          <h2 className="mt-5 font-serif text-3xl font-light md:text-4xl">
            Bądźcie z nami
          </h2>

          <p className="mx-auto mt-7 max-w-2xl font-serif text-lg italic leading-8 text-[#d8d0bb]/70">
            Reszta to tylko szczegóły.
            Najważniejsze będzie dla nas to, że tego dnia
            będziemy mogli świętować razem z Wami.
          </p>

        </div>

      </section>

      {/* STOPKA */}
      <footer className="relative z-10 border-t border-[#d3b56f]/20 px-8 py-20 text-center">

        <p className="font-serif text-3xl font-light">
          Natalia &amp; Radosław
        </p>

        <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
          28 sierpnia 2027
        </p>

        <div className="mx-auto mt-8 h-px w-12 bg-[#d3b56f]/60" />

        <p className="mt-8 text-sm italic text-[#d8d0bb]/50">
          Do zobaczenia w naszym wielkim dniu.
        </p>

      </footer>

    </main>
  );
}