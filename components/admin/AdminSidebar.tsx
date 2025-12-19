"use client";

import { useState, useEffect } from "react"; // <--- Import useState i useEffect
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
    LayoutDashboard,
    CalendarDays,
    Trophy,
    PlusCircle,
    LogOut,
    Home,
    Menu, // <--- Ikona Hamburgera
    X,
    ShoppingBag// <--- Ikona Zamknięcia
} from "lucide-react";

const navItems = [
    { label: "Aktualności", href: "/admin/add", icon: PlusCircle },
    { label: "Grafik Treningów", href: "/admin/grafik", icon: CalendarDays },
    { label: "Turnieje", href: "/admin/turnieje", icon: Trophy },
    {
        label: "Sklep",
        href: "/admin/sklep",
        icon: ShoppingBag
    },
];

export function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const supabase = createClient();

    // Stan otwarcia menu mobilnego
    const [isOpen, setIsOpen] = useState(false);

    // Zamykaj menu automatycznie, gdy zmieni się podstrona (czyli użytkownik w coś kliknął)
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/admin/login");
        router.refresh();
    };

    return (
        <>
            {/* 1. MOBILNY PASEK NAGŁÓWKA (Widoczny tylko na mobile: md:hidden) */}
            <div className="md:hidden bg-gray-900 text-white p-4 flex justify-between items-center sticky top-0 z-40 border-b border-gray-800">
                <div className="font-black uppercase tracking-wider flex items-center gap-2">
                    <LayoutDashboard className="text-[var(--color-primary)]" size={20} />
                    Admin Panel
                </div>
                <button onClick={() => setIsOpen(true)} className="p-1 hover:bg-gray-800 rounded-lg">
                    <Menu size={24} />
                </button>
            </div>

            {/* 2. OVERLAY (Przyciemnienie tła na mobile, gdy menu otwarte) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* 3. WŁAŚCIWY SIDEBAR */}
            <aside className={`
                /* Style podstawowe */
                bg-gray-900 text-white flex flex-col h-full border-r border-gray-800
                
                /* Style dla MOBILE (Drawer/Szuflada) */
                fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
                
                /* Style dla DESKTOP (Resetujemy fixed i translate) */
                md:translate-x-0 md:static md:h-screen md:sticky md:top-0
            `}>
                {/* HEADER SIDEBARA */}
                <div className="p-6 border-b border-gray-800 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-black tracking-wider uppercase flex items-center gap-2">
                            <LayoutDashboard className="text-[var(--color-primary)]" />
                            Admin
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">Zarządzanie Gdynia Padel</p>
                    </div>
                    {/* Przycisk zamknięcia (tylko na mobile) */}
                    <button onClick={() => setIsOpen(false)} className="md:hidden text-gray-400 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                {/* NAV LINKS */}
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                                    isActive
                                        ? "bg-[var(--color-primary)] text-white shadow-lg shadow-blue-900/20"
                                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                }`}
                            >
                                <item.icon size={20} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* FOOTER LINKS */}
                <div className="p-4 border-t border-gray-800 space-y-2 mt-auto">
                    <Link
                        href="/"
                        target="_blank"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-gray-800 hover:text-white transition-all font-medium"
                    >
                        <Home size={20} />
                        Zobacz Stronę
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all font-medium"
                    >
                        <LogOut size={20} />
                        Wyloguj się
                    </button>
                </div>
            </aside>
        </>
    );
}