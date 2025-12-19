"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// ZMIANA: image -> images (tablica stringów)
const productSchema = z.object({
    name: z.string().min(2, "Nazwa wymagana"),
    price: z.string().min(1, "Cena wymagana"),
    images: z.array(z.string()).min(1, "Przynajmniej jedno zdjęcie wymagane"),
    link: z.string().optional(),
    description: z.string().optional(),
});

export type Product = {
    id: string;
    name: string;
    price: string;
    images: string[]; // <--- ZMIANA TYPU
    link?: string;
    description?: string;
};

export async function getProducts() {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("products")
        .select("*") // Upewnij się, że SQL zwróci kolumnę 'images'
        .order("created_at", { ascending: false });

    if (error) return [];

    // Mapowanie wsteczne (jeśli w bazie masz jeszcze starą kolumnę 'image')
    // Zabezpieczenie, żeby kod nie padł na starych danych
    return data.map((p: any) => ({
        ...p,
        images: p.images || (p.image ? [p.image] : [])
    })) as Product[];
}

// ... importy i schema (z.array(z.string())) bez zmian

export async function saveProduct(prevState: any, formData: FormData) {
    const supabase = await createClient();
    const id = formData.get("id") as string;

    // --- KLUCZOWA ZMIANA ---
    // Pobieramy WSZYSTKIE wartości o kluczu 'images'
    // Jeśli wysyłasz je jako osobne append('images', url), to getAll zwróci tablicę
    const images = formData.getAll("images") as string[];

    console.log("Otrzymane zdjęcia:", images); // Debug w konsoli serwera

    const rawData = {
        name: formData.get("name"),
        price: formData.get("price"),
        images: images, // Przekazujemy tablicę
        link: formData.get("link"),
        description: formData.get("description"),
    };

    const validated = productSchema.safeParse(rawData);

    if (!validated.success) {
        return { error: validated.error.flatten().fieldErrors };
    }

    const productData = {
        ...validated.data,
        id: id || undefined,
    };

    const { error } = await supabase
        .from("products")
        .upsert(productData);

    if (error) {
        console.error("Błąd zapisu:", error);
        return { message: "Błąd bazy: " + error.message };
    }

    revalidatePath("/oferta/sklep");
    revalidatePath("/admin/sklep");
    return { success: true, message: "Produkt zapisany!" };
}

export async function deleteProduct(formData: FormData) {
    const supabase = await createClient();
    const id = formData.get("id") as string;
    await supabase.from("products").delete().eq("id", id);
    revalidatePath("/oferta/sklep");
    revalidatePath("/admin/sklep");
}