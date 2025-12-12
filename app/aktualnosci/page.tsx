import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Instagram, ArrowRight } from "lucide-react";
import { newsData } from "@/data/news"; // Import danych

export const metadata = {
    title: "Aktualności | Gdynia Padel Club",
    description: "Bądź na bieżąco z wydarzeniami w naszym klubie. Turnieje, wyniki, nowości.",
};

export default function NewsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">

            {/* HEADER PODSTRONY */}
            <section className="bg-primary text-white pt-32 pb-16 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-primary)] opacity-10"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight uppercase">
                        Aktualności
                    </h1>
                    <p className="text-xl text-gray-300 font-light">
                        Relacje z turniejów, ogłoszenia i życie klubu.
                    </p>
                </div>
            </section>

            {/* LISTA WSZYSTKICH NEWSÓW */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsData.map((item) => (
                            <a
                                key={item.id}
                                href={item.permalink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col h-full"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 flex items-center gap-2 shadow-sm">
                                        <Calendar size={12} className="text-[var(--color-primary)]" />
                                        {item.date}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                                        {item.excerpt}
                                    </p>
                                    <div className="text-[var(--color-primary)] text-sm font-bold uppercase tracking-wide flex items-center gap-2 mt-auto pt-4 border-t border-gray-50">
                                        Zobacz post <Instagram size={14} />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Opcjonalny przycisk na dole */}
                    <div className="mt-16 text-center">
                        <p className="text-gray-500 mb-4">Chcesz być na bieżąco?</p>
                        <a
                            href="https://www.instagram.com/gdynia_padel_club/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-bold hover:bg-[var(--color-primary-hover)] transition-colors shadow-lg"
                        >
                            <Instagram size={20} />
                            Zaobserwuj nas na Instagramie
                        </a>
                    </div>

                </div>
            </section>

        </main>
    );
}