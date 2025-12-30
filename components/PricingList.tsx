"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Info } from "lucide-react";
import Image from "next/image";
import { PricingPlan, ICON_MAP } from "@/lib/pricing-config"; // Import typów i mapy

interface PricingListProps {
    plans: PricingPlan[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    },
};

const cards = [
    { name: "Multisport", src: "multisport.png" },
    { name: "FitProfit", src: "fitprofit.png" },
    { name: "PZU Sport", src: "pzu-sport.png" },
    { name: "Medicover", src: "medicover.png" },
];

export function PricingList({ plans }: PricingListProps) {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-200" id="Pricing">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 uppercase">
                        Cennik
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Przejrzyste zasady, brak ukrytych opłat.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {plans.map((plan) => {
                        // Dynamiczne mapowanie ikony ze stringa
                        const IconComponent = ICON_MAP[plan.icon_name] || ICON_MAP["Zap"];

                        return (
                            <motion.div
                                key={plan.id}
                                variants={itemVariants}
                                className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border ${
                                    plan.highlight
                                        ? "border-blue-200 ring-2 ring-blue-50"
                                        : "border-gray-100"
                                }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wide">
                                        Popularne
                                    </div>
                                )}

                                <div className="flex items-center gap-4 mb-6">
                                    <div
                                        className={`p-3 rounded-full ${
                                            plan.highlight
                                                ? "bg-blue-100 text-[var(--color-primary)]"
                                                : "bg-gray-100 text-gray-600"
                                        }`}
                                    >
                                        <IconComponent size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-heading font-bold text-gray-900">
                                            {plan.category}
                                        </h3>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {plan.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex justify-between items-center border-b border-gray-50 pb-2 last:border-0 last:pb-0"
                                        >
                      <span className="text-gray-600 font-medium text-sm">
                        {item.label}
                      </span>
                                            <span
                                                className={`font-bold ${
                                                    item.isNote
                                                        ? "text-sm text-gray-500"
                                                        : "text-lg text-[var(--color-primary)]"
                                                }`}
                                            >
                        {item.price}
                      </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <p className="text-xs text-gray-400 italic">
                                        {plan.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Reszta komponentu (Link do rezerwacji, Karty sportowe) bez zmian... */}
                {/* ... (Wstaw tutaj resztę JSX z oryginalnego pliku od motion.div z linkiem) ... */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <a
                        href="https://kluby.org/gdynia-padel-club/rezerwacje"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1"
                    >
                        Rezerwuj termin
                        <CheckCircle2 size={20} />
                    </a>
                    <p className="mt-4 text-sm text-gray-500">
                        Rezerwacja odbywa się przez system Kluby.org
                    </p>
                </motion.div>

                <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm text-center mt-5">
                    {/* ... Sekcja kart sportowych bez zmian ... */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-[var(--color-primary)] px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                        <Info size={18} />
                        Honorujemy Karty Sportowe
                    </div>

                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                        Masz kartę sportową?
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                        Z kartą <strong>MultiSport, FitProfit, PZU Sport lub Medicover</strong> wchodzisz na zajęcia grupowe Intro oraz wybrane wydarzenia całkowicie za darmo lub z dużą zniżką. Pamiętaj o odbiciu karty w recepcji przed grą!
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale hover:grayscale-0 transition-all duration-500">
                        {cards.map((card, idx) => (
                            <div key={idx} className="relative h-12 w-32 md:h-16 md:w-40 opacity-70 hover:opacity-100 transition-opacity">
                                <Image
                                    src={`/discount/${card.src}`} // Ścieżka do folderu discount
                                    alt={`Honorujemy kartę ${card.name}`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 128px, 160px"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}