import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItem } from 'src/models/item.model';
import { ItemService } from 'src/service/item.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss'],
})
export class ItemCreateComponent {
  item?: IItem;
  isNew = this.activatedroute.snapshot.params['id'] === 'new';

  constructor(
    private activatedroute: ActivatedRoute,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    if (this.isNew) {
      this.item = {
        image: '',
        name: '',
        actives: [],
        passives: [],
        stats: {},
      };
    } else {
      this.itemService
        .getItemById(this.activatedroute.snapshot.params['id'])
        .subscribe((item) => {
          this.item = item;
        });
    }
  }

  onChanges() {}
}
