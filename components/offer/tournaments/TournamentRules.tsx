"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Crown, Users, Clock, BarChart3, Star, Sparkles } from "lucide-react";

// Grupa 1: Drabinka Open (A, B, C)
const openLevels = [
    {
        id: "A",
        name: "Open A (Zaawansowana)",
        desc: "Elita klubowa. Gracze turniejowi z wieloletnim stażem, trenerzy i byli zawodnicy tenisa.",
        icon: Trophy,
        color: "bg-yellow-100 text-yellow-700 border-yellow-200",
        badge: "Najwyższy poziom"
    },
    {
        id: "B",
        name: "Open B (Średniozaawansowana)",
        desc: "Solidni amatorzy. Regularna gra, opanowane bandejas i woleje, dobra taktyka.",
        icon: Star,
        color: "bg-gray-100 text-gray-700 border-gray-200",
        badge: "Najpopularniejsza"
    },
    {
        id: "C",
        name: "Open C (Początkująca+)",
        desc: "Idealna na start. Dla osób, które znają zasady i grają od kilku miesięcy. Nauka rywalizacji.",
        icon: Medal,
        color: "bg-orange-100 text-orange-700 border-orange-200",
        badge: "Wstęp do rankingu"
    }
];

// Grupa 2: Kategorie Specjalne
const specialCategories = [
    {
        id: "Women",
        name: "Kobiety",
        desc: "Dedykowane turnieje dla Pań. Sportowa rywalizacja w świetnej atmosferze, bez udziału mężczyzn.",
        icon: Crown,
        color: "bg-pink-50 text-pink-600 border-pink-200"
    },
    {
        id: "Mix",
        name: "Mix & 45+",
        desc: "Turnieje par mieszanych (Kobieta + Mężczyzna) oraz kategoria dla graczy 45+. Technika ponad siłę.",
        icon: Users,
        color: "bg-blue-50 text-blue-600 border-blue-200"
    }
];

export function TournamentRules() {
    return (
        <section className="py-12 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-12">

            {/* CZĘŚĆ 1: ZASADY OGÓLNE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 border-b border-gray-100 pb-12">
                <div className="flex gap-4 items-start">
                    <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 shrink-0">
                        <Clock size={28} />
                    </div>
                    <div>
                        <h4 className="font-heading font-bold text-gray-900 text-xl mb-2">Czas Gry</h4>
                        <p className="text-gray-600 leading-relaxed">
                            Gramy cały dzień (sobota lub niedziela). System gwarantuje Ci <strong>minimum 3 mecze</strong> w grupie, zanim przejdziemy do fazy pucharowej.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <div className="bg-green-50 p-3 rounded-2xl text-green-600 shrink-0">
                        <BarChart3 size={28} />
                    </div>
                    <div>
                        <h4 className="font-heading font-bold text-gray-900 text-xl mb-2">Ranking Padel Club</h4>
                        <p className="text-gray-600 leading-relaxed">
                            Za każdy turniej zdobywasz punkty. Awansuj z poziomu C do A, zbierając doświadczenie i trofea.
                        </p>
                    </div>
                </div>
            </div>

            {/* CZĘŚĆ 2: KATEGORIE - PODZIAŁ NA SEKCJE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* LEWA STRONA: DRABINKA OPEN (Większa uwaga) */}
                <div className="lg:col-span-7 space-y-6">
                    <h3 className="text-xl font-heading font-bold text-gray-900 flex items-center gap-2 mb-6">
                        <Trophy className="text-[var(--color-primary)]" size={24} />
                        Poziomy Open
                    </h3>

                    <div className="space-y-4">
                        {openLevels.map((cat, idx) => (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`group relative p-6 rounded-2xl border ${cat.color.replace('text-', 'border-').split(' ')[2]} bg-white hover:shadow-md transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center`}
                            >
                                {/* Ikona */}
                                <div className={`p-4 rounded-xl ${cat.color} shrink-0`}>
                                    <cat.icon size={24} />
                                </div>

                                {/* Treść */}
                                <div className="flex-grow">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <h4 className="font-bold text-gray-900 text-lg">{cat.name}</h4>
                                        <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-900 text-white px-2 py-0.5 rounded-full opacity-80">
                                            {cat.badge}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {cat.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* PRAWA STRONA: KATEGORIE SPECJALNE */}
                <div className="lg:col-span-5 space-y-6">
                    <h3 className="text-xl font-heading font-bold text-gray-900 flex items-center gap-2 mb-6">
                        <Sparkles className="text-purple-500" size={24} />
                        Kategorie Specjalne
                    </h3>

                    <div className="space-y-4">
                        {specialCategories.map((cat, idx) => (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 + 0.3 }}
                                className={`p-6 rounded-2xl border ${cat.color} bg-white/50 hover:bg-white transition-colors`}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <cat.icon size={20} className={cat.color.split(' ')[1]} />
                                    <h4 className="font-bold text-gray-900">{cat.name}</h4>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {cat.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}