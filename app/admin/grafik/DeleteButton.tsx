"use client";
import { deleteScheduleItem } from "@/app/actions/schedule-actions";
import { Trash2 } from "lucide-react";
import { useTransition } from "react";

export function DeleteButton({ id }: { id: string }) {
    const [isPending, startTransition] = useTransition();

    return (
        <button
            onClick={() => startTransition(() => deleteScheduleItem(id))}
            disabled={isPending}
            className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
        >
            <Trash2 size={18} className={isPending ? "opacity-50" : ""} />
        </button>
    );
}