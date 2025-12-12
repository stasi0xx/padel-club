"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowDownToLine,
    Grid,
    Trophy,
    RefreshCw,
    CheckCircle2,
    XCircle
} from "lucide-react";

const rules = [
    {
        id: "service",
        label: "Serwis",
        icon: ArrowDownToLine,
        title: "Serwis z dołu i po przekątnej",
        content: (
            <div className="space-y-4">
                <p>W padlu, w przeciwieństwie do tenisa, serwujemy <strong>z dołu</strong> (piłka uderzana na wysokości pasa lub niżej). Serwis musi być wykonany po koźle.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2"><CheckCircle2 className="text-green-500 w-5 h-5" /> Piłka musi trafić w pole serwisowe po przekątnej.</li>
                    <li className="flex gap-2"><CheckCircle2 className="text-green-500 w-5 h-5" /> Po odbiciu piłka nie może uderzyć w siatkę ogrodzeniową (to błąd).</li>
                    <li className="flex gap-2"><CheckCircle2 className="text-green-500 w-5 h-5" /> Masz dwie próby (pierwszy i drugi serwis).</li>
                </ul>
            </div>
        ),
        visual: (
            // Schematyczny rysunek kortu w CSS
            <div className="relative w-full h-48 bg-blue-500 rounded-lg border-2 border-white overflow-hidden flex flex-col items-center justify-center p-4">
                <div className="absolute inset-x-0 top-1/2 h-1 bg-white/50"></div> {/* Siatka */}
                <div className="absolute inset-y-0 left-1/2 w-1 bg-white/30"></div> {/* Linia środkowa */}

                {/* Strzałka serwisu */}
                <motion.div
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute w-full h-full"
                >
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <path d="M 20 80 Q 50 20 80 20" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                        <circle cx="20" cy="80" r="2" fill="yellow" /> {/* Gracz */}
                        <circle cx="80" cy="20" r="2" fill="white" /> {/* Cel */}
                    </svg>
                </motion.div>
                <span className="absolute bottom-2 left-2 text-xs text-white font-bold opacity-80">Gracz A</span>
                <span className="absolute top-2 right-2 text-xs text-white font-bold opacity-80">Pole Rywala</span>
            </div>
        )
    },
    {
        id: "walls",
        label: "Ściany i Siatki",
        icon: Grid,
        title: "Szyba jest Twoim przyjacielem",
        content: (
            <div className="space-y-4">
                <p>To esencja padla! Piłka może odbić się od szklanych ścian, co pozwala utrzymać ją w grze dłużej.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                        <h4 className="font-bold text-green-700 mb-1">Można:</h4>
                        <p>Odbić piłkę o WŁASNĄ szybę, aby przelobować rywala.</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                        <h4 className="font-bold text-red-700 mb-1">Nie można:</h4>
                        <p>Uderzyć piłką bezpośrednio w ścianę rywala (musi najpierw dotknąć kortu).</p>
                    </div>
                </div>
                <p className="text-xs text-gray-500 italic mt-2">Uwaga: Siatka metalowa (ogrodzenie) jest "martwa" przy serwisie, ale w trakcie gry piłka może się od niej odbić (nieregularnie!).</p>
            </div>
        ),
        visual: (
            <div className="relative w-full h-48 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 border-8 border-blue-400 opacity-30"></div> {/* Szyby */}
                <motion.div
                    animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_10px_yellow]"
                />
                <span className="absolute bottom-4 text-white text-sm font-bold">Gra od ściany</span>
            </div>
        )
    },
    {
        id: "scoring",
        label: "Punktacja",
        icon: Trophy,
        title: "Liczymy tak jak w tenisie",
        content: (
            <div className="space-y-4">
                <p>System punktowy jest identyczny jak na Wimbledonie:</p>
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl font-mono text-lg font-bold text-gray-700">
                    <span>0</span>
                    <span>15</span>
                    <span>30</span>
                    <span>40</span>
                    <span className="text-[var(--color-primary)]">GEM</span>
                </div>
                <p className="text-sm">
                    <strong>Złota Piłka (Golden Point):</strong> W wielu turniejach przy stanie 40-40 nie gramy "na przewagi", lecz decyduje jeden punkt. Odbierający wybiera stronę serwisu.
                </p>
            </div>
        ),
        visual: (
            <div className="relative w-full h-48 bg-white border-2 border-gray-100 rounded-lg flex items-center justify-center">
                <Trophy size={64} className="text-yellow-400 drop-shadow-lg" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    GEM, SET, MECZ
                </div>
            </div>
        )
    },
    {
        id: "changes",
        label: "Zmiany stron",
        icon: RefreshCw,
        title: "Dynamika i fair play",
        content: (
            <div className="space-y-4">
                <p>Strony kortu zmieniamy, gdy suma gemów w secie jest nieparzysta (np. 1:0, 2:1, 4:3).</p>
                <p className="text-sm text-gray-600">
                    Podczas tie-breaka zmiany następują co 6 rozegranych punktów. Padel to gra dżentelmenów – piłki sporne zawsze powtarzamy (tzw. "let").
                </p>
            </div>
        ),
        visual: (
            <div className="relative w-full h-48 bg-gray-50 rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
                <RefreshCw size={48} className="text-gray-400 animate-spin-slow" />
            </div>
        )
    }
];

export function PadelRules() {
    const [activeTab, setActiveTab] = useState(rules[0].id);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 uppercase">
                        Zasady Gry w Pigułce
                    </h2>
                    <p className="text-gray-600">
                        Wybierz temat, aby poznać szczegóły.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEWA KOLUMNA - NAVIGACJA (TABS) */}
                    <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
                        {rules.map((rule) => (
                            <button
                                key={rule.id}
                                onClick={() => setActiveTab(rule.id)}
                                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 min-w-[160px] lg:min-w-0 ${
                                    activeTab === rule.id
                                        ? "bg-[var(--color-primary)] text-white shadow-lg scale-105"
                                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                }`}
                            >
                                <rule.icon size={24} className={activeTab === rule.id ? "text-white" : "text-gray-400"} />
                                <span className="font-bold whitespace-nowrap lg:whitespace-normal">{rule.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* PRAWA KOLUMNA - TREŚĆ */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            {rules.map((rule) => (
                                rule.id === activeTab && (
                                    <motion.div
                                        key={rule.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center"
                                    >
                                        {/* Tekst */}
                                        <div className="flex-1 space-y-4">
                                            <h3 className="text-2xl font-heading font-bold text-[var(--color-primary)]">
                                                {rule.title}
                                            </h3>
                                            <div className="text-gray-600 leading-relaxed">
                                                {rule.content}
                                            </div>
                                        </div>

                                        {/* Wizualizacja / Obrazek */}
                                        <div className="w-full md:w-1/3 flex-shrink-0">
                                            {rule.visual}
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
}