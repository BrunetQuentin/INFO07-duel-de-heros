import { Component, Input } from '@angular/core';
import {
  faHeart,
  faPersonRunning,
  faSquarePen,
  faSquareXmark,
} from '@fortawesome/free-solid-svg-icons';
import { IHero } from 'src/models/hero.model';
import { HeroService } from 'src/service/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: [],
})
export class HeroComponent {
  @Input() hero?: IHero;

  constructor(private heroService: HeroService) {}

  // function for delete an hero
  deleteHero(): void {
    if (this.hero) {
      console.log('delete hero: ' + this.hero.name);
      this.heroService.deleteHero(this.hero);
    }
  }

  faHeart = faHeart;
  faPersonRunning = faPersonRunning;
  faSquarePen = faSquarePen;
  faSquareXmark = faSquareXmark;
}
