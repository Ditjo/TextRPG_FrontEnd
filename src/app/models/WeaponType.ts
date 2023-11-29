import { SkillRollType } from "./SkillRollType";

export interface WeaponType{
    id: number;
    weaponTypeName: string | null;
    skillRollTypeId: number;
    energyCost: number;
    damageDice: number;
    range: number;

    skillRollType: SkillRollType | null;
}