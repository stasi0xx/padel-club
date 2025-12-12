"use client";

import { motion } from "framer-motion";
import {
    Clock,
    Users,
    Baby,
    User,
    Trophy,
    Zap,
    CheckCircle2,
    LucideIcon // Importujemy typ dla ikon
} from "lucide-react";

// 1. Definiujemy typ dla pojedynczej pozycji cennika
interface PricingItem {
    label: string;
    price: string;
    isNote?: boolean; // <--- Kluczowe: znak zapytania oznacza, że pole jest opcjonalne
}

// 2. Definiujemy typ dla głównego kafelka
interface PricingPlan {
    category: string;
    icon: LucideIcon;
    description: string;
    items: PricingItem[];
    highlight?: boolean; // To też jest opcjonalne
}

// 3. Przypisujemy typ PricingPlan[] do zmiennej pricingPlans
const pricingPlans: PricingPlan[] = [
    {
        category: "Wynajem Kortu",
        icon: Clock,
        description: "Cena za 1h lub 1.5h gry (zależy od rezerwacji)",
        items: [
            { label: "Pon - Pt do 16:00", price: "100 zł" },
            { label: "Pon - Pt po 16:00", price: "148 zł" },
            { label: "Weekendy", price: "148 zł" },
        ],
    },
    {
        category: "Trening Grupowy",
        icon: Users,
        description: "Zajęcia z trenerem w grupie.",
        items: [
            { label: "Pon - Pt do 16:00", price: "60 zł" },
            { label: "Pon - Pt po 16:00", price: "70 zł" },
        ],
    },
    {
        category: "Trening Dziecięcy",
        icon: Baby,
        description: "Szkółka dla najmłodszych.",
        items: [
            { label: "Grupa 4-osobowa", price: "65 zł" },
            { label: "Grupa 6-osobowa", price: "55 zł" },
        ],
    },
    {
        category: "Trening Indywidualny",
        icon: User,
        description: "1 na 1 z trenerem dla szybkiego progresu.",
        highlight: true,
        items: [
            { label: "Cena za trening", price: "100 zł" },
            // Tutaj TypeScript już wie, że isNote jest dozwolone
            { label: "Dodatkowo", price: "+ koszt kortu", isNote: true },
        ],
    },
    {
        category: "Turnieje",
        icon: Trophy,
        description: "Rywalizacja Americano / Mexicano.",
        items: [
            { label: "Wpisowe (2h gry)", price: "70 zł" },
        ],
    },
    {
        category: "Intro do Padla",
        icon: Zap,
        description: "Pierwsze kroki na korcie z instruktorem.",
        items: [
            { label: "Koszt zajęć", price: "15 zł" },
        ],
    },
];

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

export function Pricing() {
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
                        Przejrzyste zasady, brak ukrytych opłat. <br/>
                        <span className="text-sm text-gray-400 font-medium">Obowiązuje od 3 listopada</span>
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border ${plan.highlight ? 'border-blue-200 ring-2 ring-blue-50' : 'border-gray-100'}`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wide">
                                    Popularne
                                </div>
                            )}

                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-full ${plan.highlight ? 'bg-blue-100 text-[var(--color-primary)]' : 'bg-gray-100 text-gray-600'}`}>
                                    <plan.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-heading font-bold text-gray-900">
                                        {plan.category}
                                    </h3>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Teraz mapowanie nie potrzebuje skomplikowanego typowania inline, bo TypeScript zna typ z góry */}
                                {plan.items.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-600 font-medium text-sm">
                      {item.label}
                    </span>
                                        {/* Tutaj błąd zniknie, bo item ma zdefiniowane opcjonalne isNote */}
                                        <span className={`font-bold ${item.isNote ? 'text-sm text-gray-500' : 'text-lg text-[var(--color-primary)]'}`}>
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
                    ))}
                </motion.div>

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

            </div>
        </section>
    );
}