import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// W Next.js 16 params jest Promise!
export default async function NewsPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const supabase = await createClient();

    // Pobieramy newsa po slugu
    const { data: post } = await supabase
        .from('news')
        .select('*')
        .eq('slug', slug)
        .single();

    if (!post) {
        return notFound();
    }

    return (
        <main className="min-h-screen flex flex-col bg-white">
            <article className="flex-grow pb-24">
                {/* HEADER ZE ZDJĘCIEM */}
                <div className="relative h-[50vh] w-full bg-gray-900">
                    {post.image_url && (
                        <Image
                            src={post.image_url}
                            alt={post.title}
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
                        <Link
                            href="/aktualnosci"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm font-medium uppercase tracking-wide"
                        >
                            <ArrowLeft size={16} /> Powrót do aktualności
                        </Link>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-2 text-white/80 text-sm">
                            <Calendar size={16} className="text-[var(--color-primary)]" />
                            {new Date(post.created_at).toLocaleDateString("pl-PL", {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </div>
                    </div>
                </div>

                {/* TREŚĆ ARTYKUŁU */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                    {/* Wstęp (Excerpt) */}
                    <div className="text-xl text-gray-600 font-medium mb-10 leading-relaxed border-l-4 border-[var(--color-primary)] pl-6">
                        {post.excerpt}
                    </div>

                    {/* Główna treść z Rich Text Editora */}
                    {/* Klasa 'prose' z Tailwind Typography automatycznie styluje HTML */}
                    <div
                        className="prose prose-lg prose-blue max-w-none text-gray-800"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </article>
        </main>
    );
}