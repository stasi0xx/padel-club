"use client";

import { CalendarDays, ArrowRight, Timer } from "lucide-react";
import Image from "next/image";
import { TournamentData } from "@/app/actions/tournament-actions"; // Import typu

// Komponent przyjmuje dane jako props
export function NextTournament({ data }: { data: TournamentData | null }) {

    // Jeśli brak danych lub flaga is_showcase jest false -> nie wyświetlamy nic
    if (!data || !data.is_showcase) return null;

    return (
        <section className="mb-16 relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 text-white border border-gray-800">
            {/* TŁO ZDJĘCIA */}
            <div className="absolute inset-0 opacity-40">
                <Image
                    src={data.image}
                    alt="Turniej tło"
                    fill
                    className="object-cover"
                />
            </div>

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />

            {/* TREŚĆ */}
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="space-y-6 max-w-2xl">
                    <div className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        <Timer size={14} /> Najbliższe wydarzenie
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase italic tracking-tight mb-2">
                            {data.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-6 text-gray-300 font-medium text-lg">
                            <span className="flex items-center gap-2">
                                <CalendarDays size={20} className="text-[var(--color-primary)]" />
                                {data.date}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                            <span>{data.time}</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm text-gray-400 uppercase font-bold tracking-wider">Kategorie:</p>
                        <div className="flex flex-wrap gap-2">
                            {data.categories.map((cat, i) => (
                                <span key={i} className="px-3 py-1 rounded-lg border border-white/20 bg-white/5 text-sm font-medium">
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="w-full md:w-auto flex flex-col gap-3 min-w-[250px]">
                    <div className="text-center mb-2">
                        <span className="text-green-400 font-bold uppercase tracking-wider text-sm">
                            ● {data.status}
                        </span>
                    </div>
                    <a
                        href={data.link}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white text-gray-900 hover:bg-gray-100 font-black text-center py-4 px-8 rounded-xl transition-transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        Zapisz się teraz <ArrowRight size={20} />
                    </a>
                    <p className="text-xs text-gray-500 text-center">
                        Wymagane konto w kluby.org
                    </p>
                </div>
            </div>
        </section>
    );
}