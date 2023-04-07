import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroTypes, IHero } from 'src/models/hero.model';
import { HeroService } from 'src/service/hero.service';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: [],
})
export class HeroCreateComponent {
  hero?: IHero;
  classes?: HeroTypes[];

  nbrOfClasses: number = 0;

  isNew?: boolean;

  constructor(
    private heroService: HeroService,
    private activatedroute: ActivatedRoute
  ) {
    this.activatedroute.data.subscribe((data) => {
      this.isNew = data['isNew'];
    });
  }

  ngOnInit(): void {
    // get all types from HeroTypes
    this.classes = Object.values(HeroTypes);

    if (this.isNew) {
      this.hero = {
        image: '',
        name: '',
        class: [HeroTypes.UNDEFINED, HeroTypes.UNDEFINED, HeroTypes.UNDEFINED],
        items: [],
        health: 0,
        speed: 0,
        abilities: {},
      };
    } else {
      this.heroService
        .getHeroById(this.activatedroute.snapshot.params['id'])
        .subscribe((hero) => {
          this.hero = hero;
        });
    }
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
