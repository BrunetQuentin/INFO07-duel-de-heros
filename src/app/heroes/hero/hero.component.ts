import { Component, Input } from '@angular/core';
import { faHeart, faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { IHero } from 'src/models/hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: [],
})
export class HeroComponent {
  @Input() hero?: IHero;

  faHeart = faHeart;
  faPersonRunning = faPersonRunning;
}
