"use client";

import { useState } from "react";
import Image from "next/image";
import type { Trainer } from "@/data/offers";

export function TrainersGrid({ trainers }: { trainers: Trainer[] }) {
    // Stan przechowujący imię aktualnie klikniętego trenera
    const [activeTrainer, setActiveTrainer] = useState<string | null>(null);

    const handleTrainerClick = (name: string) => {
        // Jeśli kliknięto w już aktywnego trenera -> zamknij (null)
        // Jeśli w innego -> otwórz go
        setActiveTrainer(prev => prev === name ? null : name);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer) => {
                const isActive = activeTrainer === trainer.name;

                return (
                    <div
                        key={trainer.name}
                        onClick={() => handleTrainerClick(trainer.name)}
                        className="group relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full cursor-pointer"
                    >
                        <div className="relative aspect-[3/4] overflow-hidden">
                            {/* 1. ZDJĘCIE TŁA */}
                            <Image
                                src={trainer.image}
                                alt={trainer.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            {/* 2. CIEMNY OVERLAY */}
                            {/* Działa na hover LUB gdy isActive jest true */}
                            <div
                                className={`absolute inset-0 bg-black/0 transition-all duration-500 z-30 
                  group-hover:bg-black/80 ${isActive ? 'bg-black/80' : ''}`}
                            />

                            {/* 3. STAŁY GRADIENT NA DOLE */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 z-10" />

                            {/* 4. OPIS */}
                            {/* Pojawia się na hover LUB gdy isActive jest true */}
                            {trainer.description && (
                                <div
                                    className={`absolute inset-0 flex items-center justify-center p-6 text-center z-40 transition-all duration-500 delay-100 transform 
                    group-hover:opacity-100 group-hover:translate-y-0
                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                >
                                    <p className="text-white text-sm md:text-base font-medium leading-relaxed drop-shadow-md">
                                        {trainer.description}
                                    </p>
                                </div>
                            )}

                            {/* 5. IMIĘ I SPECJALIZACJE */}
                            {/* Znikają na hover LUB gdy isActive jest true */}
                            <div
                                className={`absolute bottom-0 left-0 w-full p-6 z-20 transition-opacity duration-300 
                  group-hover:opacity-0 
                  ${isActive ? 'opacity-0' : 'opacity-100'}`}
                            >
                                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 uppercase drop-shadow-sm">
                                    {trainer.name}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {trainer.specialties.map((spec, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-block px-2 py-1 bg-[var(--color-primary)]/90 backdrop-blur-md text-white text-xs font-bold rounded uppercase tracking-wide shadow-sm"
                                        >
                      {spec}
                    </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    );
}