import { Injectable } from '@angular/core';
import { HeroTypes } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroSource {
  getHeroTypesSource = (type: HeroTypes): string => {
    return './assets/HeroTypes/' + type + '.png';
  };
}
