"use client";

import { TrendingUp, Medal, CalendarClock, History } from "lucide-react";

export function LeagueInfo() {
    return (
        <section className="mb-16 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                    <History size={16} /> Ponad 3 lata tradycji
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                    Jak wygląda rywalizacja?
                </h3>
                <p className="text-gray-600">
                    Gdyńska Liga Padla to nie tylko mecze. To przemyślany system, który nagradza zaangażowanie i pozwala rywalizować w wyrównanych warunkach.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* KAFELEK 1: CZAS */}
                <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
                    <div className="bg-white w-16 h-16 mx-auto rounded-2xl flex items-center justify-center shadow-sm mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                        <CalendarClock size={32} />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Elastyczny Terminarz</h4>
                    <p className="text-sm text-gray-600">
                        Runda trwa ok. 1.5 - 2 miesiące. Sami umawiacie się z rywalami i rezerwujecie kort w dogodnym terminie.
                    </p>
                </div>

                {/* KAFELEK 2: PUNKTACJA (Dostosowane do Twojego opisu) */}
                <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
                    <div className="bg-white w-16 h-16 mx-auto rounded-2xl flex items-center justify-center shadow-sm mb-4 text-yellow-500 group-hover:scale-110 transition-transform">
                        <Medal size={32} />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">System 25 / 5 pkt</h4>
                    <p className="text-sm text-gray-600">
                        Każdy set ma znaczenie. Max 25 pkt za wygraną 3:0, ale nawet przy przegranej 0:3 otrzymujecie 5 pkt za walkę.
                    </p>
                </div>

                {/* KAFELEK 3: RANKING PFP */}
                <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
                    <div className="bg-white w-16 h-16 mx-auto rounded-2xl flex items-center justify-center shadow-sm mb-4 text-green-600 group-hover:scale-110 transition-transform">
                        <TrendingUp size={32} />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Ranking PFP</h4>
                    <p className="text-sm text-gray-600">
                        Twoje wyniki liczą się nie tylko w klubie. Zbierasz punkty do oficjalnego rankingu Polskiej Federacji Padla.
                    </p>
                </div>
            </div>
        </section>
    );
}