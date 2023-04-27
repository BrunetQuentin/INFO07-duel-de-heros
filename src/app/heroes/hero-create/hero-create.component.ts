import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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

  id: string = this.activatedroute.snapshot.params['id'];
  isNew: boolean = this.id === 'new';

  constructor(
    private heroService: HeroService,
    private activatedroute: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
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
        critical: 0,
        defense: 0,
        dodge: 0,
        strength: 0,
        abilities: {},
      };
    } else {
      await this.heroService.getHeroById(this.id).subscribe((hero) => {
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

  // make function that wait 1s before updating hero and if the hero is updated before the 1s, cancel the update
  Change: any;
  onChanges(): void {
    if (this.Change) {
      clearTimeout(this.Change);
    }
    this.Change = setTimeout(() => {
      console.log('update');
      if (this.hero) this.heroService.updateHero(this.hero);
    }, 1000);
  }
}
