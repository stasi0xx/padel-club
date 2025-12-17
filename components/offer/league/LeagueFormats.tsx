"use client";

import { motion } from "framer-motion";
import { Trophy, Crown, ArrowRight, Swords, CalendarRange } from "lucide-react";

const leagues = [
    {
        id: "open",
        title: "Liga Open",
        subtitle: "Dla Wszystkich",
        // Zaktualizowałem opis na bazie Twojego tekstu, skracając go lekko do kafelka
        description: "Największe rozgrywki w mieście, trwające nieprzerwanie od 3 lat. Walczysz w dywizjach dopasowanych do Twojego poziomu, z szansą na awans po każdej edycji.",
        icon: Swords,
        color: "bg-blue-900 text-white",
        features: [
            "System każdy z każdym", // Zmiana z "5-6 meczów" na bardziej uniwersalne
            "Awanse i spadki co edycję",
            "Punkty do rankingu PFP" // <--- KLUCZOWA ZMIANA
        ],
    },
    {
        id: "women",
        title: "Liga Kobiet",
        subtitle: "Tylko dla Pań",
        description: "Dynamicznie rozwijająca się społeczność. Rywalizacja w atmosferze fair play, ale bez taryfy ulgowej. Idealne miejsce, by sprawdzić się na tle innych zawodniczek.",
        icon: Crown,
        color: "bg-pink-600 text-white",
        features: [
            "Dedykowane dywizje",
            "Ranking PFP", // <--- TEŻ DODAJEMY
            "Wspólne finały"
        ],
    }
];

export function LeagueFormats() {
    return (
        <section className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {leagues.map((league, idx) => (
                    <motion.div
                        key={league.id}
                        initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-3xl shadow-xl border border-gray-100 bg-white flex flex-col hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* Header z kolorem */}
                        <div className={`${league.color} p-8 relative overflow-hidden`}>
                            <div className="relative z-10 flex justify-between items-start">
                                <div>
                                    <h3 className="text-3xl font-heading font-black uppercase tracking-wider mb-1">
                                        {league.title}
                                    </h3>
                                    <p className="font-medium opacity-90">{league.subtitle}</p>
                                </div>
                                <league.icon size={48} className="opacity-80 group-hover:rotate-12 transition-transform duration-500" />
                            </div>

                            {/* Dekoracja tła */}
                            <league.icon size={200} className="absolute -bottom-10 -right-10 opacity-10 rotate-12" />
                        </div>

                        {/* Content */}
                        <div className="p-8 flex-grow flex flex-col">
                            <div className="flex items-center gap-3 mb-6 text-gray-500 font-medium bg-gray-50 w-fit px-4 py-2 rounded-full border border-gray-100">
                                <CalendarRange size={18} className="text-[var(--color-primary)]" />
                                <span>Czas trwania: 1.5 - 2 miesiące</span>
                            </div>

                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                {league.description}
                            </p>

                            <ul className="space-y-3 mt-auto mb-8">
                                {league.features.map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://kluby.org/gdynia-padel-club/rozgrywki"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full group-hover:bg-[var(--color-primary)] bg-gray-900 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                            >
                                Dołącz do sezonu <ArrowRight size={20} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}