import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { createClient } from "@/lib/supabase/server";

export default async function AdminLayout({
                                              children,
                                          }: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return (
        // ZMIANA TUTAJ: flex-col (mobil) -> md:flex-row (desktop)
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">

            {/* Sidebar (zawiera teraz w sobie też pasek mobilny) */}
            {user && <AdminSidebar />}

            {/* Główna treść */}
            <main className={`flex-1 ${user ? 'p-4 md:p-8 overflow-y-auto md:max-h-screen' : 'w-full'}`}>
                {children}
            </main>
        </div>
    );
}