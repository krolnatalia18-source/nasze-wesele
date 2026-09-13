"use client";

import Link from "next/link";

export default function HistoriaPage() {
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
      <section className="relative z-10 px-8 pb-24 pt-20 text-center md:px-16 md:pb-32 md:pt-28">
        <p className="text-[10px] uppercase tracking-[0.55em] text-[#d3b56f]">
          Natalia & Radosław
        </p>

        <h1 className="mt-6 font-serif text-5xl font-light tracking-tight md:text-7xl">
          Nasza historia
        </h1>

        <div className="mx-auto mt-8 h-px w-20 bg-[#d3b56f]/70" />

        <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#d8d0bb]/70">
          Nie była idealna jak w filmie.
          <br />
          Była dokładnie taka, jaka powinna być — nasza.
        </p>
      </section>

      {/* OŚ CZASU */}
      <section className="relative z-10 mx-auto max-w-5xl px-8 pb-32 md:px-12">
        <div className="absolute bottom-0 left-8 top-0 w-px bg-[#d3b56f]/20 md:left-1/2 md:-translate-x-1/2" />

        {/* 01 — GTA */}
        <div className="relative mb-28 md:flex md:items-center md:justify-between">
          <div className="hidden w-[43%] md:block" />

          <div className="absolute left-[-10px] top-1 h-6 w-6 rounded-full border border-[#d3b56f] bg-[#102d26] md:left-1/2 md:-translate-x-1/2" />

          <div className="ml-12 md:ml-0 md:w-[43%] md:pr-12">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
              Początek
            </p>

            <h2 className="mt-4 font-serif text-3xl font-light leading-tight md:text-4xl">
              Wszystko zaczęło się w GTA
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#d8d0bb]/70">
              Zanim pojawiły się wspólne plany, mieszkanie i pierścionek,
              była po prostu gra.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/70">
              To właśnie w GTA RP nasze drogi po raz pierwszy się
              przecięły. Wtedy nikt jeszcze nie wiedział, że ta wirtualna
              historia kiedyś przeniesie się do prawdziwego życia.
            </p>
          </div>
        </div>

        {/* 02 — NIE OD RAZU */}
        <div className="relative mb-28 md:flex md:items-center md:justify-between">
          <div className="md:w-[43%] md:pr-12">
            <div className="ml-12 md:ml-0">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
                2023 — 2024
              </p>

              <h2 className="mt-4 font-serif text-3xl font-light leading-tight md:text-4xl">
                Nie od razu było prosto
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#d8d0bb]/70">
                Między kwietniem 2023 a marcem 2024 wszystko było trochę
                niepewne. Raz było dobrze, raz mniej dobrze. Bywały momenty,
                kiedy prawie ze sobą nie rozmawialiśmy.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/70">
                Natalia długo nie była pewna, czy naprawdę chce tej
                relacji. Nie było wielkiego planu ani pewności, dokąd to
                wszystko zmierza.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/70">
                Ale Radek wytrzymał.
              </p>

              <p className="mt-5 font-serif text-lg italic text-[#d3b56f]">
                I chyba właśnie to miało znaczenie.
              </p>
            </div>
          </div>

          <div className="absolute left-[-10px] top-1 h-6 w-6 rounded-full border border-[#d3b56f] bg-[#102d26] md:left-1/2 md:-translate-x-1/2" />

          <div className="hidden w-[43%] md:block" />
        </div>

        {/* 03 — ZWIĄZEK */}
        <div className="relative mb-28 md:flex md:items-center md:justify-between">
          <div className="hidden w-[43%] md:block" />

          <div className="absolute left-[-10px] top-1 h-6 w-6 rounded-full border border-[#d3b56f] bg-[#102d26] md:left-1/2 md:-translate-x-1/2" />

          <div className="ml-12 md:ml-0 md:w-[43%] md:pl-12">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
              19.05.2024
            </p>

            <h2 className="mt-4 font-serif text-3xl font-light leading-tight md:text-4xl">
              Zaczęliśmy być razem
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#d8d0bb]/70">
              W końcu przyszedł moment, w którym przestaliśmy się zastanawiać,
              a zaczęliśmy po prostu być razem.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/70">
              19 maja 2024 roku stało się oficjalnie. Od tego dnia zaczęliśmy
              pisać już nie dwie osobne historie, ale jedną wspólną.
            </p>
          </div>
        </div>

        {/* 04 — WSPÓLNY DOM */}
        <div className="relative mb-28 md:flex md:items-center md:justify-between">
          <div className="md:w-[43%] md:pr-12">
            <div className="ml-12 md:ml-0">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
                25.06.2024
              </p>

              <h2 className="mt-4 font-serif text-3xl font-light leading-tight md:text-4xl">
                Wspólny dom
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#d8d0bb]/70">
                Niedługo później przyszedł kolejny ważny krok.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/70">
                25 czerwca 2024 roku zamieszkaliśmy razem. Od tej chwili
                zaczęło się nasze prawdziwe, codzienne życie — nie tylko
                randki i wyjątkowe chwile, ale też zwykłe poranki, wspólne
                wieczory, obowiązki, plany i wszystkie małe rzeczy, z których
                tak naprawdę składa się wspólne życie.
              </p>
            </div>
          </div>

          <div className="absolute left-[-10px] top-1 h-6 w-6 rounded-full border border-[#d3b56f] bg-[#102d26] md:left-1/2 md:-translate-x-1/2" />

          <div className="hidden w-[43%] md:block" />
        </div>

        {/* 05 — ZARĘCZYNY */}
        <div className="relative mb-28 md:flex md:items-center md:justify-between">
          <div className="hidden w-[43%] md:block" />

          <div className="absolute left-[-10px] top-1 h-6 w-6 rounded-full border border-[#d3b56f] bg-[#102d26] md:left-1/2 md:-translate-x-1/2" />

          <div className="ml-12 md:ml-0 md:w-[43%] md:pl-12">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
              24.12.2025
            </p>

            <h2 className="mt-4 font-serif text-3xl font-light leading-tight md:text-4xl">
              Najważniejsze „tak”
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#d8d0bb]/70">
              Wigilijny wieczór miał być zwyczajny, ale jedna faza
              postanowiła zrobić nam małą świąteczną niespodziankę.
              Przez około dwie godziny w domu nie było prądu.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/70">
              Kolację wigilijną jedliśmy więc przy świecach. I właśnie
              w takiej zupełnie nieplanowanej, trochę magicznej atmosferze
              wydarzyło się coś, czego Natalia się nie spodziewała.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/70">
              Po kolacji Radek powiedział, że pod choinką czeka na nią
              prezent. Natalia wzięła latarkę i zaczęła go szukać.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/70">
              Tylko że prezentu pod choinką nie było.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/70">
              Bo Radek przez cały ten czas był tuż za jej plecami.
            </p>

            <div className="my-7 border-l border-[#c9aa68]/50 pl-5">
              <p className="font-serif text-lg italic leading-8 text-[#f7f3e9]/90">
                A kiedy nadszedł ten wielki moment, wszystkie przygotowane
                słowa najwyraźniej gdzieś uciekły.
              </p>

              <p className="mt-3 font-serif text-2xl text-[#d3b56f]">
                „Hmm?”
              </p>
            </div>

            <p className="text-sm leading-7 text-[#d8d0bb]/70">
              Nie było idealnego przemówienia. Nie było scenariusza jak
              z filmu. Była Wigilia przy świecach, latarka, pierścionek
              i Radek klęczący za jej plecami.
            </p>

            <p className="mt-5 font-serif text-lg italic text-[#d3b56f]">
              A odpowiedź brzmiała: tak.
            </p>
          </div>
        </div>

        {/* 06 — ŚLUB */}
        <div className="relative md:flex md:items-center md:justify-between">
          <div className="md:w-[43%] md:pr-12">
            <div className="ml-12 md:ml-0">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
                28.08.2027
              </p>

              <h2 className="mt-4 font-serif text-3xl font-light leading-tight md:text-4xl">
                Nasz wielki dzień
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#d8d0bb]/70">
                A teraz jesteśmy tutaj.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/70">
                Po GTA, wszystkich wahaniach, wspólnym domu, zwykłych dniach,
                świątecznej kolacji przy świecach i jednym bardzo nieporadnym
                „hmm?” przychodzi czas na kolejny rozdział.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/70">
                28 sierpnia 2027 roku powiemy sobie „tak” już na zawsze.
              </p>

              <p className="mt-6 font-serif text-xl italic text-[#d3b56f]">
                I właśnie wtedy zacznie się kolejny rozdział naszej historii.
              </p>
            </div>
          </div>

          <div className="absolute left-[-10px] top-1 h-6 w-6 rounded-full border border-[#d3b56f] bg-[#102d26] md:left-1/2 md:-translate-x-1/2" />

          <div className="hidden w-[43%] md:block" />
        </div>
      </section>

      {/* STOPKA */}
      <footer className="relative z-10 border-t border-[#d3b56f]/20 px-8 py-20 text-center">
        <p className="font-serif text-3xl font-light">
          Natalia & Radosław
        </p>

        <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
          28 sierpnia 2027
        </p>

        <div className="mx-auto mt-8 h-px w-12 bg-[#d3b56f]/60" />

        <p className="mt-8 text-sm italic text-[#d8d0bb]/50">
          I to jeszcze nie koniec naszej historii.
        </p>
      </footer>
    </main>
  );
}