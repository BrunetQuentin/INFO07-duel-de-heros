export enum HeroTypes {
  UNDEFINED = '',
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

export interface IHeroStats {
  health?: number;
  speed?: number;
  dodge?: number;
  critical?: number;
  defense?: number;
  strength?: number;
}

export interface IHero extends IHeroStats {
  id?: string;
  name?: string;
  class?: HeroTypes[];
  items?: any[];
  image?: string;
  abilities?: {
    [key in SupportSource & AttackSource]?: number;
  };
}
