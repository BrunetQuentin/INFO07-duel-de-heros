import { Component, Input } from '@angular/core';
import { IHero } from 'src/models/hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: [],
})
export class HeroComponent {
  @Input() hero?: IHero;
}
