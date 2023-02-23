import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHero } from 'src/models/hero.model';
import { HeroService } from 'src/service/hero.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: [],
})
export class HeroEditComponent {
  hero?: IHero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.heroService.getHeroById(+id!).subscribe((hero) => {
        this.hero = hero;
      });
    }
  }

  ngOnInit(): void {
    this.getHero();
  }
}
