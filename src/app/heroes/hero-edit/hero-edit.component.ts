import { Component, Input } from '@angular/core';
import { IHero } from 'src/models/hero.model';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: [],
})
export class HeroEditComponent {
  @Input() hero?: IHero;
}
