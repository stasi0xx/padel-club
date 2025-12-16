export interface ScheduleEvent {
    time: string;
    groupName: string;
    trainer: string;
    level: "B" | "C" | "B/C"; // Dodałem B/C bo często są grupy mieszane
    spots: string;
}

export interface DaySchedule {
    day: string;
    events: ScheduleEvent[];
}

export const weeklySchedule: DaySchedule[] = [
    {
        day: "Poniedziałek",
        events: [
            { time: "17:00", groupName: "Trening Grupowy C3", level: "C", trainer: "Mariusz", spots: "Sprawdź" },
            { time: "18:00", groupName: "Trening Grupowy B4/C1", level: "B/C", trainer: "Mariusz", spots: "Sprawdź" },
            { time: "19:00", groupName: "Trening Grupowy C2/C3", level: "C", trainer: "Mariusz", spots: "Sprawdź" },
        ]
    },
    {
        day: "Wtorek",
        events: [
            { time: "09:00", groupName: "Trening Grupowy C3", level: "C", trainer: "Mariusz", spots: "Sprawdź" },
            { time: "17:00", groupName: "Trening Grupowy B3", level: "B", trainer: "Julia", spots: "Sprawdź" },
            { time: "18:00", groupName: "Trening Grupowy B4/C1", level: "B/C", trainer: "Daniel", spots: "Sprawdź" },
            { time: "19:00", groupName: "Trening Grupowy C1/C2", level: "C", trainer: "Mati", spots: "Sprawdź" },
        ]
    },
    {
        day: "Środa",
        events: [
            { time: "16:30", groupName: "Trening Grupowy C2/C3", level: "C", trainer: "Seba", spots: "Sprawdź" },
            { time: "17:30", groupName: "Trening Grupowy C1", level: "C", trainer: "Seba", spots: "Sprawdź" },
            { time: "17:30", groupName: "Trening Grupowy C3", level: "C", trainer: "Mariusz", spots: "Sprawdź" },
            { time: "18:30", groupName: "Trening Grupowy C2/C3", level: "C", trainer: "Seba", spots: "Sprawdź" },
        ]
    },
    {
        day: "Czwartek",
        events: [
            { time: "09:00", groupName: "Trening Grupowy C2/C3", level: "C", trainer: "Jarek", spots: "Sprawdź" },
            { time: "10:30", groupName: "Trening Grupowy B4/C1", level: "B/C", trainer: "Mariusz", spots: "Sprawdź" },
            { time: "16:30", groupName: "Trening Grupowy C3", level: "C", trainer: "Jarek", spots: "Sprawdź" },
            { time: "17:00", groupName: "Trening Grupowy C1", level: "C", trainer: "Kuba", spots: "Sprawdź" },
        ]
    },
    {
        day: "Piątek",
        events: [
            // Tutaj w aktualnym grafiku widziałem głównie turnieje/matchplaye,
            // ale zostawiam pustą tablicę gotową do edycji
        ]
    },
    // Sobota/Niedziela zazwyczaj są turniejowe
];