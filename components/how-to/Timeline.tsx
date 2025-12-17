"use client";

import { motion } from "framer-motion";
import {
    Shirt,
    CalendarCheck,
    MapPin,
    Users,
    ArrowRight,
    GraduationCap,
    Smartphone
} from "lucide-react";

// Definicja danych z nową strukturą dla WhatsApp
const steps = [
    {
        id: 1,
        title: "Zapisz się na Intro",
        description: "To najlepszy sposób na start! Podczas zajęć wprowadzających trener wytłumaczy Ci zasady gry i pokaże podstawową technikę. Koszt to tylko 15 zł, a z kartą Multisport wchodzisz za darmo!",
        icon: GraduationCap, // Ikona edukacji
        linkText: "Zapisz się na Intro",
        linkUrl: "https://kluby.org/gdynia-padel-club/grafik", // Link do grafiku
        image: "/offer/training.webp", // Używamy zdjęcia treningowego
    },
    {
        id: 2,
        title: "Skompletuj strój",
        description: "Nie potrzebujesz profesjonalnego sprzętu na start. Wystarczą wygodne sportowe buty (najlepiej z jasną podeszwą), koszulka i spodenki. Rakietę i piłki wypożyczysz u nas w recepcji!",
        icon: Shirt,
        image: "/steps/gear.webp",
    },
    {
        id: 3,
        title: "Zbierz ekipę",
        description: "Szukasz sparingpartnerów? Dołącz do naszych społeczności na WhatsApp. Kliknij w kod QR lub zeskanuj go telefonem, aby dołączyć do odpowiedniej grupy.",
        icon: Users,
        // Nowe pole dla grup WhatsApp
        whatsappGroups: [
            { name: "Gdynia Padel", url: "https://chat.whatsapp.com/DCsVn93EXOBBhe0dlv17in?mode=hqrt2" },
            { name: "Turnieje Grupowe", url: "https://chat.whatsapp.com/HlvT8qSK6OxHwZm5z0TxFK?mode=hqrt2" },
            { name: "Kobiety", url: "https://chat.whatsapp.com/HtmGpXsoBhoBfUJ0rhVJA3?mode=hqrt2" },
        ]
    },
    {
        id: 4,
        title: "Przyjdź do klubu",
        description: "Jesteśmy przy ul. Zamenhofa 17. Bądź 15 minut przed czasem. W recepcji odbierzesz wypożyczony sprzęt, a w szatni wygodnie się przebierzesz. Do zobaczenia na korcie!",
        icon: MapPin,
        image: "/steps/reception.webp",
    },
];

export function Timeline() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* PIONOWA LINIA (OŚ) */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform md:-translate-x-1/2 z-0" />

                <div className="space-y-20 md:space-y-32">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`relative flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-0 ${
                                    isEven ? "" : "md:flex-row-reverse"
                                }`}
                            >

                                {/* 1. KÓŁKO Z NUMEREM/IKONĄ (Centralne) */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--color-primary)] text-white border-4 border-white shadow-xl">
                                    <step.icon size={24} className="md:w-8 md:h-8" />
                                </div>

                                {/* 2. TREŚĆ (Tekst) */}
                                <div className={`pl-20 md:pl-0 w-full md:w-[45%] ${isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                                    <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-blue-600 bg-blue-50 rounded-full uppercase">
                                        Krok {step.id}
                                    </span>
                                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {step.description}
                                    </p>

                                    {/* Link zwykły (jeśli jest) */}
                                    {step.linkUrl && (
                                        <a
                                            href={step.linkUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:underline ${isEven ? "md:flex-row-reverse" : ""}`}
                                        >
                                            {step.linkText} <ArrowRight size={16} />
                                        </a>
                                    )}

                                    {/* Kody QR WhatsApp (Specjalne dla kroku 3) */}
                                    {step.whatsappGroups && (
                                        <div className={`flex flex-wrap gap-4 mt-6 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                                            {step.whatsappGroups.map((group, i) => (
                                                <a
                                                    key={i}
                                                    href={group.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="group/qr flex flex-col items-center gap-2 p-2 bg-gray-50 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all text-center w-28"
                                                >
                                                    {/* Generowanie QR Code przez darmowe API (bezpieczne i szybkie) */}
                                                    <img
                                                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(group.url)}`}
                                                        alt={`QR ${group.name}`}
                                                        className="w-20 h-20 mix-blend-multiply opacity-80 group-hover/qr:opacity-100 transition-opacity"
                                                    />
                                                    <span className="text-[10px] font-bold text-gray-700 uppercase leading-tight group-hover/qr:text-green-700">
                                                        {group.name}
                                                    </span>
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* 3. WIZUALIZACJA (Zdjęcie lub Pusty blok dla balansu) */}
                                <div className={`hidden md:block w-[45%] ${isEven ? "pl-16" : "pr-16"}`}>
                                    {/* Jeśli krok ma grupy WhatsApp, nie wyświetlamy dużego zdjęcia, żeby nie robić bałaganu,
                                        chyba że chcesz zdjęcie w tle. Tutaj zostawiam puste miejsce lub zdjęcie jeśli zdefiniowane */}
                                    {step.whatsappGroups ? (
                                        <div className="relative h-64 bg-green-50 rounded-2xl border border-green-100 flex items-center justify-center overflow-hidden">
                                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/whatsapp.png')]"></div>
                                            <Smartphone size={64} className="text-green-500 opacity-50" />
                                            <p className="absolute bottom-4 text-green-700 font-bold text-sm uppercase tracking-widest">Społeczność</p>
                                        </div>
                                    ) : step.image ? (
                                        <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-500 border border-gray-100">
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>
                                    ) : (
                                        <div className="h-20" />
                                    )}
                                </div>

                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}