"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Crown, Users, Clock, BarChart3, Star, Sparkles, HeartHandshake } from "lucide-react";

// Grupa 1: Poziomy Zaawansowania (A, B, C)
const openLevels = [
    {
        id: "A",
        name: "Poziom A (Zaawansowany)",
        desc: "Dla graczy turniejowych i trenerów. Najwyższy poziom rywalizacji.",
        icon: Trophy,
        color: "bg-yellow-100 text-yellow-700 border-yellow-200",
        badge: "PRO"
    },
    {
        id: "B",
        name: "Poziom B (Średniozaawansowany)",
        desc: "Solidna gra taktyczna i techniczna. Dla osób grających regularnie.",
        icon: Star,
        color: "bg-gray-100 text-gray-700 border-gray-200",
        badge: "Standard"
    },
    {
        id: "C",
        name: "Poziom C (Początkujący+)",
        desc: "Pierwsze kroki w turniejach. Idealne na start przygody z rywalizacją.",
        icon: Medal,
        color: "bg-orange-100 text-orange-700 border-orange-200",
        badge: "Start"
    }
];

// Grupa 2: Kategorie Specjalne (Kobiety, 45+, Mikst)
const specialCategories = [
    {
        id: "Women",
        name: "Kobiety",
        desc: "Dedykowana kategoria dla Pań.",
        icon: Crown,
        color: "bg-pink-50 text-pink-600 border-pink-200"
    },
    {
        id: "Mix",
        name: "Mikst (Mixed)",
        desc: "Pary mieszane (Kobieta + Mężczyzna).",
        icon: HeartHandshake, // Ikona uścisku dłoni/serca pasuje do miksta
        color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
        id: "45+",
        name: "Kategoria 45+",
        desc: "Dla doświadczonych graczy powyżej 45 roku życia.",
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
                        <h4 className="font-heading font-bold text-gray-900 text-xl mb-2">Jeden Dzień</h4>
                        <p className="text-gray-600 leading-relaxed">
                            Turnieje mają charakter <strong>jednodniowy</strong>. Zarezerwuj sobie pół dnia – gramy od fazy grupowej aż do finałów w jeden weekend.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <div className="bg-green-50 p-3 rounded-2xl text-green-600 shrink-0">
                        <BarChart3 size={28} />
                    </div>
                    <div>
                        <h4 className="font-heading font-bold text-gray-900 text-xl mb-2">Punkty PFP</h4>
                        <p className="text-gray-600 leading-relaxed">
                            Walczysz nie tylko o puchary. W wybranych turniejach zbierasz punkty do oficjalnego rankingu <strong>Polskiej Federacji Padla</strong>.
                        </p>
                    </div>
                </div>
            </div>

            {/* CZĘŚĆ 2: KATEGORIE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* LEWA STRONA: POZIOMY A/B/C */}
                <div className="lg:col-span-7 space-y-6">
                    <h3 className="text-xl font-heading font-bold text-gray-900 flex items-center gap-2 mb-6">
                        <Trophy className="text-[var(--color-primary)]" size={24} />
                        Poziomy Zaawansowania
                    </h3>

                    <div className="space-y-4">
                        {openLevels.map((cat, idx) => (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`group relative p-5 rounded-2xl border ${cat.color.replace('text-', 'border-').split(' ')[2]} bg-white hover:shadow-md transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center`}
                            >
                                <div className={`p-3 rounded-xl ${cat.color} shrink-0`}>
                                    <cat.icon size={24} />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <h4 className="font-bold text-gray-900 text-lg">{cat.name}</h4>
                                        <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-900 text-white px-2 py-0.5 rounded-full opacity-80">
                                            {cat.badge}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {cat.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* PRAWA STRONA: SPECJALNE */}
                <div className="lg:col-span-5 space-y-6">
                    <h3 className="text-xl font-heading font-bold text-gray-900 flex items-center gap-2 mb-6">
                        <Sparkles className="text-purple-500" size={24} />
                        Pozostałe Kategorie
                    </h3>

                    <div className="space-y-4">
                        {specialCategories.map((cat, idx) => (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 + 0.3 }}
                                className={`p-5 rounded-2xl border ${cat.color} bg-white/50 hover:bg-white transition-colors`}
                            >
                                <div className="flex items-center gap-3 mb-2">
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