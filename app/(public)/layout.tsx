import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {CookieBanner} from "@/components/CookieBanner";

export default function PublicLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen flex flex-col">
                {children}
            </main>
            <Footer />
            <CookieBanner />
        </>
    );
}