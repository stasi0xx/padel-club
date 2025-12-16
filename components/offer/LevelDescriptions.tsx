"use client";

import { motion } from "framer-motion";
import { Check, Star, TrendingUp } from "lucide-react";

const levels = [
    {
        id: "C",
        title: "Poziom C",
        subtitle: "Początkujący / Niższy Średni",
        description: "Idealny poziom dla osób, które znają już zasady gry i potrafią utrzymać piłkę w korcie, ale wciąż pracują nad regularnością i techniką uderzeń.",
        icon: Star,
        color: "bg-green-50 text-green-600 border-green-200",
        badgeColor: "bg-green-600",
        requirements: [
            "Znasz zasady gry i punktację",
            "Potrafisz wprowadzić piłkę do gry serwisem",
            "Utrzymujesz wymianę z głębi kortu (niska prędkość)",
            "Zaczynasz korzystać z gry o szybę"
        ]
    },
    {
        id: "B",
        title: "Poziom B",
        subtitle: "Średniozaawansowany",
        description: "Dla graczy grających regularnie. Wymagamy kontroli nad piłką, umiejętności gry taktycznej i swobody w grze przy siatce oraz z wykorzystaniem ścian.",
        icon: TrendingUp,
        color: "bg-purple-50 text-purple-600 border-purple-200",
        badgeColor: "bg-purple-600",
        requirements: [
            "Pewny serwis i return",
            "Gra wolejem i bandeją",
            "Obrona z wykorzystaniem szyb",
            "Umiejętność zmiany tempa gry"
        ]
    }
];

export function LevelDescriptions() {
    return (
        <section className="mb-12">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    Jak dobrać grupę?
                </h3>
                <p className="text-gray-500">
                    Sprawdź, który poziom najlepiej opisuje Twoje umiejętności.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {levels.map((level, idx) => (
                    <motion.div
                        key={level.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className={`relative rounded-3xl p-8 border ${level.color.replace('bg-', 'border-bg-').replace('text-', 'border-text-').split(' ')[2]} bg-white shadow-sm hover:shadow-lg transition-all duration-300`}
                    >
                        {/* Badge Poziomu */}
                        <div className={`absolute top-0 right-0 ${level.badgeColor} text-white font-black text-xl px-4 py-2 rounded-bl-2xl rounded-tr-2xl shadow-sm`}>
                            {level.id}
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className={`p-3 rounded-2xl ${level.color}`}>
                                <level.icon size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">{level.title}</h4>
                                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                    {level.subtitle}
                                </span>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {level.description}
                        </p>

                        <div className="space-y-3">
                            <h5 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">
                                Wymagane umiejętności:
                            </h5>
                            {level.requirements.map((req, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className={`mt-0.5 p-0.5 rounded-full ${level.color.split(' ')[0]}`}>
                                        <Check size={14} className={level.color.split(' ')[1]} strokeWidth={3} />
                                    </div>
                                    <span className="text-sm text-gray-700 font-medium">{req}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}