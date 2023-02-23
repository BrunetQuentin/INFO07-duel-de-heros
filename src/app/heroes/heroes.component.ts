import { Component } from '@angular/core';
import { IHero } from 'src/models/hero.model';
import { HeroService } from 'src/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [],
})
export class HeroesComponent {
  heroes: IHero[] = [];

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
