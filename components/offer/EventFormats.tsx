"use client";

import { motion, Variants } from "framer-motion";
import {
    Shuffle,
    Trophy,
    Moon,
    HeartPulse,
    CheckCircle2,
    ArrowRight,
    Dices,
    GraduationCap,
    Swords
} from "lucide-react";

const eventTypes = [
    {
        id: "intro",
        title: "Wstęp do Padla (Intro)",
        subtitle: "Twój Pierwszy Krok",
        description: "Idealne na start! To zajęcia z trenerem dedykowane osobom, które nigdy nie grały lub chcą ugruntować podstawy. Nauczysz się chwytu, podstawowych uderzeń, zasad punktacji i poruszania się po korcie. Bezpieczna atmosfera i zero stresu – tutaj każdy się uczy.",
        icon: GraduationCap,
        color: "bg-green-50 text-green-600 border-green-200",
        features: ["Nauka od zera", "Sprzęt w cenie", "Zrozumienie zasad"],
        image: "/offer/events.webp"
    },
    {
        id: "mexicano",
        title: "Mexicano",
        subtitle: "Dopasowanie poziomu",
        // ZMIANA: Tłumaczymy mechanikę od zera
        description: "Zapisujesz się indywidualnie (bez partnera). Mecze gramy na punkty, np. do 24 wygranych piłek. Jeśli Twój mecz kończy się wynikiem 14:10, dopisujesz sobie do tabeli 14 punktów, a przegrani 10. Po każdym meczu zmieniasz partnera i rywali. System tak dobiera składy, żebyś grał z osobami o podobnej liczbie punktów – im lepiej Ci idzie, tym trudniejsze masz mecze.",
        icon: Trophy,
        color: "bg-orange-50 text-orange-600 border-orange-200",
        features: ["Zapisy bez partnera", "Gra na 'małe punkty'", "Mecze z równymi sobie"],
        image: "/offer/events.webp"
    },
    {
        id: "americano",
        title: "Americano",
        subtitle: "Losowa Integracja",
        // ZMIANA: Tłumaczymy różnicę i cel
        description: "Zasady punktacji są takie same jak w Mexicano (zbierasz punkty za każdą wygraną piłkę do rankingu indywidualnego). Różnica polega na doborze par: tutaj decyduje los. Nie ma znaczenia, czy jesteś mistrzem, czy debiutantem – w jednej rundzie zagrasz z trenerem, w innej z kimś, kto trzyma rakietę pierwszy raz. Tu chodzi o zabawę i poznanie wszystkich w klubie.",
        icon: Dices,
        color: "bg-blue-50 text-blue-600 border-blue-200",
        features: ["Zapisy bez partnera", "Całkowicie losowe pary", "Idealne na start"],
        image: "/offer/events.webp"
    },
    {
        id: "matchplay",
        title: "Matchplay z Trenerem",
        subtitle: "Taktyka w Praktyce",
        description: "Gra na punkty, w której czwartym zawodnikiem jest trener. To nie jest suchy trening techniczny – tu uczysz się 'czytać grę'. Trener na bieżąco tłumaczy zasady taktyczne: jak konstruować akcję, kiedy zagrać loba, jak się ustawiać przy siatce i jak zamykać wymiany. Najlepszy sposób na wejście w świat turniejowy.",
        icon: Swords,
        color: "bg-red-50 text-red-600 border-red-200",
        features: ["Zawsze 3 graczy + Trener", "Wskazówki na żywo", "Nauka taktyki"],
        image: "/offer/events.webp"
    },
    {
        id: "night",
        title: "Nocne Granie",
        subtitle: "Turniej & Party", // Zmiana podtytułu na bardziej "eventowy"
        description: "Najlepszy sposób na rozpoczęcie weekendu. Gramy mini turnieje lub luźne rozgrywki. O klimat dba dobra muzyka, a po graniu (lub w trakcie) wjeżdża pizza lub odpalamy grilla (w sezonie). Sport, muzyka i jedzenie w jednym pakiecie.",
        icon: Moon,
        color: "bg-purple-50 text-purple-600 border-purple-200",
        features: ["Format mini turnieje/luźne rozgrywki", "Dobra muzyka", "Pizza / Grill"], // Konkretne benefity
        image: "/offer/events.webp"
    },
    {
        id: "pilates",
        title: "Pilates & Padel",
        subtitle: "Aktywny Poranek Premium", // Zmiana na mocniejszy nagłówek
        description: "Idealny start dnia. Zaczynamy od godziny pilatesu z instruktorem (wzmocnienie i regeneracja). Potem wchodzimy na kort na godzinę gry – zapewniamy rakiety, piłki i wsparcie trenera dla początkujących. Po wysiłku czeka na Ciebie pyszne śniadanie, kawa, upominki od partnerów i profesjonalna fotorelacja.",
        icon: HeartPulse,
        color: "bg-teal-50 text-teal-600 border-teal-200",
        features: ["1h Pilates + 1h Padel", "Śniadanie i Kawa w cenie", "Sprzęt i Nauka gry", "Upominki i Zdjęcia"], // Konkretne benefity
        image: "/offer/events.webp"
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemAnim: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export function EventFormats() {
    return (
        <section className="py-12">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {eventTypes.map((event) => (
                    <motion.div
                        key={event.id}
                        variants={itemAnim}
                        className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                    >
                        <div className={`p-6 flex items-center gap-4 border-b ${event.color.replace('text-', 'border-').split(' ')[2]} bg-opacity-30`}>
                            <div className={`p-3 rounded-2xl ${event.color}`}>
                                <event.icon size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-bold text-gray-900">{event.title}</h3>
                                <p className="text-sm font-medium opacity-80 uppercase tracking-wider text-gray-500">{event.subtitle}</p>
                            </div>
                        </div>

                        <div className="p-8 flex-grow flex flex-col">
                            <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
                                {event.description}
                            </p>

                            <div className="mt-auto">
                                <ul className="space-y-3 mb-6">
                                    {event.features.map((feat, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                            <CheckCircle2 size={18} className="text-[var(--color-primary)]" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <a
                            href="https://kluby.org/gdynia-padel-club/wydarzenia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-50 p-4 flex justify-between items-center group-hover:bg-[var(--color-primary)] transition-colors duration-300 cursor-pointer"
                        >
                            <span className="text-sm font-bold text-gray-500 group-hover:text-white uppercase tracking-wider transition-colors">
                                Sprawdź terminy
                            </span>
                            <div className="bg-white p-2 rounded-full text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">
                                <ArrowRight size={16} />
                            </div>
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}