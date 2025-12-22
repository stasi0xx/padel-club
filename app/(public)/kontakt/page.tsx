import { Metadata } from "next";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Facebook,
    Instagram,
    Navigation,
    CreditCard
} from "lucide-react";

export const metadata: Metadata = {
    title: "Kontakt",
    description: "Skontaktuj się z nami. Sprawdź lokalizację kortów, numer telefonu i godziny otwarcia Gdynia Padel Club.",
};

export default function ContactPage() {
    return (
        <main className="pt-32 pb-16 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* NAGŁÓWEK */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-heading font-black text-gray-900 mb-6 uppercase tracking-tight">
                        Kontakt
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                        Masz pytania? Chcesz zarezerwować kort telefonicznie? Jesteśmy do Twojej dyspozycji.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEWA KOLUMNA: DANE KONTAKTOWE */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* Karta: Główne dane */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-2 h-8 bg-[var(--color-primary)] rounded-full"/>
                                Recepcja Klubu
                            </h3>

                            <div className="space-y-6">
                                {/* Telefon */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-2xl text-[var(--color-primary)]">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium mb-1">Zadzwoń do nas</p>
                                        <a href="tel:+48123456789" className="text-xl font-bold text-gray-900 hover:text-[var(--color-primary)] transition-colors">
                                            +48 534 044 544
                                        </a>
                                        <p className="text-xs text-gray-400 mt-1">Odbieramy w godzinach pracy klubu</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-2xl text-[var(--color-primary)]">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium mb-1">Napisz maila</p>
                                        <a href="mailto:recepcja@gdyniapadelclub.pl" className="text-lg font-bold text-gray-900 hover:text-[var(--color-primary)] transition-colors">
                                            recepcja@gdyniapadelclub.pl
                                        </a>
                                        <a href="mailto:gdyniapadelclub@gmail.com" className="text-lg font-bold text-gray-900 hover:text-[var(--color-primary)] transition-colors">
                                            gdyniapadelclub@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Adres */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-2xl text-[var(--color-primary)]">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium mb-1">Lokalizacja</p>
                                        <p className="text-lg font-bold text-gray-900 leading-tight">
                                            ul. Zamenhofa 17
                                        </p>
                                        <p className="text-gray-600">81-218 Gdynia</p>

                                        <a
                                            href="https://maps.app.goo.gl/k9uniQMVBRVg1GrM9"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] mt-3 hover:underline"
                                        >
                                            <Navigation size={16} /> Nawiguj
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Karta: Godziny otwarcia */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Clock className="text-gray-400" /> Godziny otwarcia
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Poniedziałek - Piątek</span>
                                    <span className="font-bold text-gray-900">07:00 - 23:00</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Sobota - Niedziela</span>
                                    <span className="font-bold text-gray-900">08:00 - 22:00</span>
                                </div>
                            </div>
                        </div>



                    </div>

                    {/* PRAWA KOLUMNA: MAPA */}
                    <div className="lg:col-span-7 flex flex-col gap-8">

                        {/* Mapa Google */}
                        <div className="bg-white rounded-3xl p-2 border border-gray-100 shadow-sm h-[500px] lg:h-full relative overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.8585326157468!2d18.480903512758623!3d54.53598967254407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda7f9a2207bdb%3A0xa1391a3457d6f49b!2sGDYNIA%20PADEL%20CLUB!5e0!3m2!1spl!2spl!4v1766155013025!5m2!1spl!2spl"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Wskazówka: Podmień link w src na swój z Google Maps (Udostępnij -> Umieść mapę) */}
                        </div>

                        {/* Social Media */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <a
                                href="https://facebook.com/twojklub"
                                target="_blank"
                                className="flex items-center justify-center gap-3 bg-[#1877F2] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
                            >
                                <Facebook size={24} /> Facebook
                            </a>
                            <a
                                href="https://instagram.com/twojklub"
                                target="_blank"
                                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
                            >
                                <Instagram size={24} /> Instagram
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}