export default class Hero {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export enum HeroTypes {
  WIZARD = 'WIZARD',
  WARRIOR = 'WARRIOR',
  ROGUE = 'ROGUE',
  CLERIC = 'CLERIC',
  ARCHER = 'ARCHER',
  SORCERER = 'SORCERER',
  PALADIN = 'PALADIN',
  RANGER = 'RANGER',
  BARD = 'BARD',
  DRUID = 'DRUID',
  MONK = 'MONK',
  BARBARIAN = 'BARBARIAN',
  FIGHTER = 'FIGHTER',
  WARLOCK = 'WARLOCK',
  ASSASSIN = 'ASSASSIN',
  NINJA = 'NINJA',
  SAMURAI = 'SAMURAI',
  SHAMAN = 'SHAMAN',
  PSIONIC = 'PSIONIC',
  PSYCHIC = 'PSYCHIC',
}

export enum AttackSource {
  AP = 'AbilityPower',
  AD = 'AttackDamage',
  AS = 'AttackSpeed',
  MA = 'MentalAttack',
  PA = 'ParanormalAttack',
}

export enum SupportSource {
  MUSIC = 'Music',
  POTION = 'Potion',
  MAGIC = 'Magic',
  PRIEST = 'Priest',
}

export enum Abilities {
  ATTACK = 'Attack',
  SUPPORT = 'Support',
}

export type SpecsType = {
  Abilities?: Abilities[];
  AttackSource?: AttackSource[];
  SupportSource?: SupportSource[];
};

export const HeroSpecs: { [key in HeroTypes]?: SpecsType } = {
  [HeroTypes.ARCHER]: {
    Abilities: [Abilities.ATTACK],
    AttackSource: [AttackSource.AD, AttackSource.AS],
  },
  [HeroTypes.ASSASSIN]: {
    Abilities: [Abilities.ATTACK],
    AttackSource: [AttackSource.AD],
  },
  [HeroTypes.CLERIC]: {
    Abilities: [Abilities.SUPPORT],
    SupportSource: [SupportSource.MAGIC],
  },
};

export interface IHero {
  id: number;
  name: string;
  type: HeroTypes;
  health: string;
  dodge: number;
}

export const HEROES: IHero[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];
