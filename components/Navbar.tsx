"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
    { name: "Jak zacząć", href: "/jak-zaczac" },
    {name: "Usługi", href: "/#oferta"},
    { name: "Aktualności", href: "/aktualnosci" },
    { name: "Regulamin", href: "/regulamin" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* LOGO */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.svg"
                                alt="Gdynia Padel Club"
                                // Ustawiamy szerokość/wysokość 'intrinsic' (wewnętrzną) dość dużą,
                                // ale CSS (klasy niżej) i tak wymusi odpowiedni rozmiar wyświetlania.
                                width={200}
                                height={80}
                                // priority - ważne dla LCP (Largest Contentful Paint), bo logo jest widoczne od razu
                                priority
                                // h-16 (64px) to spory rozmiar w pasku h-20.
                                // w-auto zachowuje proporcje logo.
                                className="h-16 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors uppercase tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Przycisk Rezerwacji - CTA */}
                        <a
                            href="https://kluby.org/gdynia-padel-club/rezerwacje"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide transition-all shadow-lg hover:shadow-blue-500/30"
                        >
                            Rezerwuj Kort
                        </a>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-[var(--color-primary)] focus:outline-none"
                            aria-label="Otwórz menu"
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl">
                    <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-lg font-bold text-gray-800 hover:text-[var(--color-primary)] uppercase"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://kluby.org/gdynia-padel-club/rezerwacje"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 w-full text-center bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-4 rounded-full font-bold uppercase text-lg shadow-md"
                        >
                            Rezerwuj Kort
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}