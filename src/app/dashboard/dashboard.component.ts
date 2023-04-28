import { Component } from '@angular/core';
import { IHero } from 'src/models/hero.model';
import { IItem } from 'src/models/item.model';
import { HeroService } from 'src/service/hero.service';
import { ItemService } from 'src/service/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  allHeroes: IHero[] | undefined;
  allItems: IItem[] | undefined;

  itemsFiltered: IItem[] = [];
  heroesFiltered: IHero[] = [];

  itemFilter: string = '';
  heroFilter: string = '';

  constructor(
    private heroService: HeroService,
    private itemService: ItemService
  ) {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.allHeroes = heroes;
      this.onChanges('hero');
    });
    this.itemService.getItems().subscribe((items) => {
      this.allItems = items;
      this.onChanges('item');
    });
  }

  onChanges(which: string) {
    if (which === 'item') {
      this.itemsFiltered = this.allItems?.filter((item) =>
        item.name?.toLowerCase().includes(this.itemFilter.toLowerCase())
      )!;
    } else if (which === 'hero') {
      this.heroesFiltered = this.allHeroes?.filter((hero) =>
        hero.name?.toLowerCase().includes(this.heroFilter.toLowerCase())
      )!;
    }
  }
}
