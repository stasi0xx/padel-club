"use client";

import { motion } from "framer-motion";
import { Zap, Target, Brain, ArrowUpRight, Clock, Shield } from "lucide-react";

const benefits = [
    {
        title: "100% Uwagi Trenera",
        description: "Każda minuta treningu jest dla Ciebie. Trener koryguje każdy ruch, ustawienie stóp i chwyt rakiety w czasie rzeczywistym.",
        icon: Target,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Szybki Progres",
        description: "Jeden trening indywidualny daje tyle, co 3-4 treningi grupowe. Eliminujemy błędy zanim staną się nawykiem.",
        icon: Zap,
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        title: "Elastyczny Grafik",
        description: "To Ty decydujesz, kiedy grasz. Dopasowujemy terminy do Twojego kalendarza, rano czy wieczorem.",
        icon: Clock,
        color: "bg-purple-100 text-purple-600",
    }
];

const focusAreas = [
    { name: "Technika Uderzeń", desc: "Vibora, Bandeja, Bajada" },
    { name: "Gra o Szyby", desc: "Obrona i kontratak" },
    { name: "Taktyka Meczowa", desc: "Pozycjonowanie na korcie" },
    { name: "Mental", desc: "Pewność siebie w grze na punkty" }
];

export function IndividualTraining() {
    return (
        <section className="py-8">
            {/* KORZYŚCI - GRID */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-heading font-black text-gray-900 mb-4 uppercase tracking-tight">
                    Treningi <span className="text-[var(--color-primary)]">1 na 1</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                    Maksymalne skupienie, indywidualny plan i najszybsza droga do mistrzostwa.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {benefits.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                    >
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                            <item.icon size={24} />
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* OBSZARY PRACY - LISTA POZIOMA */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-gray-900">
                            Nad czym pracujemy?
                        </h3>
                        <p className="text-gray-500">Program dopasowany do Twoich celów.</p>
                    </div>
                    {/* Dekoracyjna ikona */}
                    <Brain size={48} className="text-gray-200 hidden md:block" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    {focusAreas.map((area, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 flex flex-col justify-center shadow-sm">
                            <h5 className="font-bold text-gray-900 flex items-center gap-2 mb-1">
                                <ArrowUpRight size={16} className="text-[var(--color-primary)]" />
                                {area.name}
                            </h5>
                            <p className="text-xs text-gray-500 pl-6">{area.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}