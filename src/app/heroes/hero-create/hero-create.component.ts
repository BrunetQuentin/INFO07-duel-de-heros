import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroTypes, IHero } from 'src/models/hero.model';
import { HeroService } from 'src/service/hero.service';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: [],
})
export class HeroCreateComponent {
  //// USE THE NG CREATE ////
  hero?: IHero;
  types?: HeroTypes[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    // get all types from HeroTypes
    this.types = Object.values(HeroTypes);

    this.hero = {
      name: '',
      dodge: 0,
      health: 0,
      type: HeroTypes.ARCHER,
    };
  }

  createHero(): void {}
}
