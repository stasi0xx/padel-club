// lib/pricing-config.ts
import {
    Clock,
    Users,
    Baby,
    User,
    Trophy,
    Zap,
    Star,
    Dumbbell,
    Calendar,
    Sparkles,
    LucideIcon
} from "lucide-react";

// 1. Rejestr dostępnych ikon. Admin wybierze nazwę (klucz), my wyświetlimy ikonę (wartość).
export const ICON_MAP: Record<string, LucideIcon> = {
    Clock,
    Users,
    Baby,
    User,
    Trophy,
    Zap,
    Star,
    Dumbbell,
    Calendar,
    Sparkles
};

// 2. Typy danych zgodne z DB
export interface PricingItem {
    label: string;
    price: string;
    isNote?: boolean;
}

export interface PricingPlan {
    id: string;
    category: string;
    description: string;
    icon_name: string; // Klucz do ICON_MAP
    highlight: boolean;
    items: PricingItem[];
    sort_order: number;
}