import { Component, Input } from '@angular/core';
import {
  faHeart,
  faPersonRunning,
  faPersonFallingBurst,
  faExplosion,
  faShieldHalved,
  faDumbbell,
  faSquarePen,
  faSquareXmark,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { IItem } from 'src/models/item.model';
import { ItemService } from 'src/service/item.service';
import { isValidItem } from 'src/utils/itemUtil';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item?: IItem;

  constructor(private itemService: ItemService) {}

  isValid = false;

  ngOnInit(): void {
    if (this.item) {
      this.isValid = isValidItem(this.item);
    }
  }

  faHeart = faHeart;
  faPersonRunning = faPersonRunning;
  faPersonFallingBurst = faPersonFallingBurst;
  faExlosion = faExplosion;
  faShieldHalved = faShieldHalved;
  faDumbbell = faDumbbell;

  faSquarePen = faSquarePen;
  faSquareXmark = faSquareXmark;

  faCheck = faCheck;

  deleteItem(): void {
    if (this.item) {
      this.itemService.deleteItem(this.item);
    }
  }
}
