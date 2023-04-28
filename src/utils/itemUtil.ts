import { IHeroStats } from 'src/models/hero.model';
import { IItem } from 'src/models/item.model';

export const isValidItem = (item: IItem): boolean => {
  let valid = true;
  const total = getTotalPoints(item, () => {
    valid = false;
  });
  if (!valid) {
    return false;
  }
  if (total !== 0) {
    return false;
  }
  if (item.name === undefined || item.name === '') {
    return false;
  }
  return true;
};

export const getTotalPoints = (
  item: IItem,
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
    if ((item.stats![key] as number) > 5 || (item.stats![key] as number) < -5)
      errorCallback();
    total += item.stats![key] as number;
  }
  return total;
};
