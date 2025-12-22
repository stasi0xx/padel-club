import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Polityka Prywatności | Gdynia Padel Club",
    description: "Zasady prywatności i pliki cookies. Informacja o zewnętrznym systemie rezerwacji.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                {/* Nagłówek */}
                <div className="mb-12 border-b border-gray-100 pb-8">
                    <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 uppercase">
                        Polityka Prywatności
                    </h1>
                    <p className="text-gray-500">
                        Obowiązuje od: {new Date().toLocaleDateString("pl-PL")}
                    </p>
                </div>

                {/* Treść */}
                <div className="prose prose-lg prose-blue max-w-none text-gray-700">

                    <section className="mb-10">
                        <h2>1. Informacje Wstępne</h2>
                        <p>
                            Szanujemy Twoją prywatność. Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób korzystamy z danych na stronie internetowej <strong>Gdynia Padel Club</strong>. Nasza strona ma charakter informacyjny i służy do prezentacji oferty klubu oraz przekierowania do zewnętrznych systemów rezerwacji.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2>2. Administrator Danych</h2>
                        <p>
                            Administratorem danych osobowych (w zakresie korespondencji mailowej lub plików cookies) jest <strong>Gdynia Padel Club</strong> z siedzibą w Gdyni przy ul. Zamenhofa 17, 81-218 Gdynia.
                        </p>
                        <p>
                            Kontakt z Administratorem jest możliwy drogą elektroniczną pod adresem: <a href="mailto:recepcja@gdyniapadelclub.pl" className="text-[var(--color-primary)] font-bold no-underline hover:underline">recepcja@gdyniapadelclub.pl</a>.
                        </p>
                    </section>

                    <section className="mb-10 bg-blue-50 p-6 rounded-2xl border border-blue-100">
                        <h2 className="text-[var(--color-primary)] mt-0">3. Rezerwacje i Płatności (Ważne)</h2>
                        <p>
                            <strong>Nasza strona internetowa nie zbiera, nie przechowuje ani nie przetwarza danych osobowych związanych z procesem rezerwacji kortów.</strong>
                        </p>
                        <p>
                            W celu dokonania rezerwacji, Użytkownik jest przekierowywany do zewnętrznego serwisu partnerskiego <strong>Kluby.org</strong>. W momencie przejścia na stronę operatora zewnętrznego, administratorem Twoich danych osobowych staje się podmiot zarządzający serwisem Kluby.org. Zachęcamy do zapoznania się z ich polityką prywatności przed dokonaniem rezerwacji.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2>4. Dane, które możemy przetwarzać</h2>
                        <p>Jako Gdynia Padel Club przetwarzamy Twoje dane tylko w dwóch przypadkach:</p>
                        <ul>
                            <li><strong>Kontakt e-mail/telefoniczny:</strong> Jeśli wyślesz do nas wiadomość e-mail lub zadzwonisz, będziemy przetwarzać Twoje dane (np. adres e-mail, treść wiadomości) wyłącznie w celu udzielenia odpowiedzi na Twoje pytanie.</li>
                            <li><strong>Media Społecznościowe:</strong> Jeśli wchodzisz w interakcję z naszymi profilami (Facebook, Instagram), przetwarzamy dane zgodnie z regulaminami tych platform.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2>5. Pliki Cookies i Analityka</h2>
                        <p>
                            Nasza strona może wykorzystywać pliki cookies (tzw. ciasteczka) w celach technicznych (niezbędnych do działania strony) oraz analitycznych (np. anonimowe statystyki odwiedzin), aby ulepszać jakość naszych usług.
                        </p>
                        <p>
                            Możesz zarządzać ustawieniami cookies bezpośrednio w swojej przeglądarce internetowej (zablokować je lub usunąć).
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2>6. Linki do stron zewnętrznych</h2>
                        <p>
                            Na stronie znajdują się odnośniki do innych stron www (np. Kluby.org, Instagram, Facebook). Nie ponosimy odpowiedzialności za zasady zachowania prywatności obowiązujące na tych stronach.
                        </p>
                    </section>

                    <section>
                        <h2>7. Twoje Prawa</h2>
                        <p>W zakresie danych, które przetwarzamy (np. korespondencja e-mail), przysługuje Ci prawo do:</p>
                        <ul>
                            <li>Dostępu do swoich danych.</li>
                            <li>Sprostowania danych.</li>
                            <li>Usunięcia danych.</li>
                            <li>Ograniczenia przetwarzania.</li>
                        </ul>
                    </section>

                </div>
            </div>
        </main>
    );
}