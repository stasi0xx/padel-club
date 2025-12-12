"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Sprawdzamy, czy użytkownik już zaakceptował cookies
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            // Małe opóźnienie, żeby nie atakować użytkownika w 1 milisekundzie
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    className="fixed bottom-4 left-4 right-4 z-[100] md:left-8 md:right-auto md:max-w-md"
                >
                    <div className="bg-white border border-gray-200 shadow-2xl rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden">

                        {/* Ozdobne tło (opcjonalne) */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 z-0" />

                        <div className="relative z-10 flex items-start gap-4">
                            <div className="p-3 bg-blue-100 text-[var(--color-primary)] rounded-full shrink-0">
                                <Cookie size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">
                                    Lubisz ciasteczka? 🍪
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Używamy plików cookies, aby zapewnić Ci najlepsze doświadczenia na naszej stronie.
                                    Dowiedz się więcej w {" "}
                                    <Link href="/polityka-prywatnosci" className="text-[var(--color-primary)] font-bold hover:underline">
                                        Polityce Prywatności
                                    </Link>.
                                </p>
                            </div>
                        </div>

                        <div className="relative z-10 flex gap-3 mt-2">
                            <button
                                onClick={handleAccept}
                                className="flex-1 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-4 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-lg shadow-blue-500/20"
                            >
                                Akceptuję
                            </button>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="px-4 py-2.5 rounded-lg font-bold text-sm text-gray-500 hover:bg-gray-100 transition-colors"
                            >
                                Zamknij
                            </button>
                        </div>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 transition-colors z-20"
                        >
                            <X size={16} />
                        </button>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}