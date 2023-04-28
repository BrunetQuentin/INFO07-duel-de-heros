import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroTypes, IHero } from 'src/models/hero.model';
import { IItem } from 'src/models/item.model';
import { HeroService } from 'src/service/hero.service';
import { ItemService } from 'src/service/item.service';
import { getTotalPoints, isValidHero } from 'src/utils/heroUtils';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.scss'],
})
export class HeroCreateComponent {
  hero?: IHero;
  classes?: HeroTypes[];

  nbrOfClasses: number = 0;

  id: string = this.activatedroute.snapshot.params['id'];
  isNew: boolean = this.id === 'new';

  isValid: boolean | undefined;

  usedPoints: number = 0;
  remainPoints: number = 0;

  allItems: IItem[] | undefined;

  item: IItem | undefined;

  constructor(
    private heroService: HeroService,
    private itemService: ItemService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {
    this.itemService.getItems().subscribe((items) => {
      this.allItems = items;
    });
  }

  async ngOnInit(): Promise<void> {
    // get all types from HeroTypes
    this.classes = Object.values(HeroTypes);

    if (this.isNew) {
      this.hero = {
        image: '',
        name: '',
        class: [HeroTypes.UNDEFINED, HeroTypes.UNDEFINED, HeroTypes.UNDEFINED],
        item: '',
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
        this.update();
        this.onChangeItem();
      });
    }
  }

  async createHero(): Promise<void> {
    if (this.hero) {
      const hero = await this.heroService.createHero(this.hero);
      this.router.navigate(['heroes', hero.id, 'edit']);
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
      if (this.hero) this.heroService.updateHero(this.hero);
    }, 1000);
    this.update();
  }

  update(): void {
    if (this.hero) {
      this.isValid = isValidHero(this.hero);
      this.usedPoints = getTotalPoints(this.hero);
      this.remainPoints = 60 - this.usedPoints;
    }
  }

  onChangeItem(): void {
    if (this.hero?.item === '') {
      this.item = undefined;
    } else {
      this.onChanges();
      this.itemService.getItemById(this.hero?.item!).subscribe((item) => {
        this.item = item;
      });
    }
  }
}
