// app/aktualnosci/page.tsx
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, ImageIcon } from "lucide-react";
import { createClient } from "@/lib/supabase/server"; // Używamy Server Client

export const metadata = {
    title: "Aktualności | Gdynia Padel Club",
    description: "Bądź na bieżąco z wydarzeniami w naszym klubie.",
};

export default async function NewsPage() {
    const supabase = await createClient();

    // Pobieramy dane z bazy
    const { data: news } = await supabase
        .from('news')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <main className="min-h-screen flex flex-col bg-white">

            {/* Header bez zmian... */}
            <section className="bg-black text-white pt-32 pb-16 px-4 text-center relative overflow-hidden">
                {/* ... (kod headera z Twojego pliku) ... */}
                <div className="absolute inset-0 bg-[var(--color-primary)] opacity-10"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight uppercase">Aktualności</h1>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news?.map((item) => (
                            <Link
                                key={item.id}
                                // TUTAJ ZMIANA: Linkujemy do dynamicznego sluga
                                href={`/aktualnosci/${item.slug}`}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col h-full"
                            >
                                <div className="relative h-64 overflow-hidden bg-gray-200">
                                    {item.image_url ? (
                                        <Image
                                            src={item.image_url}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400"><ImageIcon /></div>
                                    )}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 flex items-center gap-2 shadow-sm">
                                        <Calendar size={12} className="text-[var(--color-primary)]" />
                                        {new Date(item.created_at).toLocaleDateString("pl-PL")}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                                        {item.excerpt}
                                    </p>
                                    <div className="text-[var(--color-primary)] text-sm font-bold uppercase tracking-wide flex items-center gap-2 mt-auto pt-4 border-t border-gray-50">
                                        Czytaj więcej <ArrowRight size={14} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}