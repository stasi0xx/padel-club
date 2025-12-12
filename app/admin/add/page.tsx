"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Upload, Loader2, Image as ImageIcon } from "lucide-react";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { slugify } from "@/lib/utils"; // <--- Import funkcji

export default function AddNewsPage() {
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const supabase = createClient();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 1. Generowanie sluga
            const slug = slugify(title);

            // Sprawdź czy slug jest unikalny (opcjonalne, ale dobra praktyka)
            const { data: existing } = await supabase
                .from('news')
                .select('slug')
                .eq('slug', slug)
                .single();

            if (existing) {
                alert("Taki tytuł już istnieje! Zmień go nieco.");
                setLoading(false);
                return;
            }

            let imageUrl = "";
            if (file) {
                const fileExt = file.name.split('.').pop();
                const fileName = `${slug}-${Date.now()}.${fileExt}`; // Lepsza nazwa pliku
                const { error: uploadError } = await supabase.storage
                    .from('news-images')
                    .upload(fileName, file);

                if (uploadError) throw uploadError;

                const { data: urlData } = supabase.storage
                    .from('news-images')
                    .getPublicUrl(fileName);
                imageUrl = urlData.publicUrl;
            }

            const { error: dbError } = await supabase
                .from('news')
                .insert([
                    {
                        title,
                        slug, // <--- ZAPISUJEMY SLUG
                        excerpt,
                        content,
                        image_url: imageUrl,
                    }
                ]);

            if (dbError) throw dbError;
            alert("News dodany!");
            router.push("/aktualnosci");

        } catch (error) {
            console.error(error);
            alert("Wystąpił błąd podczas dodawania.");
        } finally {
            setLoading(false);
        }
    };

    // ... (Reszta JSX bez zmian) ...
    return (
        // ... Twój obecny JSX ...
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
                <h1 className="text-3xl font-bold mb-8 text-gray-900">Dodaj Aktualność</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Tytuł */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tytuł</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Np. Wielki Turniej Mikołajkowy"
                        />
                    </div>

                    {/* Krótki opis */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Krótki opis (na kafelek)
                        </label>
                        <textarea
                            required
                            rows={3}
                            value={excerpt}
                            onChange={(e) => setExcerpt(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Krótka zajawka..."
                        />
                    </div>

                    {/* Pełna Treść */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Pełna treść artykułu</label>
                        <RichTextEditor
                            value={content}
                            onChange={setContent}
                        />
                    </div>

                    {/* Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Zdjęcie okładkowe</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors relative cursor-pointer">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setFile(e.target.files?.[0] || null)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="flex flex-col items-center gap-2 text-gray-500">
                                {file ? (
                                    <>
                                        <ImageIcon size={32} className="text-green-500" />
                                        <span className="font-semibold text-green-600">{file.name}</span>
                                    </>
                                ) : (
                                    <>
                                        <Upload size={32} />
                                        <span>Kliknij lub upuść zdjęcie tutaj</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[var(--color-primary)] text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : "Opublikuj News"}
                    </button>
                </form>
            </div>
        </div>
    );
}