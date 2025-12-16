"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, User, Users } from "lucide-react";
import type { ScheduleItem } from "@/app/actions/schedule-actions";
import Link from "next/link"; // Importujemy typ

// Interfejs propsów
interface TrainingScheduleProps {
    scheduleData: ScheduleItem[];
}

const daysOrder = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

export function TrainingSchedule({ scheduleData }: TrainingScheduleProps) {
    // Domyślny dzień to pierwszy, który ma jakieś zajęcia, albo Poniedziałek
    const initialDay = daysOrder.find(d => scheduleData.some(e => e.day === d)) || "Poniedziałek";
    const [activeDay, setActiveDay] = useState<string>(initialDay);

    // Filtrujemy eventy dla aktywnego dnia
    const activeSchedule = scheduleData.filter(item => item.day === activeDay);

    return (
        <section className="py-12 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    Grafik Treningów Grupowych
                </h3>
                <p className="text-gray-500 mb-8">
                    Wybierz dzień tygodnia, aby sprawdzić dostępne grupy poziomu B i C.
                </p>

                {/* Nawigacja Dni */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {daysOrder.map((day) => {
                        const isActive = activeDay === day;
                        // Sprawdzamy czy w dany dzień są zajęcia w bazie
                        const hasEvents = scheduleData.some(e => e.day === day);

                        return (
                            <button
                                key={day}
                                onClick={() => setActiveDay(day)}
                                disabled={!hasEvents}
                                className={`
                                    px-4 py-2 rounded-full text-sm font-bold transition-all
                                    ${isActive
                                    ? "bg-[var(--color-primary)] text-white shadow-md transform scale-105"
                                    : hasEvents
                                        ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                        : "bg-gray-50 text-gray-300 cursor-not-allowed"
                                }
                                `}
                            >
                                {day}
                            </button>
                        );
                    })}
                </div>

                {/* Lista Treningów */}
                <div className="min-h-[300px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeDay}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-4"
                        >
                            {activeSchedule.length > 0 ? (
                                activeSchedule.map((event) => (
                                    <div
                                        key={event.id}
                                        className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-gray-50 rounded-2xl hover:bg-blue-50/50 transition-colors border border-gray-100 group"
                                    >
                                        <div className="flex items-start gap-4 mb-4 md:mb-0">
                                            {/* Godzina */}
                                            <div className="bg-white p-3 rounded-xl shadow-sm text-center min-w-[80px]">
                                                <span className="block text-lg font-black text-gray-900">{event.time}</span>
                                                <Clock size={14} className="mx-auto text-gray-400 mt-1" />
                                            </div>

                                            {/* Info */}
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className={`
                                                        text-xs font-bold px-2 py-0.5 rounded text-white
                                                        ${event.level.includes('B') ? 'bg-purple-600' : 'bg-green-600'}
                                                    `}>
                                                        POZIOM {event.level}
                                                    </span>
                                                    <h4 className="font-bold text-gray-900">{event.group_name}</h4>
                                                </div>

                                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                                    <Link href={'/oferta/treningi-indywidualne'} className="flex items-center gap-1">
                                                        <User size={14} /> {event.trainer}
                                                    </Link>
                                                    <span className="flex items-center gap-1 text-green-600 font-medium">
                                                        <Users size={14} /> {event.spots}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Button */}
                                        <a
                                            href="https://kluby.org/gdynia-padel-club/grafik"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-6 py-3 bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold rounded-xl hover:bg-[var(--color-primary)] hover:text-white transition-all text-sm text-center"
                                        >
                                            Zapisz się
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12 text-gray-400">
                                    Brak zaplanowanych treningów.
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}