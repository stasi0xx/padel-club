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
            "DJ i Grill na Nocnym Graniu",
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
        description: `<p>Padel to jeden z najbezpieczniejszych sportów...</p>`,
        features: ["Zajęcia od 5. roku życia", "Sprzęt dla dzieci", "Bezpieczna infrastruktura", "Zabawy ruchowe"],
        ctaLink: "https://kluby.org/gdynia-padel-club/zapisy",
        ctaText: "Zapisz dziecko",
    },
    {
        slug: "liga",
        title: "Liga Klubowa",
        subtitle: "Rywalizacja na najwyższym poziomie",
        image: "/offer/league.webp",
        icon: Trophy,
        description: `<p>Dla graczy szukających regularnej rywalizacji...</p>`,
        features: ["Podział na dywizje", "Elastyczne terminy meczów", "Ranking online", "Nagrody dla najlepszych"],
        ctaLink: "https://kluby.org/gdynia-padel-club/liga",
        ctaText: "Dołącz do ligi",
    },

    // --- ZMIANA TUTAJ: TRENINGI INDYWIDUALNE Z TRENERAMI ---
    {
        slug: "treningi-indywidualne",
        title: "Treningi Indywidualne",
        subtitle: "Szybki progres 1 na 1",
        image: "/offer/individual.webp",
        icon: User,
        description: `
      <p>Najszybsza droga do poprawy Twojej gry. Podczas treningu indywidualnego trener poświęca 100% uwagi Twojej technice. To idealne rozwiązanie, jeśli chcesz wyeliminować konkretne błędy lub nauczyć się zaawansowanych uderzeń.</p>
      <p>Nasi trenerzy to doświadczeni zawodnicy i certyfikowani instruktorzy, którzy dostosują plan treningowy do Twoich potrzeb.</p>
    `,
        features: ["Pełna uwaga trenera", "Analiza wideo", "Dopasowany plan", "Elastyczne godziny"],
        ctaLink: "https://kluby.org/gdynia-padel-club/trenerzy",
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
                name: "Sebastian",
                image: "/trainers/sebastian.png",
                specialties: ["Treningi indywidualne", "Treningi grupowe", "Matchplay"],
                description: " przedstawiamy Wam naszego trenera Sebastiana 🤚🏽 \n" +
                    "🔥Certyfikowany trener padla, ukończył kurs w MS Academy 🏅\n" +
                    "🏆 Jest wielokrotnym medalistą na turniejach padlowych.\n" +
                    "➡️W pracy trenerskiej stawia na zrozumienie gry, rozwój techniki i indywidualne podejście do każdego zawodnika.\n" +
                    "🧨 Jego podejście to: „Nie wierzę w „sztywne schematy” — wierzę w dopasowanie treningu do Twoich potrzeb, stylu i poziomu gry.\n" +
                    "Moją misją jest sprawić, żebyś nie tylko grał lepiej, ale też rozumiał padla, czuł radość z każdego punktu i widział swój postęp z tygodnia na tydzień”.💪"
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
                name: "Paweł",
                image: "/trainers/pawel.png",
                specialties: ["Treningi indywidualne", "Treningi grupowe", "Matchplay"],
                description: "Kilka słów o Pawle ✌🏽\n" +
                    "🎾Z tenisem jest związany już ponad 21 lat – zaczynał jako zawodnik, a w 2012 roku uzyskał tytuł trenera tenisa na AWFiS w Gdańsku. \n" +
                    "📕Jest również absolwentem Akademii Wychowania Fizycznego i Sportu w Gdańsku, gdzie zdobył solidne podstawy do pracy trenerskiej.\n" +
                    "💪🏽Na treningach stawia na technikę, zrozumienie gry i indywidualne podejście – bo każdy zawodnik ma swoją własną drogę do lepszego tenisa/padla 🎾\n" +
                    "➡️W 2022 roku poznał padla, który totalnie go wciągnął. Teraz chcę połączyć swoje doświadczenie trenerskie z nową pasją i pomagać innym odkrywać, jak dużo frajdy daje gra w padla! 🔥"
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
        title: "Turnieje",
        subtitle: "Weekendowe emocje",
        image: "/offer/tournament.webp",
        icon: Medal,
        description: `<p>Cyklicznie organizujemy turnieje w formatach Mexicano...</p>`,
        features: ["Formaty Mexicano / Americano", "Kategorie Open / Damska / Mixt", "Puchary i nagrody", "Poczęstunek"],
        ctaLink: "https://kluby.org/gdynia-padel-club/turnieje",
        ctaText: "Zapisz się",
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
];