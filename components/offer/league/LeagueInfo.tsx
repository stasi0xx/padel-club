"use client";

import { TrendingUp, Medal, CalendarClock } from "lucide-react";

export function LeagueInfo() {
    return (
        <section className="mb-16 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                    Jak wygląda rywalizacja?
                </h3>
                <p className="text-gray-600">
                    Nasz system ligowy to coś więcej niż sparigni. To struktura, która motywuje do regularnego rozwoju.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="bg-white w-16 h-16 mx-auto rounded-2xl flex items-center justify-center shadow-sm mb-4 text-blue-600">
                        <CalendarClock size={32} />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Cykl 2 Miesiące</h4>
                    <p className="text-sm text-gray-600">
                        Sezon trwa około 8 tygodni. Masz czas na rozegranie wszystkich meczów w dogodnych terminach.
                    </p>
                </div>

                <div className="text-center">
                    <div className="bg-white w-16 h-16 mx-auto rounded-2xl flex items-center justify-center shadow-sm mb-4 text-yellow-500">
                        <Medal size={32} />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Walka o Punkty</h4>
                    <p className="text-sm text-gray-600">
                        Każdy set i gem ma znaczenie. Wyniki wprowadzane są do systemu, który na żywo aktualizuje tabelę.
                    </p>
                </div>

                <div className="text-center">
                    <div className="bg-white w-16 h-16 mx-auto rounded-2xl flex items-center justify-center shadow-sm mb-4 text-green-600">
                        <TrendingUp size={32} />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Awanse i Spadki</h4>
                    <p className="text-sm text-gray-600">
                        Najlepsi z grupy awansują wyżej, słabsi spadają. Zawsze grasz z rywalami na swoim poziomie.
                    </p>
                </div>
            </div>
        </section>
    );
}