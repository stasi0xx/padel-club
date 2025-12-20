"use client";

import { useState } from "react";
import { Product } from "@/app/actions/shop-actions";
import { ShoppingBag, ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function ProductCard({ item }: { item: Product }) {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    // Zabezpieczenie na wypadek gdyby images było nullem (np. stare dane)
    const images = item.images && item.images.length > 0 ? item.images : ['/placeholder.png'];

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        if (images.length > 1) {
            setCurrentImgIndex((prev) => (prev + 1) % images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation(); // Żeby nie klikało w link pod spodem
        if (images.length > 1) {
            setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    // Obsługa kliknięcia w konkretną kropkę
    const goToImage = (e: React.MouseEvent, index: number) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImgIndex(index);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col h-full"
        >
            {/* GALERIA */}
            <div className="relative h-72 bg-gray-50 overflow-hidden group/gallery">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImgIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 cursor-pointer"
                        onClick={nextImage} // Kliknięcie w zdjęcie przewija do przodu
                    >
                        <Image
                            src={images[currentImgIndex]}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Cena */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-gray-900 shadow-sm z-10 pointer-events-none">
                    <p>{item.price}zł</p>
                </div>

                {/* NAWIGACJA (Tylko gdy > 1 zdjęcie) */}
                {images.length > 1 && (
                    <>
                        {/* Strzałki (pojawiają się na hover na desktopie) */}
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full text-gray-800 opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-white z-20 hidden md:block"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full text-gray-800 opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-white z-20 hidden md:block"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* --- KROPECZKI (INDICATORS) --- */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => goToImage(e, idx)}
                                    className={`
                                        w-2 h-2 rounded-full transition-all duration-300 shadow-sm
                                        ${idx === currentImgIndex
                                        ? 'bg-gray-900 scale-125 w-4' // Aktywna kropka (szersza)
                                        : 'bg-white/60 hover:bg-white' // Nieaktywna
                                    }
                                    `}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* TREŚĆ (Nazwa, opis, przycisk) */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                    {item.name}
                </h3>
                {item.description && (
                    <p className="text-sm text-gray-500 mb-6 line-clamp-2">
                        {item.description}
                    </p>
                )}

                <div className="mt-auto">
                    {item.link ? (
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-[var(--color-primary)] transition-colors"
                        >
                            Zobacz produkt <ExternalLink size={16} />
                        </a>
                    ) : (
                        <a
                            href="/kontakt"
                            className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-900 font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors"
                        >
                            Zapytaj w recepcji
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

// Główny export bez zmian
export function ShopGrid({ products }: { products: Product[] }) {
    return (
        <section className="py-8">
            {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {products.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-3xl mb-12">
                    Aktualnie dodajemy nowe produkty do oferty. Zajrzyj wkrótce!
                </div>
            )}

            {/* CTA zostaje to samo co było */}
            <div className="bg-[var(--color-primary)] rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                <div className="relative z-10 max-w-2xl mx-auto">
                    <ShoppingBag size={48} className="mx-auto mb-6 text-blue-200" />
                    <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
                        Szukasz profesjonalnego sprzętu?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://www.padelboom.pl/" target="_blank" className="bg-white text-[var(--color-primary)] font-black py-4 px-8 rounded-xl hover:bg-blue-50 transition-transform hover:scale-105 flex items-center justify-center gap-2">
                            Przejdź do PadelBoom.pl <ArrowUpRight size={20} />
                        </a>
                        <a href="/kontakt" className="bg-blue-700 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-800 transition-colors">
                            Kontakt z recepcją
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}