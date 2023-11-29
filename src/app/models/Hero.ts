import { Career } from "./Career";
import { Race } from "./Race";

export interface Hero{
    id: number;
    heroName: string | null;
    heroXp: number;
    level: number;
    raceId: number;
    careerId: number;
    note: string | null;

    race: Race | null;
    career: Career | null;
}