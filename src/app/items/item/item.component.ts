import { Component, Input } from '@angular/core';
import { IItem } from 'src/models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item?: IItem;

  constructor() {}

  ngOnInit(): void {}
}
