"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function AdminLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const supabase = createClient();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.refresh();
        router.push("/admin/login");
    };

    // Nie pokazuj paska wylogowania na stronie logowania
    // (Choć middleware i tak przekieruje, to dla estetyki)
    // W Next.js sprawdzenie ścieżki w layout jest trudniejsze,
    // więc po prostu wstawimy przycisk wylogowania dyskretnie.

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Pasek Administratora */}
            <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <span className="font-bold text-gray-700">Panel CMS</span>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-sm text-red-600 hover:text-red-800 font-medium transition-colors"
                >
                    <LogOut size={16} /> Wyloguj
                </button>
            </div>

            {/* Treść (np. formularz dodawania) */}
            {children}
        </div>
    );
}