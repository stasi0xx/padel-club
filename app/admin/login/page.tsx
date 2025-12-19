"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client"; // Używamy klienta przeglądarkowego
import { useRouter } from "next/navigation";
import {Lock, Mail, Loader2, ArrowLeft} from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();
    const supabase = createClient();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError("Nieprawidłowy email lub hasło.");
            setLoading(false);
        } else {
            // Sukces! Przekierowanie do panelu (router.refresh odświeża middleware)
            router.refresh();
            router.push("/admin/add");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-black p-8 text-center">
                    <h1 className="text-2xl font-bold text-white uppercase tracking-wider">
                        Gdynia Padel Club
                    </h1>
                    <p className="text-gray-400 text-sm mt-2">Panel Administratora</p>
                </div>

                <div className="p-8">
                    <form onSubmit={handleLogin} className="space-y-6">

                        {error && (
                            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    placeholder="admin@gdyniapadel.pl"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Hasło</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[var(--color-primary)] text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : "Zaloguj się"}
                        </button>
                    </form>
                </div>
                <div className={'mt-5'}>
                    <Link
                        href="/"
                        className="group flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 text-gray-900 font-bold rounded-full hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all shadow-sm"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Wróć do strony głównej
                    </Link>
                </div>
            </div>
        </div>
    );
}