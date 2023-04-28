import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IItem } from 'src/models/item.model';
import { ItemService } from 'src/service/item.service';
import { getTotalPoints, isValidItem } from 'src/utils/itemUtil';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss'],
})
export class ItemCreateComponent {
  item?: IItem;
  isNew = this.activatedroute.snapshot.params['id'] === 'new';

  isValid = false;
  points = 0;

  constructor(
    private activatedroute: ActivatedRoute,
    private itemService: ItemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.isNew) {
      this.item = {
        image: '',
        name: '',
        actives: [],
        passives: [],
        stats: {
          health: 0,
          speed: 0,
          dodge: 0,
          critical: 0,
          defense: 0,
          strength: 0,
        },
      };
    } else {
      this.itemService
        .getItemById(this.activatedroute.snapshot.params['id'])
        .subscribe((item) => {
          this.item = item;
        });
    }
  }

  // make function that wait 1s before updating hero and if the hero is updated before the 1s, cancel the update
  Change: any;
  onChanges(): void {
    if (this.Change) {
      clearTimeout(this.Change);
    }
    this.Change = setTimeout(() => {
      if (this.item) this.itemService.updateItem(this.item);
    }, 1000);
    this.update();
  }

  async createItem(): Promise<void> {
    if (this.item) {
      const item = await this.itemService.createItem(this.item);
      this.router.navigate(['items', item.id, 'edit']);
    }
  }

  update(): void {
    if (this.item) {
      this.isValid = isValidItem(this.item);
      this.points = -getTotalPoints(this.item);
    }
  }
}
