"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Calendar } from "lucide-react";

// Taki kształt danych przychodzi zazwyczaj z API (np. Behold.so)
interface NewsItem {
    id: string;
    image: string;
    date: string;
    title: string; // W IG to często pierwsze zdanie z opisu
    excerpt: string; // Reszta opisu
    permalink: string; // Link do posta na IG
}

// DANE TYMCZASOWE (Symulacja API)
// Docelowo tutaj zrobisz: const news = await fetch('https://feed.behold.so/...')
const newsData: NewsItem[] = [
    {
        id: "1",
        image: "/news/mikolajki.jpg", // Musisz dodać zdjęcie
        date: "06.12.2024",
        title: "Mikołajkowe Mexicano!",
        excerpt: "Niesamowita atmosfera podczas turnieju mikołajkowego. Dziękujemy wszystkim za udział i gratulujemy zwycięzcom! Ho ho ho! 🎅",
        permalink: "https://instagram.com",
    },
    {
        id: "2",
        image: "/news/santa-coach.jpg", // Musisz dodać zdjęcie
        date: "05.12.2024",
        title: "Treningi z Mikołajem",
        excerpt: "Nasz trener Mariusz w specjalnym stroju dba o formę najmłodszych. Zapraszamy na zajęcia dla dzieci w każdy wtorek i czwartek.",
        permalink: "https://instagram.com",
    },
    {
        id: "3",
        image: "/news/turniej.jpg", // Musisz dodać zdjęcie
        date: "20.12.2023",
        title: "Wielki Turniej Świąteczny",
        excerpt: "Zapisy otwarte! Kategoria C, startujemy o 18:00. Pamiętajcie, że liczba miejsc jest ograniczona. Do wygrania sprzęt o wartości 1000 zł.",
        permalink: "https://instagram.com",
    }
];

export function News() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* NAGŁÓWEK */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 uppercase">
                            Aktualności
                        </h2>
                        <div className="w-24 h-1 bg-[var(--color-primary)] rounded-full" />
                        <p className="mt-4 text-gray-600 max-w-xl">
                            Bądź na bieżąco z życiem klubu. Turnieje, ligi i wydarzenia specjalne.
                        </p>
                    </div>

                    <a
                        href="https://www.instagram.com/gdynia_padel_club/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 text-[var(--color-primary)] font-bold hover:text-[var(--color-primary-hover)] transition-colors group"
                    >
                        <Instagram size={20} />
                        Zobacz więcej na Instagramie
                        <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* GRID AKTUALNOŚCI */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsData.map((item, index) => (
                        <motion.a
                            key={item.id}
                            href={item.permalink}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col h-full"
                        >
                            {/* ZDJĘCIE */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay daty */}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 flex items-center gap-2 shadow-sm">
                                    <Calendar size={12} className="text-[var(--color-primary)]" />
                                    {item.date}
                                </div>
                                {/* Ikona IG na hover */}
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Instagram className="text-white" size={40} />
                                </div>
                            </div>

                            {/* TREŚĆ */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                                    {item.excerpt}
                                </p>
                                <div className="text-[var(--color-primary)] text-sm font-bold uppercase tracking-wide flex items-center gap-2 mt-auto">
                                    Czytaj dalej <ArrowRight size={14} />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Przycisk mobile */}
                <div className="mt-10 md:hidden text-center">
                    <a
                        href="https://www.instagram.com/gdynia_padel_club/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg"
                    >
                        <Instagram size={18} />
                        Obserwuj nas na Instagramie
                    </a>
                </div>

            </div>
        </section>
    );
}