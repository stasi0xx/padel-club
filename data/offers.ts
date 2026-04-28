import {
    CalendarDays,
    Users,
    Smile,
    Trophy,
    User,
    Medal,
    ShoppingBag,
    PartyPopper,
    LucideIcon
} from "lucide-react";

// Nowy interfejs dla Trenera
export interface Trainer {
    name: string;
    image: string;
    specialties: string[];
    description?: string; // Opcjonalny opis (np. "Specjalista od bandeja")
}

export interface OfferDetail {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    icon: LucideIcon;
    features: string[];
    ctaLink: string;
    ctaText: string;
    trainers?: Trainer[]; // <--- Dodajemy opcjonalne pole tutaj
}

export const offersData: OfferDetail[] = [
    {
        slug: "wydarzenia",
        title: "Formaty Gry i Wydarzenia",
        subtitle: "Mexicano, Americano, Nocne Granie",
        image: "/offer/events.webp",
        icon: PartyPopper,
        description: `
            <p class="mb-6">Nie wiesz jak zacząć grać z innymi? Nasze wydarzenia są właśnie po to.</p>
            
            <h4 class="text-xl font-bold text-gray-900 mt-6 mb-2">🇲🇽 Mexicano – Jak to działa?</h4>
            <p class="mb-4">Zapisujesz się sam. Gramy mecze na określoną liczbę punktów (np. 32 piłki). Każdy punkt, który zdobędziesz w meczu, trafia na Twoje konto indywidualne. Po meczu zmieniamy pary – system dobiera Cię z osobami, które mają podobny wynik.</p>

            <h4 class="text-xl font-bold text-gray-900 mt-6 mb-2">🇺🇸 Americano – Czym się różni?</h4>
            <p class="mb-4">System punktacji jest ten sam, ale dobór par jest LOSOWY. Tutaj każdy gra z każdym, niezależnie od umiejętności. To najlepsza opcja na integrację.</p>
            
            <h4 class="text-xl font-bold text-gray-900 mt-6 mb-2">🌙 Nocne Granie</h4>
            <p class="mb-4">To połączenie turnieju z imprezą. Gramy Mexicano lub Americano przy muzyce serwowanej przez <strong>DJ-a</strong>. Wpisowe obejmuje udział w turnieju oraz poczęstunek (pizza lub grill).</p>
            
            <h4 class="text-xl font-bold text-gray-900 mt-6 mb-2">🧘‍♀️ Pilates & Padel</h4>
            <p class="mb-4">Kompleksowy poranek dla ciała i ducha. Pakiet obejmuje: 1h pilatesu, 1h gry w padla (ze wsparciem trenera i sprzętem), a po wysiłku – <strong>wspólne śniadanie i kawę</strong>. Każdy uczestnik otrzymuje upominek i zdjęcia z wydarzenia. Poziom gry nie ma znaczenia!</p>
        `,
        features: [
            "Zapisy bez partnera",
            "Każda piłka to punkt",
            "Muzyka i Grill na Nocnym Graniu",
            "Śniadanie na Pilatesie" // Dodano kluczowy wyróżnik
        ],
        ctaLink: "https://kluby.org/gdynia-padel-club/wydarzenia",
        ctaText: "Zapisz się",
    },
    {
        slug: "treningi",
        title: "Grupy Treningowe",
        subtitle: "Rozwijaj się w towarzystwie",
        image: "/offer/training.webp",
        icon: Users,
        description: `<p>Nasze zajęcia grupowe to idealny balans...</p>`,
        features: ["Grupy 3-4 osobowe", "Poziomy B, C", "Stałe terminy", "Profesjonalna kadra"],
        ctaLink: "https://kluby.org/gdynia-padel-club/wydarzenia",
        ctaText: "Sprawdź grafik",
    },
    {
        slug: "dla-dzieci",
        title: "Padel dla Dzieci",
        subtitle: "Treningi i mini turnieje",
        image: "/offer/kids.webp",
        icon: Smile,
        description: '',
        features: ["Zajęcia od 6    . roku życia", "Sprzęt dla dzieci", "Bezpieczna infrastruktura", "Zabawy ruchowe"],
        ctaLink: "https://kluby.org/gdynia-padel-club/zapisy",
        ctaText: "Zapisz dziecko",
    },
    {
        slug: "liga",
        title: "Gdyńska Liga Padla", // Zmienione z "Liga Klubowa" na oficjalną nazwę
        subtitle: "Ponad 3 lata tradycji",
        image: "/offer/league.webp",
        icon: Trophy,
        description: `
            <div class="space-y-6">
                <p class="text-lg text-gray-600 leading-relaxed">
                    Dołącz do rozgrywek, które trwają nieprzerwanie od ponad trzech lat. <strong>Gdyńska Liga Padla</strong> to społeczność pasjonatów, gdzie każdy znajdzie rywala na swoim poziomie – od debiutantów po ligę PRO.
                </p>

                <div class="grid grid-cols-1 gap-4">
                    <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                        <h4 class="font-bold text-gray-900 mb-2 flex items-center gap-2">📅 Elastyczne Zasady</h4>
                        <ul class="space-y-2 text-sm text-gray-600">
                            <li>• <strong>System:</strong> Każdy z każdym w grupie.</li>
                            <li>• <strong>Czas:</strong> Ok. 1.5 - 2 miesiące na rozegranie kolejki.</li>
                            <li>• <strong>Terminy:</strong> Pełna swoboda – sami umawiacie się na mecz.</li>
                        </ul>
                    </div>

                    <div class="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                        <h4 class="font-bold text-blue-900 mb-2 flex items-center gap-2">📊 Unikalna Punktacja</h4>
                        <p class="text-sm text-blue-800 mb-3">
                            Gramy zawsze <strong>3 sety</strong>. Każdy set ma znaczenie! Para wygrywająca 3:0 zgarnia aż 25 pkt, ale nawet przy porażce 0:3 otrzymujecie 5 pkt za walkę.
                        </p>
                        <div class="text-xs font-bold text-blue-600 bg-white/50 p-2 rounded-lg inline-block border border-blue-200">
                            + Punkty do oficjalnego rankingu PFP 🇵🇱
                        </div>
                    </div>
                </div>

                <p class="text-sm text-gray-500 italic">
                    Po każdej edycji najlepsi awansują wyżej, a słabsi spadają. To gwarantuje wyrównany poziom w kolejnym sezonie.
                </p>
            </div>
        `,
        features: [
            "Punkty do rankingu PFP",
            "Mecze 3-setowe",
            "System Awansów i Spadków",
            "Elastyczny Grafik"
        ],
        ctaLink: "https://kluby.org/gdynia-padel-club/rozgrywki",
        ctaText: "Dołącz do rozgrywek",
    },

    // --- ZMIANA TUTAJ: TRENINGI INDYWIDUALNE Z TRENERAMI ---
    {
        slug: "treningi-indywidualne",
        title: "Treningi Indywidualne",
        subtitle: "Twój najszybszy progres",
        image: "/offer/individual.webp", // Upewnij się, że masz to zdjęcie
        icon: User, // import { User } from "lucide-react"
        description: `
            <p>Najskuteczniejsza forma nauki. Podczas treningu indywidualnego cała uwaga trenera skupiona jest wyłącznie na Tobie.</p>
            <p>Niezależnie od tego, czy chcesz poprawić technikę bandejy, nauczyć się gry o szyby, czy po prostu zacząć przygodę z padlem w komfortowych warunkach – to opcja dla Ciebie.</p>
        `,
        features: [
            "Dopasowane godziny",
            "Indywidualny plan rozwoju",
            "Sprzęt w cenie",
            // "Analiza wideo" <- USUNIĘTE ZGODNIE Z PROŚBĄ
            "Dostęp do piłek premium"
        ],
        ctaLink: "https://kluby.org/gdynia-padel-club/treningi",
        ctaText: "Umów trening",
        trainers: [
            {
                name: "Kuba",
                image: "/trainers/kuba.png",
                specialties: ["Treningi indywidualne", "Treningi grupowe", "Matchplay"],
                description: "Kilka słów o Kubie ✌🏽\n" +
                    "🔥 Od 2023 roku z ogromną pasją prowadzi treningi w naszym klubie.\n" +
                    "💪🏽 Na treningach skupia się na technice, ćwiczeniach dynamicznych i nad kontrolą piłki, ponadto często wplata elementy meczowe, żeby każdy widział realny progres podczas gry.\n" +
                    "😁 Podczas zajęć dba o świetną atmosferę, motywuje i rozśmiesza, ponadto ma super podejście do dzieci- cierpliwy, energiczny i zawsze z uśmiechnięty.\n" +
                    "🔊 A jego ulubiony okrzyk na treningu?\n" +
                    "„Do piły!!!” – usłyszycie to często 😁\n" +
                    "\n" +
                    "💪🏽Kuba na korcie daje z siebie wszystko i tego samego chce nauczyć swoich zawodników.\n"
            },
            {
                name: "Julia",
                image: "/trainers/julia.png",
                specialties: ["Treningi indywidualne", "Treningi grupowe", "Matchplay"],
                description: "Przedstawiamy JULIĘ, którą dobrze znacie, bo jest z nami od samego początku ❤️\n🎾 Z padlem związana jest od 2021 roku a od 2023 roku prowadzi treningi w naszym klubie\n🏅 Certyfikowana instruktorka padla – ukończyła kurs instruktorski w MS Academy\n🎓 Jest absolwentką studiów fizjoterapii, dzięki czemu doskonale rozumie pracę ciała i biomechanikę ruchu\n🏆 Jej największe osiągnięcie sportowe w padlu to 4. miejsce na Mistrzostwach Polski Kobiet\n🏃‍♀️ Ma sportowe korzenie – przez lata trenowała bieganie wyczynowo i zdobywała medale Mistrzostw Polski, dlatego na korcie ogromną uwagę przykłada do pracy nóg i wytrzymałości\n💪 Jej treningi są dynamiczne, intensywne i pełne energii, ale zawsze prowadzone w miłej, pozytywnej atmosferze"
            },
            {
                name: "Mariusz",
                image: "/trainers/mariusz.png",
                specialties: ["Treningi indywidualne", "Treningi grupowe", "Matchplay"],
                description: "Kilka słów o Mariuszu✌🏽\n" +
                    "🎾 Trener padla oraz trener piłki nożnej dzieci\n" +
                    "📚 Posiada kurs trenera personalnego, dietetyka sportowego oraz ukończył szkołę dietetyczną \n" +
                    "💪 Od 8 lat w pracy trenerskiej – jego motto to „sport to moja pasja i styl życia”\n" +
                    "😊 Na treningach stawia na dobrą atmosferę, motywację i kontakt z ludźmi\n" +
                    "👦 Posiada idealne podejście do pracy z dziećmi – cierpliwość, energia i uśmiech na każdym treningu\n" +
                    "🏃‍♂️ Aktywnie spędza czas i promuję zdrowy, zrównoważony styl życia\n" +
                    "⚡ Podobno najszybszy na korcie – a niespodziewane zagrania to jego główny atut 😉"
            },

            {
                name: "Jaro",
                image: "/trainers/jaro.png",
                specialties: ["Treningi indywidualne", "Treningi grupowe", "Polski / English"],
                description: "Kilka słów o Jarosławie✌🏽\n" +
                    "🎾 prowadzi treningi indywidualne i grupowe\n" +
                    "🎖️uczestnik kursu trenerskiego Bronze Level od Hello Padel Academy \n" +
                    "🔥 na korcie stawia na intensywność, pozytywną energię i rozwój każdego zawodnika\n" +
                    "✅ indywidualne podejście podczas treningów z nastawieniem na dobrą zabawę \n" +
                    "📝prowadzi treningi również w języku angielskim"
            },
        ]
    },
    // -------------------------------------------------------

    {
        slug: "turnieje",
        title: "Turnieje Weekendowe",
        subtitle: "Sportowe emocje w jeden dzień",
        image: "/offer/tournament.webp",
        icon: Medal,
        description: `
            <div class="space-y-8">
                <p class="text-lg text-gray-600 leading-relaxed">
                    Szukasz intensywnej dawki rywalizacji? Nasze <strong>Turnieje Weekendowe</strong> to cykliczne wydarzenia (raz w miesiącu lub co dwa), które stanowią doskonałe uzupełnienie ligi. To święto padla dla zawodników i kibiców.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                        <h4 class="font-bold text-gray-900 mb-2 flex items-center gap-2">⏱ Dynamiczny Format</h4>
                        <p class="text-sm text-gray-600">
                            Cała rywalizacja odbywa się <strong>jednego dnia</strong> – od fazy grupowej aż po finały. Warto zarezerwować sobie co najmniej pół dnia na grę i kibicowanie.
                        </p>
                    </div>

                    <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                        <h4 class="font-bold text-gray-900 mb-2 flex items-center gap-2">🍰 Atmosfera i Nagrody</h4>
                        <p class="text-sm text-gray-600">
                            Na zwycięzców czekają nagrody, a dla wszystkich uczestników zapewniamy <strong>poczęstunek</strong>. To idealna okazja do integracji i poznania nowych partnerów do gry.
                        </p>
                    </div>
                </div>

                <div class="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                    <h4 class="font-bold text-blue-900 mb-2 flex items-center gap-2">🏅 Kategorie i Ranking</h4>
                    <p class="text-sm text-blue-800 mb-3">
                        Wybierz poziom dla siebie: <strong>A, B, C, Kobiety, Mikst lub 45+</strong>. Niezależnie od doświadczenia, znajdziesz tu równorzędnych rywali.
                    </p>
                    <div class="text-xs font-bold text-blue-600 bg-white/50 p-2 rounded-lg inline-block border border-blue-200">
                        + Punkty do rankingu PFP (zależnie od rangi) 🇵🇱
                    </div>
                </div>
            </div>
        `,
        features: [
            "Kategorie A/B/C/Kobiety/Mix/45+",
            "Format Jednodniowy",
            "Poczęstunek i Nagrody",
            "Punkty PFP (wybrane edycje)"
        ],
        ctaLink: "https://kluby.org/gdynia-padel-club/turnieje",
        ctaText: "Kalendarz Turniejów",
    },
    {
        slug: "sklep",
        title: "Pro Shop",
        subtitle: "Sprzęt najlepszych marek",
        image: "/offer/shop.webp",
        icon: ShoppingBag,
        description: `<p>Nie musisz szukać daleko. W naszym klubowym sklepie...</p>`,
        features: ["Rakiety testowe", "Odzież i obuwie", "Piłki i akcesoria", "Fachowe doradztwo"],
        ctaLink: "/kontakt",
        ctaText: "Zapytaj o dostępność",
    },
    {
        slug: "biznes",
        title: "Eventy i Integracje",
        subtitle: "Firmy, Urodziny, Okazje Specjalne",
        image: "/offer/events.webp",
        icon: Users, // Pamiętaj o imporcie Users
        description: `
            <div class="space-y-8">
                <p class="text-xl text-gray-600 leading-relaxed font-light">
                    Szukasz miejsca na integrację inną niż wszystkie? <strong class="text-gray-900 font-bold">Gdynia Padel Club</strong> to przestrzeń, gdzie sport łączy się z relaksem. Zorganizuj u nas event, o którym Twój zespół będzie rozmawiał tygodniami.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                        <h4 class="text-lg font-heading font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🎉</span> Imprezy Szyte na Miarę
                        </h4>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Niezależnie od okazji – integracja działu, urodziny czy wieczór kawalerski. Zapewniamy kompleksową obsługę: od <strong>nauki gry z trenerami</strong>, przez turniej z sędzią, aż po strefę chillout.
                        </p>
                    </div>

                    <div class="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                        <h4 class="text-lg font-heading font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <span class="text-2xl">🍕</span> Catering Partnerski
                        </h4>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Współpracujemy z trójmiejskimi klasykami. <strong>Pasta Miasta</strong> i <strong>Czerwony Piec</strong> dostarczą pizzę i pasty. W sezonie letnim odpalamy klimatyczną strefę <strong>Grill</strong>.
                        </p>
                    </div>
                </div>
                
                <div class="bg-blue-50 p-6 rounded-3xl border border-blue-100 text-center">
                    <p class="font-medium text-blue-800 mb-0">
                        Masz własny pomysł? Jesteśmy elastyczni. Skontaktuj się z nami, a przygotujemy scenariusz idealny dla Twojej grupy.
                    </p>
                </div>
            </div>
        `,
        features: [
            "Organizacja turnieju",
            "Catering Partnerski",
            "Strefa Grill (Lato)",
            "Obsługa Trenerów"
        ],
        ctaLink: "mailto:recepcja@gdyniapadelclub.pl",
        ctaText: "Zapytaj o ofertę",
    },
];