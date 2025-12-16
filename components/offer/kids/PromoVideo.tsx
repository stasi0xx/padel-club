"use client";

export function PromoVideo() {
    return (
        <section className="my-12 flex flex-col items-center">

            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
                Zobacz jak trenujemy! 🎥
            </h3>

            {/* Kontener imitujący ekran telefonu - idealny dla pionowego wideo */}
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-gray-900 bg-black">
                <video
                    className="w-full h-full object-cover"
                    controls
                    playsInline // Ważne: zapobiega wymuszaniu pełnego ekranu na iPhone
                    poster="/viedo/poster.png" // Pamiętaj, że poster też zostanie przycięty do pionu, chyba że masz pionową grafikę
                    preload="none"
                >
                    <source src="/viedo/kids-promo.mp4" type="video/mp4" />
                    Twoja przeglądarka nie obsługuje wideo.
                </video>

                {/* Opcjonalny dekoracyjny "notch" lub belka na dole, jeśli chcesz styl telefonu */}
                {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-xl z-10 pointer-events-none" /> */}
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center max-w-md">
                Kliknij play, aby zobaczyć urywki z naszej Sekcji Juniora.
            </p>
        </section>
    );
}