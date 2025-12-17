"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Schemat walidacji
const tournamentSchema = z.object({
    title: z.string().min(3, "Tytuł za krótki"),
    date: z.string().min(3, "Data wymagana"),
    time: z.string().min(3, "Godzina wymagana"),
    categories: z.string().min(3, "Wpisz kategorie po przecinku"), // W formacie string "A, B, C"
    status: z.string().min(3, "Status wymagany"),
    image: z.string().min(3, "Ścieżka do zdjęcia wymagana"),
    link: z.string().url("Nieprawidłowy link"),
    is_showcase: z.string().optional(), // Checkbox przesyła "on" lub nic
});

export type TournamentData = {
    id: string;
    title: string;
    date: string;
    time: string;
    categories: string[];
    status: string;
    image: string;
    link: string;
    is_showcase: boolean;
};

// 1. Pobierz turniej (bierzemy pierwszy/jedyny rekord)
export async function getTournament() {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("tournaments")
        .select("*")
        .limit(1)
        .single();

    if (error) {
        console.error("Błąd pobierania turnieju:", error);
        return null;
    }

    return data as TournamentData;
}

// 2. Aktualizuj turniej
export async function updateTournament(prevState: any, formData: FormData) {
    const supabase = await createClient();

    const id = formData.get("id") as string;

    const rawData = {
        title: formData.get("title"),
        date: formData.get("date"),
        time: formData.get("time"),
        categories: formData.get("categories"),
        status: formData.get("status"),
        image: formData.get("image"),
        link: formData.get("link"),
        is_showcase: formData.get("is_showcase"),
    };

    const validated = tournamentSchema.safeParse(rawData);

    if (!validated.success) {
        // Zwracamy spłaszczone błędy
        return { error: validated.error.flatten().fieldErrors };
    }

    const updateData = {
        title: validated.data.title,
        date: validated.data.date,
        time: validated.data.time,
        categories: validated.data.categories.split(",").map(s => s.trim()),
        status: validated.data.status,
        image: validated.data.image,
        link: validated.data.link,
        is_showcase: rawData.is_showcase === "on",
    };

    const { error } = await supabase
        .from("tournaments")
        .update(updateData)
        .eq("id", id);

    if (error) {
        return { message: "Błąd bazy danych: " + error.message };
    }

    revalidatePath("/oferta/turnieje");
    revalidatePath("/admin/turnieje");

    // Zwracamy sukces
    return { success: true, message: "Zapisano zmiany!" };
}