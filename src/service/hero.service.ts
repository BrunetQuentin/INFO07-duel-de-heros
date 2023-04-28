import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IHero } from 'src/models/hero.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ObjectInDb } from 'src/utils/type';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private static url: string = 'heroes';
  private heroCollection;

  constructor(private readonly afs: AngularFirestore) {
    this.heroCollection = this.afs.collection<IHero>(HeroService.url);
  }

  getHeroes(): Observable<IHero[]> {
    let heroes: Observable<IHero[]> = this.heroCollection
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((action) => {
            const data = action.payload.doc.data() as ObjectInDb<IHero>;
            const id = action.payload.doc.id;
            return { id: id, ...data };
          })
        )
      );

    return heroes;
  }

  getHeroById(id: string): Observable<IHero | undefined> {
    let hero: Observable<IHero> = this.heroCollection
      .doc(id)
      .snapshotChanges()
      .pipe(
        map((action) => {
          const data = action.payload.data() as ObjectInDb<IHero>;
          const id = action.payload.id;
          return { id: id, ...data };
        })
      );
    return hero;
  }

  async createHero(hero: IHero): Promise<IHero> {
    delete hero.id;
    const h = await this.heroCollection.add(hero);
    return h;
  }

  deleteHero(hero: IHero): void {
    this.heroCollection.doc(hero.id).delete();
  }

  updateHero(hero: IHero): void {
    this.heroCollection.doc(hero.id).update(hero);
  }
}
