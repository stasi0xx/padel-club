"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "Czy padel jest trudny?",
        a: "Nie! To jeden z najłatwiejszych sportów rakietowych do nauki. Rakietka jest krótka (łatwiej trafić w piłkę), a ściany pomagają utrzymać piłkę w grze. Już po 15 minutach będziesz czerpać frajdę z gry."
    },
    {
        q: "Ilu graczy potrzebuję?",
        a: "Padel to gra deblowa, więc standardowo grają 4 osoby (2 na 2). Można grać 'pojedynki' (1 na 1) treningowo, ale prawdziwa gra to 4 osoby."
    },
    {
        q: "Jakie buty zabrać?",
        a: "Najważniejsza jest podeszwa. Najlepsza to tzw. 'jodełka' (herringbone), która zapewnia przyczepność na sztucznej trawie z piaskiem. Unikaj butów do biegania (słaba stabilizacja boczna)."
    },
    {
        q: "Co jeśli pada deszcz?",
        a: "Posiadamy korty w pełni kryte halą, więc pogoda nam niestraszna! Na kortach otwartych gramy, gdy nie pada."
    }
];

export function BeginnerFAQ() {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-[var(--color-primary)] rounded-full mb-4">
                        <HelpCircle size={24} />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-gray-900">
                        Częste pytania początkujących
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                        >
                            <h3 className="font-bold text-lg text-gray-900 mb-2">
                                {faq.q}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {faq.a}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}