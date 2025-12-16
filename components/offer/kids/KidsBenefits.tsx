"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Brain, Smile, Users } from "lucide-react";

const benefits = [
    {
        title: "Bezpieczny Sport",
        description: "Padel jest bezkontaktowy, a kort otoczony szybami. To jeden z najmniej urazowych sportów rakietowych.",
        icon: ShieldCheck,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Rozwój Motoryki",
        description: "Poprawia koordynację ręka-oko, refleks i ogólną sprawność fizyczną w naturalny sposób.",
        icon: Brain,
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        title: "Praca w Grupie",
        description: "Uczymy gry w parze, komunikacji i zasad fair play. Budujemy przyjaźnie na korcie.",
        icon: Users,
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Czysta Frajda",
        description: "Dzięki mniejszej rakiecie i łatwiejszej technice, dzieci czerpią radość z gry już od pierwszych zajęć.",
        icon: Smile,
        color: "bg-orange-100 text-orange-600",
    },
];

export function KidsBenefits() {
    return (
        <section className="py-8">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
                Dlaczego Padel to super wybór?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center"
                    >
                        <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${item.color}`}>
                            <item.icon size={28} />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}