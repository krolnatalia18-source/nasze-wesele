import Link from "next/link";

export default function GaleriaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#102d26] text-[#f7f3e9]">

      {/* DELIKATNE ŚWIATŁO W TLE */}
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

      {/* NAGŁÓWEK */}
      <section className="relative z-10 px-8 pb-20 pt-20 text-center md:px-16 md:pb-24 md:pt-28">
        <p className="text-[10px] uppercase tracking-[0.55em] text-[#d3b56f]">
          Natalia &amp; Radosław
        </p>

        <h1 className="mt-6 font-serif text-5xl font-light tracking-tight md:text-7xl">
          Galeria
        </h1>

        <div className="mx-auto mt-8 h-px w-20 bg-[#d3b56f]/70" />

        <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#d8d0bb]/70 md:text-base">
          Ten dzień będzie pełen chwil, których nie chcemy zapomnieć.
          <br />
          Dlatego chcemy zobaczyć go również Waszymi oczami.
        </p>

        <p className="mx-auto mt-5 max-w-xl font-serif text-lg italic leading-8 text-[#d3b56f]">
          Dodajcie swoje zdjęcia i stwórzmy razem album pełen wspomnień.
        </p>
      </section>

      {/* DODAWANIE ZDJĘCIA */}
      <section className="relative z-10 mx-auto max-w-5xl px-8 pb-16 md:px-12">
        <div className="flex justify-center">
          <button
            type="button"
            className="group relative overflow-hidden border border-[#c9aa68]/70 px-9 py-4 text-[10px] uppercase tracking-[0.35em] text-[#f7f3e9] transition-all duration-500 hover:border-[#d8bd78]"
          >
            <span className="absolute inset-0 -translate-x-full bg-[#c9aa68] transition-transform duration-500 group-hover:translate-x-0" />

            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#102d26]">
              + Dodaj zdjęcie
            </span>
          </button>
        </div>

        <p className="mt-5 text-center text-[9px] uppercase tracking-[0.25em] text-[#d8d0bb]/35">
          Zdjęcia od naszych gości
        </p>
      </section>

      {/* ALBUM */}
      <section className="relative z-10 mx-auto max-w-6xl px-8 pb-32 md:px-12">
        <div className="border-y border-[#d3b56f]/20 py-20 text-center md:py-28">

          {/* DEKORACJA */}
          <div className="mx-auto mb-10 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#d3b56f]/40" />
            <span className="text-sm text-[#d3b56f]">✦</span>
            <span className="h-px w-12 bg-[#d3b56f]/40" />
          </div>

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]/80">
            Nasz wspólny album
          </p>

          <h2 className="mt-6 font-serif text-3xl font-light md:text-5xl">
            Tutaj pojawią się nasze wspomnienia
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#d8d0bb]/55">
            Pierwsze fotografie pojawią się tutaj, gdy tylko zaczniemy je
            dodawać.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">
            <div className="aspect-[4/5] border border-[#d3b56f]/15 bg-[#ffffff]/[0.015]" />

            <div className="aspect-[4/5] border border-[#d3b56f]/15 bg-[#ffffff]/[0.015] md:-translate-y-6" />

            <div className="hidden aspect-[4/5] border border-[#d3b56f]/15 bg-[#ffffff]/[0.015] md:block" />
          </div>

          <p className="mt-8 font-serif text-base italic text-[#d8d0bb]/40">
            Każde zdjęcie to kawałek naszej historii.
          </p>
        </div>
      </section>

      {/* DOLNA SEKCJA */}
      <section className="relative z-10 px-8 pb-24 text-center">
        <p className="font-serif text-2xl font-light text-[#f7f3e9]/90 md:text-3xl">
          Zatrzymajmy te chwile na dłużej.
        </p>

        <div className="mx-auto mt-7 h-px w-12 bg-[#d3b56f]/60" />

        <p className="mt-7 text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]">
          28 · 08 · 2027
        </p>
      </section>

      {/* STOPKA */}
      <footer className="relative z-10 border-t border-[#d3b56f]/20 px-8 py-16 text-center">
        <p className="font-serif text-2xl font-light">
          Natalia &amp; Radosław
        </p>

        <p className="mt-4 text-[9px] uppercase tracking-[0.4em] text-[#d8d0bb]/30">
          With love
        </p>
      </footer>

    </main>
  );
}