import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["600", "700", "800"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["400", "500"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://gdyniapadelclub.pl"), // <--- TU WPISZ SWOJĄ DOMENĘ
    title: {
        default: "Gdynia Padel Club - Najlepsze korty w Trójmieście",
        template: "%s | Gdynia Padel Club", // Np. "Liga | Gdynia Padel Club"
    },
    description: "Nowoczesny klub padlowy w Gdyni. Treningi, liga, turnieje i eventy firmowe. Dołącz do naszej społeczności i zagraj w padla!",
    openGraph: {
        title: "Gdynia Padel Club",
        description: "Dołącz do gry w najlepszym klubie w Gdyni. Rezerwuj korty, trenuj i wygrywaj!",
        url: "https://gdyniapadelclub.pl",
        siteName: "Gdynia Padel Club",
        images: [
            {
                url: "/logo.svg", // Domyślne zdjęcie z folderu public
                width: 1200,
                height: 630,
                alt: "Gdynia Padel Club Korty",
            },
        ],
        locale: "pl_PL",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gdynia Padel Club",
        description: "Dołącz do gry w najlepszym klubie w Gdyni.",
        images: ["/logo.svg"],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl" className="scroll-smooth">
        <body
            className={`${montserrat.variable} ${inter.variable} antialiased bg-white text-black`}
        >
        {/* --- 2. KOD GOOGLE TAG START --- */}
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=GTM-NTHHN5MG"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'GTM-NTHHN5MG');
          `}
        </Script>
        {/* --- KOD GOOGLE TAG KONIEC --- */}

        {/* Tutaj renderujemy tylko dzieci. Navbar i Footer znikają stąd. */}
        {children}
        </body>
        </html>
    );
}