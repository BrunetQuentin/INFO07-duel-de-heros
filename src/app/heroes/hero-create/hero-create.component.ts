import { Component } from '@angular/core';
import { HeroTypes, IHero } from 'src/models/hero.model';
import { HeroService } from 'src/service/hero.service';
import { HeroSource } from 'src/service/hero.source';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: [],
})
export class HeroCreateComponent {
  hero?: IHero;
  classes?: HeroTypes[];

  classArray = [0, 1, 2];

  nbrOfClasses: number = 0;

  constructor(
    private heroService: HeroService,
    private heroSource: HeroSource
  ) {}

  ngOnInit(): void {
    // get all types from HeroTypes
    this.classes = Object.values(HeroTypes);

    this.hero = {
      image: '',
      name: '',
      class: [HeroTypes.UNDEFINED, HeroTypes.UNDEFINED, HeroTypes.UNDEFINED],
      items: [],
      health: 0,
      speed: 0,
    };
  }

  createHero(): void {
    if (this.hero) {
      this.heroService.createHero(this.hero);
    }
  }

  onClassChange(): void {
    if (this.hero?.class !== undefined) {
      this.nbrOfClasses = this.hero?.class?.filter(
        (heroClass) => heroClass !== HeroTypes.UNDEFINED
      ).length;
    }
  }
}
