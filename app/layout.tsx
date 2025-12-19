import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

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
    metadataBase: new URL("https://gdyniapadelclub.pl"),
    alternates: {
        canonical: './', // To automatycznie wygeneruje poprawny canonical dla każdej podstrony
    },// <--- TU WPISZ SWOJĄ DOMENĘ
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

        {/* Tutaj renderujemy tylko dzieci. Navbar i Footer znikają stąd. */}
        {children}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SportsActivityLocation",
                    "name": "Gdynia Padel Club",
                    "image": "https://gdyniapadelclub.pl/logo.svg", // Zmień na .jpg/.png dla lepszej kompatybilności
                    "url": "https://gdyniapadelclub.pl",
                    "telephone": "+48534044544",
                    "email": "kontakt@gdyniapadelclub.pl",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "ul. Zamenhofa 17",
                        "addressLocality": "Gdynia",
                        "postalCode": "81-118",
                        "addressCountry": "PL"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 54.53613906708277, // Uzupełnij dokładne współrzędne z Google Maps
                        "longitude": 18.48347306907381
                    },
                    "openingHoursSpecification": [
                        {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                            ],
                            "opens": "06:00",
                            "closes": "23:59"
                        }
                    ],
                    "priceRange": "$$" // Lub konkretne ceny
                })
            }}
        />
        </body>
        <GoogleAnalytics gaId={'G-4SEF90B4E9'} />

        </html>
    );
}