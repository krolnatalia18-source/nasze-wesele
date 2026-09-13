import Link from "next/link";

export default function DlaGosciPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#102d26] text-[#f7f3e9]">

      {/* ŚWIATŁO W TLE */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[8%] h-[520px] w-[520px] rounded-full bg-[#c9aa68]/5 blur-[130px]" />
        <div className="absolute bottom-[-12%] right-[-10%] h-[560px] w-[560px] rounded-full bg-[#d3b56f]/5 blur-[140px]" />
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
      <section className="relative z-10 px-8 pb-28 pt-20 text-center md:px-16 md:pb-36 md:pt-28">
        <p className="text-[10px] uppercase tracking-[0.55em] text-[#d3b56f]">
          Natalia &amp; Radosław
        </p>

        <h1 className="mt-6 font-serif text-5xl font-light tracking-tight md:text-7xl">
          Dla gości
        </h1>

        <div className="mx-auto mt-8 h-px w-20 bg-[#d3b56f]/70" />

        <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#d8d0bb]/70 md:text-base">
          Wszystko, co warto wiedzieć przed naszym wielkim dniem.
          <br />
          Najważniejsze informacje zebraliśmy tutaj w jednym miejscu.
        </p>

        <p className="mx-auto mt-6 max-w-xl font-serif text-xl italic leading-9 text-[#d3b56f]">
          Wy macie tylko przyjechać. Resztą zajmiemy się my.
        </p>
      </section>

      {/* MIEJSCE I GODZINY */}
      <section className="relative z-10 mx-auto max-w-6xl px-8 pb-36 md:px-12">
        <div className="mb-16 text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#d3b56f]">
            28 · 08 · 2027
          </p>

          <h2 className="mt-5 font-serif text-3xl font-light md:text-5xl">
            Gdzie się widzimy?
          </h2>
        </div>

        <div className="grid gap-14 md:grid-cols-2 md:gap-20">

          {/* CEREMONIA */}
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]/80">
              Ceremonia
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
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]/80">
              Przyjęcie weselne
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
              Na miejscu dostępny jest bezpłatny parking.
            </p>
          </div>

        </div>
      </section>

      {/* OZDOBNY SEPARATOR */}
      <div className="relative z-10 mx-auto mb-36 flex max-w-3xl items-center justify-center gap-5 px-8">
        <span className="h-px flex-1 bg-[#d3b56f]/20" />
        <span className="text-[#d3b56f]">✦</span>
        <span className="h-px flex-1 bg-[#d3b56f]/20" />
      </div>

      {/* NOCLEG */}
      <section className="relative z-10 mx-auto max-w-5xl px-8 pb-36 md:px-12">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.4fr] md:items-start">

          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]">
              Nocleg
            </p>

            <h2 className="mt-5 font-serif text-4xl font-light md:text-5xl">
              Zostańcie z nami na dłużej
            </h2>
          </div>

          <div>
            <p className="text-sm leading-7 text-[#d8d0bb]/70">
              Dla naszych gości mamy zarezerwowaną pulę około{" "}
              <span className="text-[#f7f3e9]">20 pokoi</span>.
              Noclegi znajdują się tuż przy sali weselnej, na terenie
              Domu Przyjęć Ewa.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#d8d0bb]/70">
              Koszt noclegu goście pokrywają we własnym zakresie.
              Jeśli chcecie skorzystać z pokoju, dajcie nam znać
              możliwie jak najwcześniej — liczba miejsc jest ograniczona.
            </p>

            <p className="mt-6 font-serif text-lg italic text-[#d3b56f]">
              Im wcześniej, tym większa szansa, że łóżko będzie czekało. ♡
            </p>
          </div>

        </div>
      </section>

      {/* PRAKTYCZNE INFORMACJE */}
      <section className="relative z-10 mx-auto max-w-6xl px-8 pb-36 md:px-12">

        <div className="mb-16 text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]">
            Warto wiedzieć
          </p>

          <h2 className="mt-5 font-serif text-3xl font-light md:text-5xl">
            Kilka rzeczy przed weselem
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">

          {/* DZIECI */}
          <div className="border-t border-[#d3b56f]/30 pt-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]/70">
              01
            </p>

            <h3 className="mt-4 font-serif text-2xl font-light">
              Najmłodsi goście
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#d8d0bb]/65">
              Dzieci wskazane na zaproszeniu są oczywiście mile widziane.
              Na miejscu znajduje się sala zabaw, w której najmłodsi
              będą mogli znaleźć chwilę rozrywki.
            </p>
          </div>

          {/* PARKING */}
          <div className="border-t border-[#d3b56f]/30 pt-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]/70">
              02
            </p>

            <h3 className="mt-4 font-serif text-2xl font-light">
              Samochodem
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#d8d0bb]/65">
              Przy Domu Przyjęć Ewa znajduje się bezpłatny parking
              dostępny dla naszych gości.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#d8d0bb]/40">
              Informacje dotyczące ewentualnego transportu zbiorowego
              uzupełnimy później.
            </p>
          </div>

          {/* DRESS CODE */}
          <div className="border-t border-[#d3b56f]/30 pt-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]/70">
              03
            </p>

            <h3 className="mt-4 font-serif text-2xl font-light">
              Do białego rana
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#d8d0bb]/65">
              Nie obowiązuje formalny dress code. Nasze wesele będzie
              utrzymane w odcieniach butelkowej zieleni i złota.
            </p>

            <p className="mt-4 font-serif text-base italic leading-7 text-[#d3b56f]">
              Wygodne buty na zmianę? Zdecydowanie polecamy.
              Zamierzamy bawić się do białego rana.
            </p>
          </div>

        </div>
      </section>

      {/* PREZENTY */}
      <section className="relative z-10 mx-auto max-w-4xl px-8 pb-36 text-center md:px-12">

        <div className="border-y border-[#d3b56f]/20 py-16 md:py-20">

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]">
            Prezenty
          </p>

          <h2 className="mt-5 font-serif text-4xl font-light md:text-5xl">
            Wasza obecność jest najważniejsza
          </h2>

          <div className="mx-auto mt-8 h-px w-16 bg-[#d3b56f]/50" />

          <p className="mx-auto mt-8 max-w-2xl font-serif text-xl italic leading-9 text-[#d8d0bb]/75">
            Jeśli jednak zechcecie podarować nam coś więcej,
            zamiast tradycyjnych prezentów ucieszy nas symboliczny
            wkład w naszą podróż życia.
          </p>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#d8d0bb]/60">
            A zamiast kwiatów chętnie przyjmiemy butelkę dobrego wina
            lub whisky, którą kiedyś otworzymy, wspominając ten wyjątkowy dzień.
          </p>

        </div>
      </section>

      {/* ZDJĘCIA I GALERIA */}
      <section className="relative z-10 mx-auto max-w-5xl px-8 pb-36 text-center md:px-12">

        <p className="text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]">
          Uchwyćcie ten dzień
        </p>

        <h2 className="mt-5 font-serif text-4xl font-light md:text-5xl">
          Róbcie zdjęcia. Dużo zdjęć.
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#d8d0bb]/65">
          Fotograf będzie z nami, ale wiemy, że najlepsze kadry czasem
          powstają zupełnie przypadkiem. Fotografujcie, nagrywajcie
          i dzielcie się wspomnieniami.
        </p>

        <p className="mx-auto mt-5 max-w-xl font-serif text-lg italic leading-8 text-[#d3b56f]">
          Chcemy zobaczyć ten dzień również Waszymi oczami.
        </p>

        <Link
          href="/galeria"
          className="group relative mt-10 inline-block overflow-hidden border border-[#c9aa68]/70 px-9 py-4 text-[10px] uppercase tracking-[0.35em] text-[#f7f3e9] transition-all duration-500 hover:border-[#d8bd78]"
        >
          <span className="absolute inset-0 -translate-x-full bg-[#c9aa68] transition-transform duration-500 group-hover:translate-x-0" />

          <span className="relative z-10 transition-colors duration-500 group-hover:text-[#102d26]">
            Przejdź do galerii
          </span>
        </Link>

        <p className="mt-10 text-[9px] uppercase tracking-[0.3em] text-[#d8d0bb]/35">
          Nasz weselny hashtag pojawi się tutaj
        </p>

      </section>

      {/* DIETY + KONTAKT */}
      <section className="relative z-10 mx-auto max-w-5xl px-8 pb-36 md:px-12">

        <div className="grid gap-14 md:grid-cols-2 md:gap-20">

          {/* DIETY */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]">
              Menu
            </p>

            <h2 className="mt-5 font-serif text-3xl font-light">
              Diety i alergie
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#d8d0bb]/65">
              Jeśli potrzebujecie specjalnego wariantu menu albo macie
              alergie pokarmowe, koniecznie dajcie nam znać.
            </p>

            <p className="mt-5 font-serif text-lg italic text-[#d3b56f]">
              Zgłoszenia przyjmujemy do 28 lipca 2027.
            </p>
          </div>

          {/* KONTAKT */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]">
              Kontakt
            </p>

            <h2 className="mt-5 font-serif text-3xl font-light">
              Macie pytanie?
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#d8d0bb]/65">
              W razie pytań możecie skontaktować się z nami.
              Numery telefonu Natalii, Radka oraz naszych świadków
              pojawią się tutaj później.
            </p>
          </div>

        </div>
      </section>

      {/* RSVP */}
      <section className="relative z-10 mx-auto max-w-4xl px-8 pb-36 text-center md:px-12">

        <div className="border border-[#d3b56f]/25 px-8 py-14 md:px-16 md:py-16">

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]">
            RSVP
          </p>

          <h2 className="mt-5 font-serif text-4xl font-light md:text-5xl">
            Dajcie nam znać, czy będziecie
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#d8d0bb]/65">
            Prosimy o potwierdzenie obecności telefonicznie lub SMS-em
            do 1 czerwca 2027 roku.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#d8d0bb]/50">
            Brak wiadomości do tego dnia będzie dla nas sygnałem,
            że niestety nie dacie rady z nami świętować.
          </p>

          <div className="mx-auto mt-9 h-px w-12 bg-[#d3b56f]/50" />

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#d8d0bb]/65">
            Przy potwierdzeniu możecie od razu przekazać nam informacje
            dotyczące dzieci, osoby towarzyszącej, noclegu oraz
            specjalnych potrzeb żywieniowych.
          </p>

          <p className="mt-8 font-serif text-lg italic text-[#d3b56f]">
            Nie możemy się doczekać, aż będziemy świętować razem.
          </p>

        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mx-auto max-w-5xl px-8 pb-36 md:px-12">

        <div className="mb-14 text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]">
            W skrócie
          </p>

          <h2 className="mt-5 font-serif text-3xl font-light md:text-5xl">
            Najczęstsze pytania
          </h2>
        </div>

        <div className="divide-y divide-[#d3b56f]/20 border-y border-[#d3b56f]/20">

          <div className="grid gap-4 py-8 md:grid-cols-2 md:gap-12">
            <p className="font-serif text-xl">
              Czy na miejscu jest parking?
            </p>

            <p className="text-sm leading-7 text-[#d8d0bb]/60">
              Tak. Przy sali dostępny jest bezpłatny parking dla gości.
            </p>
          </div>

          <div className="grid gap-4 py-8 md:grid-cols-2 md:gap-12">
            <p className="font-serif text-xl">
              Czy można zostać na noc?
            </p>

            <p className="text-sm leading-7 text-[#d8d0bb]/60">
              Tak. Mamy ograniczoną pulę około 20 pokoi. Nocleg jest
              płatny we własnym zakresie i wymaga wcześniejszego zgłoszenia.
            </p>
          </div>

          <div className="grid gap-4 py-8 md:grid-cols-2 md:gap-12">
            <p className="font-serif text-xl">
              Czy można robić zdjęcia?
            </p>

            <p className="text-sm leading-7 text-[#d8d0bb]/60">
              Oczywiście! Róbcie zdjęcia, nagrywajcie i później
              wrzucajcie swoje najlepsze kadry do naszej wspólnej galerii.
            </p>
          </div>

          <div className="grid gap-4 py-8 md:grid-cols-2 md:gap-12">
            <p className="font-serif text-xl">
              Co z dietami i alergiami?
            </p>

            <p className="text-sm leading-7 text-[#d8d0bb]/60">
              Dajcie znać Natalii najpóźniej do 28 lipca 2027,
              najlepiej już przy potwierdzeniu obecności.
            </p>
          </div>

        </div>
      </section>

      {/* ZAKOŃCZENIE */}
      <section className="relative z-10 px-8 pb-28 text-center">

        <span className="text-[#d3b56f]">
          ✦
        </span>

        <p className="mx-auto mt-7 max-w-2xl font-serif text-2xl font-light leading-10 md:text-3xl">
          Przyjedźcie, bawcie się, róbcie zdjęcia
          <br className="hidden md:block" />
          {" "}i zostańcie z nami do białego rana.
        </p>

        <p className="mt-7 text-[10px] uppercase tracking-[0.45em] text-[#d3b56f]">
          28 · 08 · 2027
        </p>

      </section>

      {/* STOPKA */}
      <footer className="relative z-10 border-t border-[#d3b56f]/20 px-8 py-20 text-center">

        <p className="font-serif text-3xl font-light">
          Natalia &amp; Radosław
        </p>

        <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-[#d3b56f]">
          Do zobaczenia
        </p>

      </footer>

    </main>
  );
}