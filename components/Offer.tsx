"use client";

import Link from "next/link";
import Image from "next/image";
import {
    CalendarDays,
    Users,
    Smile,
    Trophy,
    User,
    Medal,
    ShoppingBag,
    Briefcase
} from "lucide-react";
import { motion, Variants } from "framer-motion";

// Definicja danych - Pamiętaj, aby dodać zdjęcia do folderu public/offer/
const offerItems = [
    {
        title: "Wydarzenia",
        description: "Luźne rozgrywki i inne atrakcje",
        icon: CalendarDays,
        href: "/oferta/wydarzenia", // <--- ZMIANA
        image: "/offer/events.webp",
    },
    {
        title: "Eventy i Integracje",
        description: "Firmy, urodziny, catering i grill.",
        icon: Briefcase,
        href: "/oferta/biznes", // Linkuje do slug: "biznes"
        image: "/offer/biznes.webp", // Możesz tu dać inne zdjęcie, np. ludzie jedzący pizzę
    },
    {
        title: "Grupy Treningowe",
        description: "Regularne zajęcia dopasowane do poziomu.",
        icon: Users,
        href: "/oferta/treningi", // <--- ZMIANA
        image: "/offer/training.webp",
    },
    {
        title: "Padel dla Dzieci",
        description: "Nauka przez zabawę.",
        icon: Smile,
        href: "/oferta/dla-dzieci", // <--- ZMIANA
        image: "/offer/kids.webp",
    },
    {
        title: "Liga",
        description: "Długoterminowe rozgrywki z awansami.",
        icon: Trophy,
        href: "/oferta/liga", // <--- ZMIANA
        image: "/offer/league.webp",
    },
    {
        title: "Treningi Indywidualne",
        description: "Intensywna praca 1 na 1 z trenerem.",
        icon: User,
        href: "/oferta/treningi-indywidualne", // <--- ZMIANA
        image: "/offer/individual.webp",
    },
    {
        title: "Turnieje",
        description: "Walka o puchary i nagrody.",
        icon: Medal,
        href: "/oferta/turnieje", // <--- ZMIANA
        image: "/offer/tournament.webp",
    },
    {
        title: "Sklep",
        description: "Sprzęt i akcesoria na miejscu.",
        icon: ShoppingBag,
        href: "/oferta/sklep", // <--- ZMIANA
        image: "/offer/shop.webp",
    },
];

// Konfiguracja animacji (Framer Motion variants)
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Opóźnienie między pojawianiem się kolejnych kafelków
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 }, // Start: niewidoczny i przesunięty w dół
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

export function Offer() {
    return (
        <section className="py-24 bg-white" id="oferta" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 uppercase">
                        Nasza Oferta
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        W Gdynia Padel Club znajdziesz wszystko, czego potrzebujesz – od pierwszego odbicia po profesjonalne turnieje.
                    </p>
                </motion.div>

                {/* Kontener z animacją stagger (kaskadową) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }} // Animacja odpali się, gdy element wejdzie w widok
                    className="flex flex-wrap justify-center gap-6"
                >
                    {offerItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
                        >
                            <Link
                                href={item.href}
                                className="group relative flex flex-col justify-end h-80 p-8 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                            >
                                {/* TŁO - ZDJĘCIE */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Overlay przyciemniający - jaśnieje przy hoverze */}
                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />

                                    {/* Gradient od dołu, żeby tekst był zawsze czytelny */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                                </div>

                                {/* TREŚĆ (nad zdjęciem) */}
                                <div className="relative z-10 flex flex-col items-start h-full justify-end transform transition-transform duration-300 group-hover:-translate-y-2">
                                    {/* Ikona */}
                                    <div className="mb-4 text-white/80 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                        <item.icon size={36} strokeWidth={1.5} />
                                    </div>

                                    {/* Tytuł */}
                                    <h3 className="text-2xl font-heading font-bold text-white mb-2 uppercase tracking-wide">
                                        {item.title}
                                    </h3>

                                    {/* Opis - domyślnie lekko ukryty lub widoczny, tutaj robimy widoczny dla czytelności */}
                                    <p className="text-gray-200 text-sm leading-relaxed opacity-90">
                                        {item.description}
                                    </p>

                                    {/* Pasek ozdobny */}
                                    <div className="mt-4 h-1 w-12 bg-[var(--color-primary)] rounded-full group-hover:w-full transition-all duration-500" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}