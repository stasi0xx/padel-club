import Link from "next/link";
// Image importujemy tylko dla poster'a (opcjonalnie, jeśli chcesz użyć Image jako fallback pod spodem)
// Ale tutaj użyjemy atrybutu 'poster' w tagu video dla prostoty i wydajności.

export function Hero() {
    return (
        <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-black">

            {/* WIDEO TŁA */}
            <div className="absolute inset-0 z-0">
                {/* Nakładka przyciemniająca wideo (ważne, żeby tekst był czytelny) */}
                <div className="absolute inset-0 bg-black/40 z-10" />

                <video
                    autoPlay
                    loop
                    muted
                    playsInline // KLUCZOWE dla iOS - bez tego wideo odpali się na pełnym ekranie
                    poster="/hero-poster.jpg" // Plik .jpg (klatka z filmu), który wyświetla się ZANIM wideo się załaduje. Zrób screenshota z filmu.
                    className="w-full h-full object-cover"
                >
                    {/* Kolejność ma znaczenie: przeglądarka weźmie pierwszy format, który obsługuje */}
                    <source src="/hero.webm" type="video/webm" />
                    <source src="/hero.mp4" type="video/mp4" />

                    {/* Tekst alternatywny dla bardzo starych przeglądarek */}
                    Twoja przeglądarka nie obsługuje wideo.
                </video>
            </div>

            {/* GRADIENT OVERLAY (dla lepszej czytelności dołu) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-20 pointer-events-none" />

            {/* TREŚĆ - Zmieniamy z-index na wyższy (30), żeby była nad wideo i overlayami */}
            <div className="relative z-30 text-center px-4 max-w-5xl mx-auto space-y-6">

        <span className="inline-block py-1.5 px-4 border border-white/30 rounded-full bg-white/10 backdrop-blur-md text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-2 animate-fade-in-up">
          Najlepszy klub w Trójmieście
        </span>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
                    GRAJ W PADLA <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[var(--color-primary)]">
            W GDYNI
          </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                    Dołącz do społeczności Gdynia Padel Club. Profesjonalne korty,
                    treningi dla każdego poziomu i niesamowita atmosfera.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                    <a
                        href="https://kluby.org/gdynia-padel-club/rezerwacje"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold text-lg rounded-full transition-transform hover:scale-105 shadow-[0_0_20px_rgba(29,78,216,0.5)] uppercase tracking-wide"
                    >
                        Rezerwuj online
                    </a>
                    <Link
                        href="#Pricing"
                        className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-lg rounded-full transition-colors uppercase tracking-wide"
                    >
                        Cennik
                    </Link>
                </div>
            </div>
        </section>
    );
}