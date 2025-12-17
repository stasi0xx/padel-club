"use client";

import { motion } from "framer-motion";
import {
    ShowerHead,
    Sun,
    Dumbbell, // Użyjemy jako symbolu sprzętu sportowego
    Check
} from "lucide-react";

const features = [
    {
        title: "Korty Kryte i Otwarte",
        description: "Niezależnie od pogody, graj komfortowo. Wybierz halę w zimę lub ciesz się słońcem latem na kortach zewnętrznych.",
        icon: Sun,
    },
    {
        title: "Wypożyczalnia Sprzętu",
        description: "Dopiero zaczynasz? Nie musisz inwestować w własną rakietę. Na miejscu wypożyczysz profesjonalny sprzęt BABOLAT, HEAD, SIUX i wiele innych.",
        icon: Dumbbell,
    },
    {
        title: "Szatnie i Prysznice",
        description: "Pełen komfort przed i po treningu. Do Twojej dyspozycji są szatnie z prysznicami.",
        icon: ShowerHead,
    }
];

export function Features() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Nagłówek */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 uppercase">
                        Co nas wyróżnia?
                    </h2>
                    <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full" />
                </div>

                {/* Grid z cechami */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="flex flex-col items-center group"
                        >
                            {/* Ikona w kole */}
                            <div className="w-20 h-20 bg-blue-50 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300 shadow-sm">
                                <feature.icon size={40} strokeWidth={1.5} />
                            </div>

                            {/* Tytuł */}
                            <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>

                            {/* Opis */}
                            <p className="text-gray-600 leading-relaxed max-w-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Dodatkowy pasek "Trust indicators" (opcjonalnie) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 pt-10 border-t border-gray-100 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    {/* Tu w przyszłości można dodać loga partnerów lub proste hasła jak poniżej */}
                    <div className="flex items-center gap-2 font-bold text-gray-400">
                        <Check size={18} /> Parking dla klientów
                    </div>
                    <div className="flex items-center gap-2 font-bold text-gray-400">
                        <Check size={18} /> Strefa Chillout
                    </div>
                    <div className="flex items-center gap-2 font-bold text-gray-400">
                        <Check size={18} /> Honorujemy karty sportowe
                    </div>
                </motion.div>

            </div>
        </section>
    );
}