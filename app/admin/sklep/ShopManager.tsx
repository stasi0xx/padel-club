"use client";

import { useState } from "react";
import { Product } from "@/app/actions/shop-actions";
import { Trash2, Edit, Plus, Save, X, Upload, ImageIcon, Loader2 } from "lucide-react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

type Props = {
    products: Product[];
    deleteAction: (formData: FormData) => Promise<void>;
    saveAction: (prevState: any, formData: FormData) => Promise<any>;
};

export function ShopManager({ products, deleteAction, saveAction }: Props) {
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    // ZMIANA: Teraz przechowujemy listę URLi zdjęć
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [uploading, setUploading] = useState(false);

    const supabase = createClient();

    const handleEdit = (product: Product) => {
        setEditingProduct(product);
        setImageUrls(product.images); // Wczytaj istniejące zdjęcia
        setIsFormOpen(true);
    };

    const handleAddNew = () => {
        setEditingProduct(null);
        setImageUrls([]);
        setIsFormOpen(true);
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        setUploading(true);
        const files = Array.from(e.target.files);
        const newUrls: string[] = [];

        try {
            for (const file of files) {
                const fileExt = file.name.split('.').pop();
                const fileName = `product-${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

                const { error: uploadError } = await supabase.storage
                    .from('shop-images')
                    .upload(fileName, file);

                if (uploadError) throw uploadError;

                const { data: urlData } = supabase.storage
                    .from('shop-images')
                    .getPublicUrl(fileName);

                newUrls.push(urlData.publicUrl);
            }

            // Dodaj nowe zdjęcia do istniejących
            setImageUrls(prev => [...prev, ...newUrls]);

        } catch (error) {
            console.error("Upload error:", error);
            alert("Błąd podczas wgrywania zdjęć.");
        } finally {
            setUploading(false);
            // Reset inputa, żeby można było wgrać te same pliki ponownie
            e.target.value = '';
        }
    };

    const removeImage = (indexToRemove: number) => {
        setImageUrls(prev => prev.filter((_, idx) => idx !== indexToRemove));
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* KOLUMNA 1: LISTA (bez zmian w logice, tylko wyświetlanie pierwszego zdjęcia) */}
            <div className="lg:col-span-2 space-y-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Twoje Produkty ({products.length})</h2>
                    <button onClick={handleAddNew} className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors">
                        <Plus size={18} /> Dodaj Produkt
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {products.map((p) => (
                        <div key={p.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex gap-4 items-center">
                            <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                                {/* Wyświetlamy pierwsze zdjęcie jako miniaturę */}
                                <Image src={p.images[0] || '/placeholder.png'} alt={p.name} fill className="object-cover" sizes="80px" />
                                {p.images.length > 1 && (
                                    <div className="absolute bottom-1 right-1 bg-black/60 text-white text-[10px] px-1.5 rounded-full font-bold">
                                        +{p.images.length - 1}
                                    </div>
                                )}
                            </div>
                            <div className="flex-grow min-w-0">
                                <h3 className="font-bold text-gray-900 truncate">{p.name}</h3>
                                <p className="text-green-600 font-bold text-sm">{p.price}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <button onClick={() => handleEdit(p)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Edit size={18} /></button>
                                <form action={deleteAction}>
                                    <input type="hidden" name="id" value={p.id} />
                                    <button type="submit" className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18} /></button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* KOLUMNA 2: FORMULARZ */}
            <div className="lg:col-span-1">
                {isFormOpen ? (
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg sticky top-8 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-lg">{editingProduct ? "Edytuj Produkt" : "Nowy Produkt"}</h3>
                            <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-gray-900"><X size={20} /></button>
                        </div>

                        <form action={async (formData) => {
                            // Czyścimy ew. śmieci
                            formData.delete('images');

                            // Dodajemy każdy URL jako osobny wpis o tej samej nazwie klucza
                            imageUrls.forEach(url => {
                                formData.append('images', url);
                            });

                            await saveAction(null, formData);
                            setIsFormOpen(false);
                        }} className="space-y-4">
                            <input type="hidden" name="id" value={editingProduct?.id || ""} />

                            {/* UPLOAD ZDJĘĆ */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Zdjęcia Produktu</label>

                                {/* Lista wgranych zdjęć */}
                                {imageUrls.length > 0 && (
                                    <div className="grid grid-cols-3 gap-2 mb-3">
                                        {imageUrls.map((url, idx) => (
                                            <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 group">
                                                <Image src={url} alt="Podgląd" fill className="object-cover" />
                                                <button
                                                    type="button"
                                                    onClick={() => removeImage(idx)}
                                                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <X size={12} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Dropzone */}
                                <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:bg-gray-50 transition-colors relative cursor-pointer group">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple // <--- POZWALAMY NA WIELE PLIKÓW
                                        onChange={handleFileChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    />
                                    <div className="flex flex-col items-center gap-2 text-gray-500 py-4">
                                        {uploading ? (
                                            <Loader2 className="animate-spin text-[var(--color-primary)]" />
                                        ) : (
                                            <Upload size={24} className="text-gray-400" />
                                        )}
                                        <span className="text-sm">{uploading ? "Wgrywanie..." : "Dodaj kolejne zdjęcia"}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nazwa</label>
                                <input name="name" defaultValue={editingProduct?.name} required className="w-full border rounded-lg p-2" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Cena</label>
                                <input name="price" defaultValue={editingProduct?.price} required className="w-full border rounded-lg p-2" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Link zewn. (opcja)</label>
                                <input name="link" defaultValue={editingProduct?.link} className="w-full border rounded-lg p-2" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Opis (opcja)</label>
                                <textarea name="description" defaultValue={editingProduct?.description} className="w-full border rounded-lg p-2" rows={3} />
                            </div>

                            <button type="submit" disabled={uploading || imageUrls.length === 0} className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 flex justify-center items-center gap-2 disabled:opacity-50">
                                <Save size={20} /> Zapisz
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="bg-gray-50 p-8 rounded-2xl border border-dashed border-gray-300 text-center text-gray-500 sticky top-8">
                        <Plus size={32} className="mx-auto mb-4 text-gray-400" />
                        <p>Kliknij "Dodaj Produkt" lub edytuj istniejący.</p>
                    </div>
                )}
            </div>
        </div>
    );
}