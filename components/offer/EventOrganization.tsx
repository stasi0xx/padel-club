"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Users, PartyPopper, Flame, Phone, Mail, Briefcase, Check, Copy } from "lucide-react";

const occasions = [
    {
        title: "Integracje Firmowe",
        desc: "Zbuduj zespół na korcie. Padel jest łatwy do nauki, więc bawią się wszyscy – od stażysty po prezesa. Organizujemy turnieje wewnętrzne z sędzią.",
        icon: Briefcase,
        color: "bg-blue-50 text-blue-700"
    },
    {
        title: "Urodziny i Rocznice",
        desc: "Nietypowy pomysł na świętowanie. Aktywność fizyczna, a potem zasłużony relaks przy jedzeniu i napojach w naszej strefie chillout.",
        icon: PartyPopper,
        color: "bg-pink-50 text-pink-700"
    },
    {
        title: "Spotkania Biznesowe",
        desc: "Mniej formalnie niż w sali konferencyjnej. Przełam lody na korcie, a potem dobij targu przy kawie.",
        icon: Users,
        color: "bg-gray-50 text-gray-700"
    }
];

export function EventOrganization() {
    // Stan do obsługi powiadomienia o skopiowaniu
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("recepcja@gdyniapadelclub.pl");
        setCopied(true);
        // Resetujemy stan po 2 sekundach
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="space-y-16">

            {/* SEKCJA 1: OKAZJE */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {occasions.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all"
                    >
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.color}`}>
                            <item.icon size={28} />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* SEKCJA 2: CATERING (PARTNERZY) */}
            <div className="bg-gray-900 rounded-3xl overflow-hidden relative text-white">
                <div className="absolute top-0 right-0 p-32 bg-[var(--color-primary)] opacity-20 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 text-yellow-400">
                            <Utensils size={16} /> Strefa Gastro
                        </div>
                        <h3 className="text-3xl md:text-4xl font-heading font-black mb-6">
                            Po wysiłku <br />czas na nagrodę.
                        </h3>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Nie martw się o jedzenie. Współpracujemy z najlepszymi lokalami w Gdyni, aby dostarczyć Wam catering na najwyższym poziomie.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                                <div className="bg-red-500/20 p-3 rounded-lg text-red-400">
                                    <Utensils size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Pasta Miasta & Czerwony Piec</h4>
                                    <p className="text-sm text-gray-400">Włoska pizza i pasty od naszych partnerów.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                                <div className="bg-orange-500/20 p-3 rounded-lg text-orange-400">
                                    <Flame size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Strefa Grill</h4>
                                    <p className="text-sm text-gray-400">W sezonie letnim odpalamy ruszt. Klimat nie do podrobienia.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA KONTAKTOWE WEWNĄTRZ SEKCJI */}
                    <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
                        <h4 className="text-2xl font-heading font-bold mb-2">Zaplanuj imprezę</h4>
                        <p className="text-gray-500 mb-8 text-sm">
                            Skontaktuj się z managerem, aby ustalić termin i menu. Przygotujemy ofertę "szytą na miarę".
                        </p>

                        <div className="space-y-4">
                            {/* PRZYCISK TELEFONU */}
                            <a href="tel:+48123456789" className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 border border-gray-100 transition-colors group">
                                <div className="bg-blue-50 text-[var(--color-primary)] p-3 rounded-full group-hover:scale-110 transition-transform shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-400 font-bold uppercase">Zadzwoń do nas</span>
                                    <span className="block text-lg font-bold text-gray-900">+48 123 456 789</span>
                                </div>
                            </a>

                            {/* NOWY PRZYCISK MAILA (COPY TO CLIPBOARD) */}
                            <button
                                onClick={handleCopyEmail}
                                className="w-full relative flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 border border-gray-100 transition-all group text-left overflow-hidden"
                            >
                                {/* NAKŁADKA SUKCESU */}
                                <AnimatePresence>
                                    {copied && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 bg-green-500 z-20 flex items-center justify-center gap-2 text-white font-bold"
                                        >
                                            <Check size={24} />
                                            Skopiowano do schowka!
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="bg-purple-50 text-purple-600 p-3 rounded-full group-hover:scale-110 transition-transform shrink-0">
                                    <Mail size={20} />
                                </div>

                                {/* min-w-0 jest kluczowe dla flexboxa, żeby tekst się skracał/łamał */}
                                <div className="min-w-0 flex-1">
                                    <span className="block text-xs text-gray-400 font-bold uppercase">Napisz maila</span>
                                    {/* break-all zapewnia, że długi mail nie wyjdzie poza kontener */}
                                    <span className="block text-lg font-bold text-gray-900 break-all leading-tight">
                                        recepcja@gdyniapadelclub.pl
                                    </span>
                                </div>

                                <Copy size={18} className="text-gray-300 group-hover:text-purple-500 transition-colors shrink-0" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}