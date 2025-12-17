import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { offersData } from "@/data/offers";
import { TrainersGrid } from "@/components/TrainersGrid";
import { EventFormats } from "@/components/offer/EventFormats";
import { getSchedule } from "@/app/actions/schedule-actions";
import { TrainingSchedule } from "@/components/offer/TrainingSchedule";
import {LevelDescriptions} from "@/components/offer/LevelDescriptions";
import { KidsBenefits } from "@/components/offer/kids/KidsBenefits";
import { PromoVideo } from "@/components/offer/kids/PromoVideo";
import { KidsSchedule } from "@/components/offer/kids/KidsSchedule";
import {LeagueInfo} from "@/components/offer/league/LeagueInfo";
import {LeagueFormats} from "@/components/offer/league/LeagueFormats";
import {IndividualTraining} from "@/components/offer/IndividualTraining";
import {NextTournament} from "@/components/offer/tournaments/NextTournament";
import {TournamentRules} from "@/components/offer/tournaments/TournamentRules";
import { getTournament } from "@/app/actions/tournament-actions";
import { EventOrganization } from "@/components/offer/EventOrganization";
import { Metadata } from "next";
// <--- IMPORT

// ... (generateStaticParams i generateMetadata bez zmian) ...

function stripHtml(html: string) {
    return html.replace(/<[^>]*>?/gm, '');
}

interface PageProps {
    params: Promise<{ slug: string }>; // Next.js 15 oczekuje Promise w params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const offer = offersData.find((item) => item.slug === slug);

    if (!offer) {
        return {
            title: "Oferta nie znaleziona",
        };
    }

    const cleanDescription = stripHtml(offer.description).slice(0, 160) + "...";

    return {
        title: offer.title,
        description: `${offer.subtitle} - ${cleanDescription}`,
        openGraph: {
            title: `${offer.title} | Gdynia Padel Club`,
            description: offer.subtitle,
            images: [
                {
                    url: offer.image, // Zdjęcie konkretnej oferty
                    width: 1200,
                    height: 630,
                    alt: offer.title,
                },
            ],
        },
    };
}

