"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { LogOut, Home } from "lucide-react"; // Dodałem ikonę Home
import Link from "next/link"; // Dodałem Link

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

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Pasek Administratora */}
            <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <span className="font-bold text-gray-700">Panel CMS</span>

                {/* Prawa strona paska */}
                <div className="flex items-center gap-6">
                    {/* Przycisk powrotu na stronę główną */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors"
                        title="Wróć do widoku strony"
                    >
                        <Home size={16} />
                        Strona Główna
                    </Link>

                    <div className="h-4 w-px bg-gray-300" /> {/* Opcjonalny separator */}

                    {/* Przycisk wylogowania */}
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-sm text-red-600 hover:text-red-800 font-medium transition-colors"
                    >
                        <LogOut size={16} /> Wyloguj
                    </button>
                </div>
            </div>

            {/* Treść (np. formularz dodawania) */}
            {children}
        </div>
    );
}