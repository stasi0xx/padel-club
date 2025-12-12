"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Jeśli domeny Supabase są skonfigurowane w next.config.ts, inaczej użyj <img>
import { createClient } from "@/lib/supabase/client";
import { ArrowRight, Calendar, ImageIcon } from "lucide-react";

interface NewsItem {
    id: string;
    title: string;
    excerpt: string;
    image_url: string;
    created_at: string;
}

export function NewsHome() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const supabase = createClient();

    useEffect(() => {
        async function fetchNews() {
            // Pobieramy 3 najnowsze newsy
            const { data, error } = await supabase
                .from('news')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(3);

            if (data) {
                setNews(data);
            }
        }

        fetchNews();
    }, []);

    // Jeśli nie ma newsów w bazie, nie renderuj sekcji (lub renderuj placeholder)
    if (news.length === 0) return null;

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* NAGŁÓWEK */}
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 uppercase">Aktualności</h2>
                        <div className="w-24 h-1 bg-[var(--color-primary)] rounded-full" />
                    </div>
                    <Link href="/aktualnosci" className="hidden md:flex items-center gap-2 text-[var(--color-primary)] font-bold">
                        Wszystkie <ArrowRight size={18} />
                    </Link>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
                            <div className="relative h-64 bg-gray-200">
                                {item.image_url ? (
                                    <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <ImageIcon size={40} />
                                    </div>
                                )}
                                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                                    <Calendar size={12} className="text-[var(--color-primary)]" />
                                    {new Date(item.created_at).toLocaleDateString("pl-PL")}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-heading font-bold mb-3 line-clamp-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">{item.excerpt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}