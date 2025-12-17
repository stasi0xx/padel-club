// data/news.ts

export interface NewsItem {
    id: string;
    image: string;
    date: string;
    title: string;
    excerpt: string;
    permalink: string;
    // Link do Instagrama lub wewnętrzny
}

export const newsData: NewsItem[] = [
    {
        id: "1",
        image: "/news/mikolajki.jpg", // Upewnij się, że masz te zdjęcia w public/news/
        date: "06.12.2024",
        title: "Mikołajkowe Mexicano!",
        excerpt: "Niesamowita atmosfera podczas turnieju mikołajkowego. Dziękujemy wszystkim za udział i gratulujemy zwycięzcom! Ho ho ho! 🎅",
        permalink: "https://www.instagram.com/gdynia_padel_club/",
    },
    {
        id: "2",
        image: "/news/santa-coach.jpg",
        date: "05.12.2024",
        title: "Treningi z Mikołajem",
        excerpt: "Nasz trener Mariusz w specjalnym stroju dba o formę najmłodszych. Zapraszamy na zajęcia dla dzieci w każdy wtorek i czwartek.",
        permalink: "https://www.instagram.com/gdynia_padel_club/",
    },
    {
        id: "3",
        image: "/news/turniej.jpg",
        date: "20.12.2023",
        title: "Wielki Turniej Świąteczny",
        excerpt: "Zapisy otwarte! Kategoria C, startujemy o 18:00. Pamiętajcie, że liczba miejsc jest ograniczona. Do wygrania sprzęt o wartości 1000 zł.",
        permalink: "https://www.instagram.com/gdynia_padel_club/",
    },
    // Tutaj możesz dodać starsze posty, które pojawią się tylko na podstronie /aktualnosci
    {
        id: "4",
        image: "/hero-bg.jpg", // Placeholder
        date: "15.11.2023",
        title: "Otwarcie sezonu zimowego",
        excerpt: "Balon już stoi! Zapraszamy na gry na kortach krytych. Rezerwacje otwarte w systemie kluby.org.",
        permalink: "https://www.instagram.com/gdynia_padel_club/",
    },
];