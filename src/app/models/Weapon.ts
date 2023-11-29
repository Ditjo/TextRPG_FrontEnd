import { Inventory } from "./Inventory";
import { WeaponType } from "./WeaponType";

export interface Weapon{
    id: number;
    weaponTypeId: number;
    weaponName: string | null;
    weaponDamageModifier: number;
    skillRoll: number;
    availableToHero: boolean;
    starterWeapon: boolean;
    value: number = 0;
    note: string | null;

    weaponType: WeaponType | null;
    inventories: Inventory[] | null;
}