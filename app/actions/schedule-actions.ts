"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Schemat walidacji (Security First!)
const scheduleSchema = z.object({
    day: z.enum(["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]),
    time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Nieprawidłowy format czasu (HH:MM)"),
    group_name: z.string().min(3, "Nazwa grupy za krótka"),
    trainer: z.string().min(2, "Imię trenera wymagane"),
    level: z.enum(["B", "C", "B/C"]),
    spots: z.string().default("Sprawdź"),
});

export type ScheduleItem = {
    id: string;
    day: string;
    time: string;
    group_name: string;
    trainer: string;
    level: "B" | "C" | "B/C";
    spots: string;
};

// --- AKCJE ---

export async function getSchedule() {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("training_schedule")
        .select("*")
        .order("time", { ascending: true }); // Sortowanie po godzinie

    if (error) {
        console.error("Błąd pobierania grafiku:", error);
        return [];
    }

    return data as ScheduleItem[];
}

export async function addScheduleItem(formData: FormData) {
    const supabase = await createClient();

    const rawData = {
        // TypeScript krzyczy, bo formData.get może zwrócić plik lub null.
        // Rzutujemy na string, bo wiemy, że to pola tekstowe.
        day: formData.get("day") as string,
        time: formData.get("time") as string,
        group_name: formData.get("group_name") as string,
        trainer: formData.get("trainer") as string,
        level: formData.get("level") as "B" | "C" | "B/C", // Rzutowanie na konkretny Union Type
        spots: (formData.get("spots") as string) || "Sprawdź",
    };

    // Walidacja po stronie serwera
    const validated = scheduleSchema.safeParse(rawData);

    if (!validated.success) {
        // Zmień .errors na .flatten().fieldErrors
        console.error("Validation error:", validated.error.flatten().fieldErrors);
        return;
    }

    const { error } = await supabase.from("training_schedule").insert(validated.data);

    if (error) {
        console.error("Database error:", error.message);
        return;
    }

    revalidatePath("/oferta/treningi");
    revalidatePath("/admin/grafik");
}

export async function deleteScheduleItem(id: string) {
    const supabase = await createClient();

    const { error } = await supabase.from("training_schedule").delete().eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/oferta/treningi");
    revalidatePath("/admin/grafik");
}