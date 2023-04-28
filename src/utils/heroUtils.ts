import { IHero, IHeroStats } from 'src/models/hero.model';

export const isValidHero = (hero: IHero): boolean => {
  let valid = true;
  const total = getTotalPoints(hero, () => {
    valid = false;
  });
  if (!valid) {
    return false;
  }
  if (total !== 60) {
    return false;
  }
  if (hero.name === undefined || hero.name === '') {
    return false;
  }
  return true;
};

export const getTotalPoints = (
  hero: IHero,
  errorCallback = () => {}
): number => {
  const keys: (keyof IHeroStats)[] = [
    'health',
    'speed',
    'dodge',
    'critical',
    'defense',
    'strength',
  ];

  let total = 0;
  for (const key of keys) {
    if ((hero[key] as number) < 5) errorCallback();
    total += hero[key] as number;
  }
  return total;
};
