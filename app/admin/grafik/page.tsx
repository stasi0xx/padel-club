import { getSchedule, addScheduleItem, deleteScheduleItem, type ScheduleItem } from "@/app/actions/schedule-actions";
import { Trash2, Plus } from "lucide-react";

// Komponent kliencki do usuwania (żeby obsłużyć onClick)
import { DeleteButton } from "./DeleteButton"; // Zaraz stworzymy ten mały komponent

export default async function AdminSchedulePage() {
    const schedule = await getSchedule();

    // Grupujemy dane po dniach dla czytelności w adminie
    const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

    return (
        <div className="max-w-5xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Zarządzanie Grafikiem</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* KOLUMNA 1: Formularz Dodawania */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 h-fit sticky top-8">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Plus className="text-[var(--color-primary)]" /> Dodaj Trening
                    </h2>

                    <form action={addScheduleItem} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Dzień</label>
                            <select name="day" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required>
                                {days.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Godzina (HH:MM)</label>
                                <input type="time" name="time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Poziom</label>
                                <select name="level" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border">
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="B/C">B/C</option>
                                    <option value="Junior">Junior (Dzieci)</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nazwa Grupy</label>
                            <input type="text" name="group_name" placeholder="np. Trening Techniczny" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Trener</label>
                            <input type="text" name="trainer" placeholder="np. Mariusz" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" required />
                        </div>

                        <input type="hidden" name="spots" value="Sprawdź" />

                        <button type="submit" className="w-full bg-[var(--color-primary)] text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors">
                            Dodaj do grafiku
                        </button>
                    </form>
                </div>

                {/* KOLUMNA 2: Lista Istniejących */}
                <div className="space-y-6">
                    {days.map(day => {
                        const dayEvents = schedule.filter(s => s.day === day);
                        if (dayEvents.length === 0) return null;

                        return (
                            <div key={day} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-lg text-gray-800 mb-3 border-b pb-2">{day}</h3>
                                <div className="space-y-2">
                                    {dayEvents.map((item: ScheduleItem) => (
                                        <div key={item.id} className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                                            <div>
                                                <div className="font-bold text-gray-900">{item.time} - {item.group_name}</div>
                                                <div className="text-sm text-gray-500">
                                                    Trener: {item.trainer} | Poziom: <span className="font-bold text-blue-600">{item.level}</span>
                                                </div>
                                            </div>
                                            <DeleteButton id={item.id} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}