"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { PricingPlan, ICON_MAP, PricingItem } from "@/lib/pricing-config";
import { upsertPricingPlan, deletePricingPlan } from "@/app/actions/pricing-actions";
import { Trash2, Plus, Save, GripVertical } from "lucide-react";

export default function AdminPricingPage() {
    const [plans, setPlans] = useState<PricingPlan[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingPlan, setEditingPlan] = useState<Partial<PricingPlan> | null>(null);

    const supabase = createClient();

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchPlans = async () => {
        const { data } = await supabase
            .from("pricing_plans")
            .select("*")
            .order("sort_order", { ascending: true });
        if (data) setPlans(data as PricingPlan[]);
        setLoading(false);
    };

    const handleSave = async () => {
        if (!editingPlan || !editingPlan.category) return;

        try {
            await upsertPricingPlan(editingPlan);
            setEditingPlan(null);
            fetchPlans();
        } catch (e) {
            alert("Błąd zapisu: " + e);
        }
    };

    const handleDelete = async (id: string) => {
        if(!confirm("Czy na pewno usunąć ten plan?")) return;
        await deletePricingPlan(id);
        fetchPlans();
    };

    // Dodawanie elementu do listy items w edytowanym planie
    const addItemToPlan = () => {
        if (!editingPlan) return;
        const currentItems = editingPlan.items || [];
        setEditingPlan({
            ...editingPlan,
            items: [...currentItems, { label: "Nowa pozycja", price: "0 zł" }]
        });
    };

    // Edycja konkretnego itemu
    //@typescript-eslint/no-explicit-any
    const updateItem = (index: number, field: keyof PricingItem, value: any) => {
        if (!editingPlan || !editingPlan.items) return;
        const newItems = [...editingPlan.items];
        newItems[index] = { ...newItems[index], [field]: value };
        setEditingPlan({ ...editingPlan, items: newItems });
    };

    // Usuwanie itemu
    const removeItem = (index: number) => {
        if (!editingPlan || !editingPlan.items) return;
        const newItems = editingPlan.items.filter((_, i) => i !== index);
        setEditingPlan({ ...editingPlan, items: newItems });
    };

    if (loading) return <div>Ładowanie...</div>;

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Zarządzanie Cennikiem</h1>
                <button
                    onClick={() => setEditingPlan({
                        category: "",
                        description: "",
                        icon_name: "Zap",
                        highlight: false,
                        items: [],
                        sort_order: plans.length + 1
                    })}
                    className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
                >
                    <Plus size={20} /> Dodaj Plan
                </button>
            </div>

            {/* Lista Kafelków */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map((plan) => (
                    <div key={plan.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative group">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-lg">{plan.category}</h3>
                            <div className="flex gap-2">
                                <button onClick={() => setEditingPlan(plan)} className="text-blue-600 text-sm font-medium hover:underline">Edytuj</button>
                                <button onClick={() => handleDelete(plan.id)} className="text-red-500 hover:text-red-700"><Trash2 size={16}/></button>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">{plan.description}</p>
                        <div className="text-xs bg-gray-100 px-2 py-1 rounded inline-block">
                            Ikona: {plan.icon_name}
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL / FORMULARZ EDYCJI */}
            {editingPlan && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-6">
                            {editingPlan.id ? "Edytuj Plan" : "Nowy Plan"}
                        </h2>

                        <div className="space-y-4">
                            {/* Podstawowe dane */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nazwa Kategorii</label>
                                    <input
                                        type="text"
                                        value={editingPlan.category}
                                        onChange={(e) => setEditingPlan({...editingPlan, category: e.target.value})}
                                        className="w-full border rounded-lg p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Ikona</label>
                                    <select
                                        value={editingPlan.icon_name}
                                        onChange={(e) => setEditingPlan({...editingPlan, icon_name: e.target.value})}
                                        className="w-full border rounded-lg p-2"
                                    >
                                        {Object.keys(ICON_MAP).map(iconKey => (
                                            <option key={iconKey} value={iconKey}>{iconKey}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Opis</label>
                                <input
                                    type="text"
                                    value={editingPlan.description}
                                    onChange={(e) => setEditingPlan({...editingPlan, description: e.target.value})}
                                    className="w-full border rounded-lg p-2"
                                />
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={editingPlan.highlight || false}
                                    onChange={(e) => setEditingPlan({...editingPlan, highlight: e.target.checked})}
                                    className="w-5 h-5 text-blue-600 rounded"
                                />
                                <label className="text-sm font-medium">Wyróżniony (Popularne)</label>
                            </div>

                            {/* Sekcja Items (Ceny) */}
                            <div className="border-t pt-4 mt-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold">Pozycje Cennika</h3>
                                    <button onClick={addItemToPlan} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                                        <Plus size={16}/> Dodaj
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {editingPlan.items?.map((item, idx) => (
                                        <div key={idx} className="flex gap-2 items-start bg-gray-50 p-3 rounded-lg">
                                            <div className="flex-1 space-y-2">
                                                <input
                                                    placeholder="Etykieta (np. Pon-Pt)"
                                                    value={item.label}
                                                    onChange={(e) => updateItem(idx, 'label', e.target.value)}
                                                    className="w-full border rounded p-1 text-sm"
                                                />
                                                <input
                                                    placeholder="Cena (np. 100 zł)"
                                                    value={item.price}
                                                    onChange={(e) => updateItem(idx, 'price', e.target.value)}
                                                    className="w-full border rounded p-1 text-sm font-bold"
                                                />
                                                <div className="flex items-center gap-2 mt-1">
                                                    <input
                                                        type="checkbox"
                                                        checked={item.isNote || false}
                                                        onChange={(e) => updateItem(idx, 'isNote', e.target.checked)}
                                                    />
                                                    <span className="text-xs text-gray-500">To jest dopisek (nie cena)</span>
                                                </div>
                                            </div>
                                            <button onClick={() => removeItem(idx)} className="text-red-400 hover:text-red-600 p-1">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 pt-6 mt-6 border-t">
                                <button
                                    onClick={handleSave}
                                    className="flex-1 bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700 transition"
                                >
                                    Zapisz Zmiany
                                </button>
                                <button
                                    onClick={() => setEditingPlan(null)}
                                    className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-bold hover:bg-gray-300 transition"
                                >
                                    Anuluj
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}