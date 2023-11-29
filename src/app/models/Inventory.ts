import { Armour } from "./Armour";
import { Potion } from "./Potion";
import { Weapon } from "./Weapon";

export interface Inventory{
    id: number;
    gold: number;
    armourId: number;

    weapon: Weapon[] | null;
    armour: Armour | null;
    potion: Potion[] | null;
}