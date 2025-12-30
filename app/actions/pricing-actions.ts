"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { PricingPlan } from "@/lib/pricing-config";

// Pobieranie (Publiczne)
export async function getPricingPlans(): Promise<PricingPlan[]> {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("pricing_plans")
        .select("*")
        .eq("active", true)
        .order("sort_order", { ascending: true });

    if (error) {
        console.error("Błąd pobierania cennika:", error);
        return [];
    }

    return data as PricingPlan[];
}

// Tworzenie / Aktualizacja (Admin)
export async function upsertPricingPlan(plan: Partial<PricingPlan>) {
    const supabase = await createClient();

    // Walidacja autoryzacji
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    // Oczyszczenie payloadu (usuwamy undefined)
    const payload = {
        category: plan.category,
        description: plan.description,
        icon_name: plan.icon_name,
        highlight: plan.highlight,
        items: plan.items,
        sort_order: plan.sort_order,
        ...(plan.id ? { id: plan.id } : {}) // Jeśli ID jest, to update, jak nie to insert
    };

    const { error } = await supabase
        .from("pricing_plans")
        .upsert(payload)
        .select();

    if (error) throw new Error(error.message);

    revalidatePath("/"); // Odśwież stronę główną
    revalidatePath("/admin/cennik");
}

// Usuwanie (Admin)
export async function deletePricingPlan(id: string) {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Unauthorized");

    const { error } = await supabase
        .from("pricing_plans")
        .delete()
        .eq("id", id);

    if (error) throw new Error(error.message);

    revalidatePath("/");
    revalidatePath("/admin/cennik");
}