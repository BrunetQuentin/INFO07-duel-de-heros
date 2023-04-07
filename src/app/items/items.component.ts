import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IItem } from 'src/models/item.model';
import { ItemService } from 'src/service/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  items: IItem[] = [];

  faPlus = faPlus;

  constructor(private itemService: ItemService) {}

  getItems(): void {
    this.itemService.getItems().subscribe((items) => {
      this.items = items;
    });
  }
  ngOnInit(): void {
    this.getItems();
  }
}
