"use client";

import Link from "next/link";
import Image from "next/image";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Instagram,
    Facebook,
    ExternalLink
} from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#111] text-gray-400 border-t border-gray-900 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* KOLUMNA 1: BRAND & INFO (4 cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="flex items-center gap-3">
                                {/* Logo - używamy tego samego co w navbarze, ale może być np. wersja biała jeśli masz */}
                                {/* Na ciemnym tle logo SVG powinno wyglądać dobrze, jeśli tekst jest częścią SVG i jest czarny - może być słabo widoczny.
                     Zakładam, że logo GPC ma białe elementy lub dodam brightness-0 invert dla białego logo,
                     ale bezpieczniej zostawić oryginał lub użyć filtra CSS, żeby "wybielić" logo jeśli jest czarne.
                 */}
                                <Image
                                    src="/logo.svg"
                                    alt="Gdynia Padel Club"
                                    width={150}
                                    height={60}
                                    className="h-12 w-auto opacity-90" // Trikiem CSS robimy logo białym (jeśli jest czarne)
                                />
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs text-gray-500">
                            Pierwszy klub padlowy w Gdyni. Profesjonalne korty, szkolenia i niesamowita atmosfera. Dołącz do gry!
                        </p>

                        {/* Social Media */}
                        <div className="flex gap-4 pt-2">
                            <a
                                href="https://www.instagram.com/gdynia_padel_club/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100070520303087" // Uzupełnij jeśli mają FB
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* KOLUMNA 2: SZYBKIE LINKI (2 cols) */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-white font-bold uppercase tracking-wider text-sm">Nawigacja</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/jak-zaczac" className="hover:text-[var(--color-primary)] transition-colors">
                                    Jak zacząć?
                                </Link>
                            </li>
                            <li>
                                <Link href="/cennik" className="hover:text-[var(--color-primary)] transition-colors">
                                    Cennik
                                </Link>
                            </li>
                            <li>
                                <Link href="/regulamin" className="hover:text-[var(--color-primary)] transition-colors">
                                    Regulamin
                                </Link>
                            </li>
                            <li>
                                <a href="https://kluby.org/gdynia-padel-club/rezerwacje" target="_blank" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2">
                                    Rezerwacja <ExternalLink size={12} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* KOLUMNA 3: KONTAKT (3 cols) */}
                    <div className="lg:col-span-3 space-y-6">
                        <h3 className="text-white font-bold uppercase tracking-wider text-sm">Kontakt</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="flex-shrink-0 text-[var(--color-primary)] mt-0.5" size={18} />
                                <span className="text-gray-400">
                  ul. Zamenhofa 17,<br />81-118 Gdynia
                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="flex-shrink-0 text-[var(--color-primary)]" size={18} />
                                <a href="tel:534044544" className="hover:text-white transition-colors">
                                    +48 534 044 544
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="flex-shrink-0 text-[var(--color-primary)]" size={18} />
                                <a href="mailto:kontakt@gdyniapadelclub.pl" className="hover:text-white transition-colors">
                                    kontakt@gdyniapadelclub.pl
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="flex-shrink-0 text-[var(--color-primary)] mt-0.5" size={18} />
                                <div>
                                    <span className="block text-white">Godziny otwarcia:</span>
                                    <span className="text-xs">Codziennie: 06:00 - 24:00</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* KOLUMNA 4: MAPA (3 cols) */}
                    <div className="lg:col-span-3 h-64 lg:h-auto rounded-xl overflow-hidden bg-gray-800 relative shadow-inner border border-gray-800">
                        {/* iframe Google Maps */}
                        <iframe
                            src="https://maps.google.com/maps?q=Gdynia+ul.+Zamenhofa+17&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(80%)" }} // Stylizacja mapy na ciemną/szarą
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500"
                        ></iframe>

                        {/* Przycisk "Jak dojechać" na mapie */}
                        <a
                            href="https://www.google.com/maps/dir//ul.+Zamenhofa+17,+81-118+Gdynia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-black text-xs font-bold py-2 rounded text-center hover:bg-[var(--color-primary)] hover:text-white transition-colors shadow-lg uppercase tracking-wide"
                        >
                            Wyznacz trasę
                        </a>
                    </div>

                </div>
            </div>

            {/* COPYRIGHT BAR */}
            <div className="bg-black border-t border-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>© {currentYear} Gdynia Padel Club. Wszelkie prawa zastrzeżone. Design & Maintenance by Stanisław Korycki </p>
                    <div className="flex gap-6">
                        <Link href="/polityka-prywatnosci" className="hover:text-gray-400">Polityka Prywatności</Link>
                        <Link href="/admin/add" className="hover:text-gray-400">Logowanie</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}