export default async function OfferPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const offer = offersData.find((o) => o.slug === slug);

    if (!offer) {
        return notFound();
    }

    // Sprawdzamy, czy to strona wydarzeń
    const isEventsPage = offer.slug === 'wydarzenia';
    const isTrainingPage = offer.slug === 'treningi';
    const isKidsPage = offer.slug === 'dla-dzieci';
    const isLeaguePage = offer.slug === 'liga';
    const isIndividualPage = offer.slug === 'treningi-indywidualne';
    const isTournamentPage = offer.slug === 'turnieje';
    const isBusinessPage = offer.slug === 'biznes';
    const scheduleData = (isTrainingPage || isKidsPage) ? await getSchedule() : [];
    const tournamentData = isTournamentPage ? await getTournament() : null;

    return (
        <main className="min-h-screen bg-white pb-24">
            {/* ... (HEADER Z TŁEM - bez zmian) ... */}
            <div className="relative h-[60vh] min-h-[400px] w-full bg-gray-900 overflow-hidden">
                <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/60" />

                <div className="absolute top-32 left-0 w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <Link
                            href="/#oferta"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium mb-8 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit"
                        >
                            <ArrowLeft size={18} /> Wróć do ofert
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-4 mb-4 text-[var(--color-primary)] bg-white/90 backdrop-blur-md w-fit px-4 py-2 rounded-xl shadow-lg">
                            <offer.icon size={28} />
                            <span className="font-bold uppercase tracking-wider text-sm">{offer.title}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-gray-900 leading-tight">
                            {offer.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 mt-4 max-w-2xl font-light">
                            {offer.subtitle}
                        </p>
                    </div>
                </div>
            </div>

            {/* GŁÓWNA TREŚĆ */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* LEWA KOLUMNA: Opis */}
                <div className="lg:col-span-2">

                    {/* LOGIKA WYŚWIETLANIA */}
                    {isEventsPage ? (
                        // ... (EventFormats logic)
                        <>
                            <div className="prose prose-lg prose-blue max-w-none text-gray-600 mb-8">
                                {/* ... krótki wstęp ... */}
                            </div>
                            <EventFormats />
                        </>
                    ) : isTrainingPage ? (
                        // <--- TU WPADA GRAFIK DLA TRENINGÓW
                        <>
                            <div
                                className="prose prose-lg prose-blue max-w-none text-gray-600 mb-12"
                                dangerouslySetInnerHTML={{ __html: offer.description }}
                            />
                            {/* PRZEKAZUJEMY DANE Z BAZY DO KOMPONENTU */}
                            <LevelDescriptions />
                            <TrainingSchedule scheduleData={scheduleData} />
                        </>
                    ) : isKidsPage ? (

                        /* --- SEKCJA DLA DZIECI --- */
                        <>
                            <div
                                className="prose prose-lg prose-blue max-w-none text-gray-600 mb-8"
                                dangerouslySetInnerHTML={{ __html: offer.description }}
                            />

                            <PromoVideo />
                            <KidsBenefits />
                            <KidsSchedule scheduleData={scheduleData} />
                        </>

                    ) : isLeaguePage ? (

                        /* --- SEKCJA LIGI --- */
                        <>
                            <div
                                className="prose prose-lg prose-blue max-w-none text-gray-600 mb-8"
                            />

                            <LeagueInfo />
                            <LeagueFormats />
                        </>

                    ) : isIndividualPage ? (

                        /* --- TRENING INDYWIDUALNY --- */
                        <>
                            <div
                                className="prose prose-lg prose-blue max-w-none text-gray-600 mb-8"
                            />

                            {/* Wstrzyknięcie nowego komponentu */}
                            <IndividualTraining />

                        </>

                    ) : isTournamentPage ? (

                        /* --- SEKCJA TURNIEJE --- */
                        <>
                            <div
                                className="prose prose-lg prose-blue max-w-none text-gray-600 mb-8"
                            />

                            {/* 1. Najbliższy Turniej (Baner) */}
                            <NextTournament data={tournamentData}/>

                            {/* 2. Zasady i Kategorie */}
                            <TournamentRules />
                        </>

                    ) : isBusinessPage ? (

                        /* --- SEKCJA BIZNES / EVENTY --- */
                        <>
                            <div
                                className="prose prose-lg prose-blue max-w-none text-gray-600 mb-12"
                                dangerouslySetInnerHTML={{ __html: offer.description }}
                            />

                            <EventOrganization />
                        </>

                    ): (
                        // STANDARD DLA RESZTY
                        <div
                            className="prose prose-lg prose-blue max-w-none text-gray-600"
                            dangerouslySetInnerHTML={{ __html: offer.description }}
                        />
                    )}
                </div>

                {/* PRAWA KOLUMNA: Cechy i CTA */}
                <div className="lg:col-span-1">
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 sticky top-32">
                        <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">
                            Co otrzymujesz?
                        </h3>
                        <ul className="space-y-4 mb-8">
                            {offer.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-[var(--color-primary)] shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href={offer.ctaLink}
                            target={offer.ctaLink.startsWith('http') ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 group"
                        >
                            {offer.ctaText}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <p className="text-xs text-center text-gray-400 mt-4">
                            {offer.slug === 'sklep'
                                ? 'Zapraszamy do recepcji klubu.'
                                : 'Rezerwacja odbywa się przez system zewnętrzny.'}
                        </p>
                    </div>
                </div>
            </div>

            {/* --- SEKCJA: TRENERZY --- */}
            {offer.trainers && (
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                    {/* ... (Reszta bez zmian) ... */}
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 uppercase">
                            Poznaj naszych trenerów
                        </h2>
                        <div className="w-24 h-1 bg-[var(--color-primary)] rounded-full" />
                    </div>
                    <TrainersGrid trainers={offer.trainers} />
                </section>
            )}

        </main>
    );
}