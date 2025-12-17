import { getTournament } from "@/app/actions/tournament-actions";
import { TournamentForm } from "./TournamentForm"; // Importujemy nowy komponent

export default async function AdminTournamentPage() {
    const tournament = await getTournament();

    if (!tournament) {
        return <div className="p-8 text-red-500">Nie znaleziono rekordu turnieju w bazie. Dodaj go przez SQL.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Edycja Najbliższego Turnieju</h1>
            {/* Przekazujemy dane do komponentu klienckiego */}
            <TournamentForm initialData={tournament} />
        </div>
    );
}