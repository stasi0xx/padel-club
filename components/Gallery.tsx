"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

// Lista zdjęć - upewnij się, że masz pliki w folderze public/gallery/
const galleryImages = [
    { src: "/gallery/1.webp", alt: "Rozgrywki na korcie centralnym" },
    { src: "/gallery/2.webp", alt: "Trening z trenerem" },
    { src: "/gallery/3.webp", alt: "Strefa chillout" },
    { src: "/gallery/4.webp", alt: "Turniej świąteczny" },
    { src: "/gallery/5.webp", alt: "Padel dla dzieci" },
    { src: "/gallery/6.webp", alt: "Emocje sportowe" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 }
    },
};

export function Gallery() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Nagłówek */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                >
                    <div className="text-left">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-2 uppercase">
                            Galeria Klubu
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Zobacz, jak wygląda gra w Gdynia Padel Club.
                        </p>
                    </div>

                    {/* Link do Instagrama jako CTA */}
                    <a
                        href="https://www.instagram.com/gdynia_padel_club/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 text-[var(--color-primary)] font-bold hover:text-[var(--color-primary-hover)] transition-colors"
                    >
                        <Instagram size={20} />
                        Obserwuj nas na Instagramie
                    </a>
                </motion.div>

                {/* Grid Zdjęć */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                >
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative aspect-[4/3] md:aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-sm cursor-pointer"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay przy hoverze */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                            {/* Opcjonalnie: Ikona Instagrama pojawiająca się na środku */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Instagram className="text-white drop-shadow-md" size={48} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Przycisk mobile (widoczny tylko na małych ekranach) */}
                <div className="mt-8 md:hidden text-center">
                    <a
                        href="https://www.instagram.com/gdynia_padel_club/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-bold text-sm"
                    >
                        <Instagram size={18} />
                        Więcej zdjęć na Instagramie
                    </a>
                </div>

            </div>
        </section>
    );
}