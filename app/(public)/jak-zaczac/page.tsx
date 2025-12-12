import { Timeline } from "@/components/how-to/Timeline"; // Upewnij się co do ścieżki
import { BeginnerFAQ } from "@/components/how-to/BeginnerFAQ";
import {PadelRules} from "@/components/how-to/PadelRules";

export const metadata = {
    title: "Jak zacząć grać w Padla? | Gdynia Padel Club",
    description: "Poradnik dla początkujących. Zobacz jak przygotować się do pierwszej gry, co zabrać i jak zarezerwować kort.",
};

export default function HowToStartPage() {
    return (
        <main className="min-h-screen flex flex-col">

            {/* PROSTY HEADER */}
            <section className="bg-black text-white pt-32 pb-16 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-primary)] opacity-10"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">
                        ROZPOCZNIJ SWOJĄ <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[var(--color-primary)]">
              PRZYGODĘ Z PADLEM
            </span>
                    </h1>
                    <p className="text-xl text-gray-300 font-light">
                        4 proste kroki, by wejść do gry. Nie musisz być zawodowcem, żeby świetnie się bawić.
                    </p>
                </div>
            </section>

            {/* OŚ CZASU (KROKI) */}
            <Timeline />

            <PadelRules />

            {/* FAQ */}
            <BeginnerFAQ />

            {/* FINALNE CTA */}
            <section className="py-20 bg-[var(--color-primary)] text-center text-white">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold mb-6">Gotowy na pierwszy mecz?</h2>
                    <p className="text-blue-100 mb-8 text-lg">
                        Rezerwacja zajmuje tylko minutę. Do zobaczenia na korcie!
                    </p>
                    <a
                        href="https://kluby.org/gdynia-padel-club/rezerwacje"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-transform hover:scale-105"
                    >
                        ZAREZERWUJ TERAZ
                    </a>
                </div>
            </section>

        </main>
    );
}