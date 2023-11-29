import { PotionType } from "./PotionType";

export interface Potion{
    id: number;
    inventoryId: number;
    potionId: number;
    amount: number;

    potionType: PotionType[] | null;
}