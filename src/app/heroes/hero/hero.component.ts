import { Component, Input } from '@angular/core';
import {
  faCheck,
  faDumbbell,
  faExplosion,
  faHeart,
  faPersonFallingBurst,
  faPersonRunning,
  faShieldHalved,
  faSquarePen,
  faSquareXmark,
} from '@fortawesome/free-solid-svg-icons';
import { IHero } from 'src/models/hero.model';
import { HeroService } from 'src/service/hero.service';
import { isValidHero } from 'src/utils/heroUtils';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input() hero?: IHero;

  constructor(private heroService: HeroService) {}

  isValid = false;

  // function for delete an hero
  deleteHero(): void {
    if (this.hero) {
      this.heroService.deleteHero(this.hero);
    }
  }

  // when init the component, check if the hero is valid
  ngOnInit(): void {
    if (this.hero) {
      this.isValid = isValidHero(this.hero);
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
}
