"use client";

import { motion } from "framer-motion";
import {
    Shirt,
    CalendarCheck,
    MapPin,
    Users,
    ArrowRight
} from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Skompletuj strój",
        description: "Nie potrzebujesz profesjonalnego sprzętu na start. Wystarczą wygodne sportowe buty (najlepiej z jasną podeszwą lub 'non-marking'), koszulka i spodenki. Rakietę i piłki wypożyczysz u nas w recepcji!",
        icon: Shirt,
        // Pamiętaj, aby dodać te zdjęcia do folderu public/steps/
        image: "/steps/gear.webp",
    },
    {
        id: 2,
        title: "Zarezerwuj kort",
        description: "Rezerwacja odbywa się online przez system Kluby.org. To proste: zakładasz konto, wybierasz godzinę i kort (kryty lub otwarty). Nie musisz dzwonić!",
        icon: CalendarCheck,
        linkText: "Przejdź do rezerwacji",
        linkUrl: "https://kluby.org",
    },
    {
        id: 3,
        title: "Przyjdź do klubu",
        description: "Jesteśmy przy ul. Zamenhofa 17. Bądź 15 minut przed czasem. W recepcji odbierzesz wypożyczony sprzęt, a w szatni wygodnie się przebierzesz. Mamy prysznice!",
        icon: MapPin,
        image: "/steps/reception.webp",
    },
    {
        id: 4,
        title: "Znajdź ekipę",
        description: "Padel to sport dla 4 osób (2 vs 2). Masz partnera, ale brakuje pary? Dołącz do naszej grupy na Facebooku lub zapisz się na treningi grupowe, gdzie poznasz innych graczy.",
        icon: Users,
        image: "/steps/game.webp",
    },
];

export function Timeline() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* PIONOWA LINIA (OŚ) */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform md:-translate-x-1/2 z-0" />

                <div className="space-y-16 md:space-y-24">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`relative flex items-center md:justify-between ${
                                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            >

                                {/* 1. KÓŁKO Z NUMEREM/IKONĄ */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--color-primary)] text-white border-4 border-white shadow-xl">
                                    <step.icon size={24} className="md:w-8 md:h-8" />
                                </div>

                                {/* 2. TREŚĆ */}
                                <div className={`pl-20 md:pl-0 w-full md:w-[45%] ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-blue-600 bg-blue-50 rounded-full uppercase">
                    Krok {step.id}
                  </span>
                                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {step.description}
                                    </p>

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
                                </div>

                                {/* 3. WIZUALIZACJA (ZDJĘCIE) */}
                                <div className={`hidden md:block w-[45%] ${isEven ? "pl-12" : "pr-12"}`}>
                                    {step.image ? (
                                        <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-500">
                                            {/* Używamy <img> dla uproszczenia, ale docelowo warto użyć next/image z fill */}
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                // DODANO: object-top - to naprawia ucinanie głów
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