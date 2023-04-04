import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private heroSource: HeroSource,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get all types from HeroTypes
    this.classes = Object.values(HeroTypes);

    this.activatedroute.data.subscribe((data) => {
      if (data['isNew']) {
        this.hero = {
          image: '',
          name: '',
          class: [
            HeroTypes.UNDEFINED,
            HeroTypes.UNDEFINED,
            HeroTypes.UNDEFINED,
          ],
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
    });
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
