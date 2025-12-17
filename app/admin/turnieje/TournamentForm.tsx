"use client";

import { useActionState } from "react"; // React 19 Hook
import { updateTournament, TournamentData } from "@/app/actions/tournament-actions";
import { Save, Loader2 } from "lucide-react";

// Prosty helper do wyświetlania błędów pola
function ErrorMsg({ errors }: { errors?: string[] }) {
    if (!errors || errors.length === 0) return null;
    return <p className="text-red-500 text-xs mt-1">{errors[0]}</p>;
}

export function TournamentForm({ initialData }: { initialData: TournamentData }) {
    // useActionState obsługuje stan formularza (błędy/sukces) i loading
    const [state, action, isPending] = useActionState(updateTournament, null);

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            {state?.success && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-200 rounded-xl">
                    ✅ {state.message}
                </div>
            )}

            {state?.message && !state.success && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl">
                    ⚠️ {state.message}
                </div>
            )}

            <form action={action} className="space-y-6">
                <input type="hidden" name="id" value={initialData.id} />

                {/* SEKCJ 1: Widoczność */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <input
                        type="checkbox"
                        name="is_showcase"
                        defaultChecked={initialData.is_showcase}
                        className="w-6 h-6 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                    />
                    <div>
                        <label className="font-bold text-gray-900 block">Pokaż baner na stronie</label>
                        <p className="text-sm text-gray-500">Odznacz, jeśli aktualnie nie ma planów turniejowych.</p>
                    </div>
                </div>

                {/* SEKCJA 2: Główne Dane */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nazwa Turnieju</label>
                        <input type="text" name="title" defaultValue={initialData.title} className="w-full rounded-lg border-gray-300 border p-2.5" required />
                        <ErrorMsg errors={state?.error?.title} />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status (np. Zapisy otwarte)</label>
                        <input type="text" name="status" defaultValue={initialData.status} className="w-full rounded-lg border-gray-300 border p-2.5" required />
                        <ErrorMsg errors={state?.error?.status} />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Data (np. 25-26 Stycznia)</label>
                        <input type="text" name="date" defaultValue={initialData.date} className="w-full rounded-lg border-gray-300 border p-2.5" required />
                        <ErrorMsg errors={state?.error?.date} />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Godzina (np. Start 09:00)</label>
                        <input type="text" name="time" defaultValue={initialData.time} className="w-full rounded-lg border-gray-300 border p-2.5" required />
                        <ErrorMsg errors={state?.error?.time} />
                    </div>
                </div>

                {/* SEKCJA 3: Kategorie i Linki */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kategorie (oddziel przecinkami)</label>
                    <input
                        type="text"
                        name="categories"
                        defaultValue={initialData.categories.join(", ")}
                        placeholder="Open A, Open B, Kobiety"
                        className="w-full rounded-lg border-gray-300 border p-2.5"
                        required
                    />
                    <ErrorMsg errors={state?.error?.categories} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Link do zdjęcia</label>
                        <input type="text" name="image" defaultValue={initialData.image} className="w-full rounded-lg border-gray-300 border p-2.5" required />
                        <ErrorMsg errors={state?.error?.image} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Link do zapisów</label>
                        <input type="url" name="link" defaultValue={initialData.link} className="w-full rounded-lg border-gray-300 border p-2.5" required />
                        <ErrorMsg errors={state?.error?.link} />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full flex justify-center items-center gap-2 bg-[var(--color-primary)] text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isPending ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                    {isPending ? "Zapisywanie..." : "Zapisz Zmiany"}
                </button>
            </form>
        </div>
    );
}