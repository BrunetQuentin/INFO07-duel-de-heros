import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES, IHero } from 'src/models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
