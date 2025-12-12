import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Regulamin Klubu | Gdynia Padel Club",
    description: "Zasady korzystania z kortów, rezerwacje i bezpieczeństwo w Gdynia Padel Club.",
};

export default function RegulationsPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                {/* Nagłówek */}
                <div className="mb-12 border-b border-gray-100 pb-8">
                    <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 uppercase">
                        Regulamin Klubu
                    </h1>
                    <p className="text-gray-500">
                        Obowiązuje od: {new Date().toLocaleDateString("pl-PL")}
                    </p>
                </div>

                {/* Treść Regulaminu */}
                <div className="prose prose-lg prose-blue max-w-none text-gray-700">

                    <section className="mb-10">
                        <h2>1. Postanowienia Ogólne</h2>
                        <ol>
                            <li>Niniejszy regulamin określa zasady korzystania z obiektu sportowego <strong>Gdynia Padel Club</strong> (dalej "Klub").</li>
                            <li>Każda osoba przebywająca na terenie Klubu zobowiązana jest do zapoznania się z Regulaminem i przestrzegania jego postanowień.</li>
                            <li>Klub jest otwarty w godzinach podanych na stronie internetowej oraz w systemie rezerwacyjnym.</li>
                        </ol>
                    </section>

                    <section className="mb-10">
                        <h2>2. Zasady Korzystania z Kortów</h2>
                        <ol>
                            <li>Wejście na kort jest możliwe wyłącznie po dokonaniu wcześniejszej rezerwacji i opłaceniu gry.</li>
                            <li>Gra na korcie odbywa się w <strong>obuwiu sportowym o płaskiej podeszwie</strong> (typu non-marking), przystosowanym do nawierzchni ze sztucznej trawy. Obuwie musi być czyste.</li>
                            <li>Zabrania się gry w obuwiu piłkarskim (korki, lanki) oraz obuwiu brudzącym nawierzchnię.</li>
                            <li>Gracze zobowiązani są do kulturalnego zachowania i niezakłócania gry innym użytkownikom.</li>
                            <li>Po zakończeniu gry należy niezwłocznie opuścić kort, aby umożliwić rozpoczęcie gry kolejnym osobom.</li>
                        </ol>
                    </section>

                    <section className="mb-10 bg-red-50 p-6 rounded-2xl border border-red-100">
                        <h2 className="text-red-700 mt-0">3. Rezerwacje i Anulowanie (Ważne)</h2>
                        <ol>
                            <li>Rezerwacji kortów dokonuje się online za pośrednictwem systemu partnerskiego <a href="https://kluby.org" target="_blank" rel="noopener noreferrer">Kluby.org</a>.</li>
                            <li>Opłata za kort musi zostać uiszczona przed rozpoczęciem gry.</li>
                            <li>
                                <strong>Anulowanie rezerwacji:</strong>
                                <ul className="list-disc pl-5 mt-2">
                                    <li>Bezkosztowe anulowanie rezerwacji jest możliwe najpóźniej na <strong>24 godziny</strong> przed planowanym terminem gry. W takim przypadku uiszczona opłata zostanie zwrócona (lub zapisana jako środki do wykorzystania, zgodnie z polityką systemu Kluby.org).</li>
                                    <li>W przypadku anulowania rezerwacji na <strong>mniej niż 24 godziny</strong> przed terminem, opłata za kort <strong>nie podlega zwrotowi</strong>.</li>
                                </ul>
                            </li>
                            <li>Klub zastrzega sobie prawo do odwołania rezerwacji z przyczyn technicznych lub niezależnych (np. awaria oświetlenia, ekstremalne warunki pogodowe na kortach otwartych). W takim przypadku Klient otrzyma pełny zwrot środków lub propozycję innego terminu.</li>
                        </ol>
                    </section>

                    <section className="mb-10">
                        <h2>4. Wypożyczalnia Sprzętu</h2>
                        <ol>
                            <li>Klub udostępnia możliwość wypożyczenia rakiet i zakupu piłek w recepcji.</li>
                            <li>Wypożyczający ponosi pełną odpowiedzialność materialną za uszkodzenie lub zgubienie wypożyczonego sprzętu.</li>
                            <li>Rakiety należy zwrócić do recepcji bezpośrednio po zakończeniu gry.</li>
                        </ol>
                    </section>

                    <section className="mb-10">
                        <h2>5. Bezpieczeństwo i Odpowiedzialność</h2>
                        <ol>
                            <li>Osoby korzystające z kortów robią to na własną odpowiedzialność. Klub nie ponosi odpowiedzialności za kontuzje i urazy powstałe w wyniku gry, chyba że wynikają one z zaniedbań Klubu (np. uszkodzona infrastruktura).</li>
                            <li>Klub nie odpowiada za rzeczy wartościowe pozostawione w szatniach bez nadzoru. Zalecamy zabieranie cennych przedmiotów ze sobą na kort lub korzystanie z zamykanych szafek (jeśli są dostępne).</li>
                            <li>Osoby pod wpływem alkoholu lub środków odurzających mają zakaz wstępu na teren obiektu.</li>
                            <li>Zabrania się wnoszenia na korty szklanych butelek, jedzenia oraz żucia gumy.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>6. Postanowienia Końcowe</h2>
                        <p>
                            W sprawach nieuregulowanych niniejszym Regulaminem decyduje obsługa Klubu. Wszelkie skargi i wnioski prosimy kierować na adres e-mail: <a href="mailto:kontakt@gdyniapadelclub.pl">kontakt@gdyniapadelclub.pl</a>.
                        </p>
                    </section>

                </div>

                {/* Przycisk powrotu */}
                <div className="mt-16 text-center">
                    <Link
                        href="/"
                        className="inline-block px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-full transition-colors"
                    >
                        Wróć na stronę główną
                    </Link>
                </div>

            </div>
        </main>
    );
}