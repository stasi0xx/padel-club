import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";

// Konfiguracja fontu nagłówkowego (zbliżony do logo)
const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["600", "700", "800"], // Grubości dla nagłówków
});

// Konfiguracja fontu treści
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["400", "500"],
});

export const metadata: Metadata = {
    title: "Gdynia Padel Club",
    description: "Zagraj w padla w Gdyni. Rezerwacja kortów, treningi, turnieje.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
        <body
            className={`${montserrat.variable} ${inter.variable} antialiased bg-white text-black`}
        >
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}