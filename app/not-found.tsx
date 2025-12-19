import Link from "next/link";
import { ArrowLeft, CalendarCheck } from "lucide-react"; // Ikony, które już masz w projekcie

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">

            {/* Ozdobny tekst w tle */}
            <h1 className="text-[10rem] md:text-[14rem] font-black text-gray-200 leading-none select-none">
                404
            </h1>

            <div className="relative z-10 -mt-12 md:-mt-20 space-y-6 max-w-2xl mx-auto">

                {/* Nagłówek tematyczny */}
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900">
                    Ups! Piłka wylądowała na aucie.
                </h2>

                {/* Wyjaśnienie */}
                <p className="text-lg text-gray-600 md:text-xl font-light">
                    Strona, której szukasz, nie istnieje lub została przeniesiona.
                    Nie trać czasu na błądzenie – wracaj na kort!
                </p>

                {/* Przyciski CTA (Call to Action) */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">

                    {/* Przycisk powrotu */}
                    <Link
                        href="/"
                        className="group flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 text-gray-900 font-bold rounded-full hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all shadow-sm"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Wróć do strony głównej
                    </Link>

                    {/* Przycisk rezerwacji (Ratujemy konwersję!) */}
                    <a
                        href="https://kluby.org/gdynia-padel-club/rezerwacje"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-blue-500/30"
                    >
                        <CalendarCheck size={20} />
                        Rezerwuj kort
                    </a>
                </div>
            </div>

            {/* Mały branding na dole */}
            <div className="absolute bottom-8 text-sm text-gray-400">
                Gdynia Padel Club
            </div>
        </div>
    );
}