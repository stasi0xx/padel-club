"use client";

import { ScheduleItem } from "@/app/actions/schedule-actions";
import { CalendarDays, Clock, MapPin, User } from "lucide-react";

interface KidsScheduleProps {
    scheduleData: ScheduleItem[];
}

export function KidsSchedule({ scheduleData }: KidsScheduleProps) {
    // Filtrujemy tylko zajęcia Junior
    const kidsEvents = scheduleData.filter(item => item.level === "Junior");

    // Sortujemy dni
    const daysOrder = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
    const sortedEvents = kidsEvents.sort((a, b) => {
        return daysOrder.indexOf(a.day) - daysOrder.indexOf(b.day);
    });

    return (
        <section className="bg-yellow-50 rounded-3xl p-8 border border-yellow-100 relative overflow-hidden">
            {/* Dekoracja tła */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-yellow-200 rounded-full opacity-50 blur-3xl" />

            <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    Sekcja Juniora – Grafik
                </h3>
                <p className="text-gray-600 mb-8">
                    Zajęcia prowadzone przez certyfikowanych trenerów z podejściem pedagogicznym.
                </p>

                {sortedEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {sortedEvents.map((event) => (
                            <div key={event.id} className="bg-white p-4 rounded-2xl shadow-sm flex flex-col justify-between border border-yellow-100/50 hover:border-yellow-300 transition-colors">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-bold text-[var(--color-primary)] bg-blue-50 px-3 py-1 rounded-full text-sm">
                                            {event.day}
                                        </span>
                                        <div className="flex items-center gap-1 text-gray-900 font-black text-lg">
                                            <Clock size={18} className="text-gray-400" />
                                            {event.time}
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-gray-800 text-lg mb-1">{event.group_name}</h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                        <User size={14} /> Trener: {event.trainer}
                                    </div>
                                </div>

                                <a
                                    href="https://kluby.org/gdynia-padel-club/wydarzenia"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full text-center py-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-yellow-950 font-bold transition-colors text-sm"
                                >
                                    Zapisz Dziecko
                                </a>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-white/50 rounded-2xl border border-dashed border-gray-300">
                        <p className="text-gray-500 font-medium">Aktualnie ustalamy grafik na nowy semestr.</p>
                        <p className="text-sm text-gray-400">Skontaktuj się z recepcją.</p>
                    </div>
                )}
            </div>
        </section>
    );
}