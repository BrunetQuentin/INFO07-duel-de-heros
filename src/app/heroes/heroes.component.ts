import { Component } from '@angular/core';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IHero } from 'src/models/hero.model';
import { HeroService } from 'src/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes: IHero[] = [];

  constructor(private heroService: HeroService) {}

  faPlus = faPlus;
  faEdit = faEdit;

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
