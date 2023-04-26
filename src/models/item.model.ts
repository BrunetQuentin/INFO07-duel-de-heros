import { AttackSource, SupportSource } from './hero.model';

export type IItem = {
  id?: string;
  name?: string;
  stats?: {
    [key in AttackSource & SupportSource as string]: number;
  };
  image?: string;
  passives?: passive[];
  actives?: active[];
};

export type passive = {
  interval: number;
  effect: passiveEffect;
  value: number;
};

export enum passiveEffect {
  HEAL = 'HEAL',
  DAMAGE = 'DAMAGE',
  BUFF = 'BUFF',
  DEBUFF = 'DEBUFF',
}

export type active = {
  effect: activeEffect;
  value: number;
  duration: number;
  cooldown: number;
};

export enum activeEffect {
  HEAL = 'HEAL',
  DAMAGE = 'DAMAGE',
  BUFF = 'BUFF',
  DEBUFF = 'DEBUFF',
}
