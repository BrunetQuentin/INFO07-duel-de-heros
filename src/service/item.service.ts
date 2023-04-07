import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IItem } from 'src/models/item.model';
import { ObjectInDb } from 'src/utils/type';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private static url: string = 'items';
  private itemCollection;

  constructor(private readonly afs: AngularFirestore) {
    this.itemCollection = this.afs.collection<IItem>(ItemService.url);
  }

  getItems(): Observable<IItem[]> {
    let items: Observable<IItem[]> = this.itemCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((action) => {
          const data = action.payload.doc.data() as ObjectInDb<IItem>;
          const id = action.payload.doc.id;
          return { id: id, ...data };
        })
      )
    );

    return items;
  }

  getItemById(id: string): Observable<IItem | undefined> {
    let item: Observable<IItem> = this.itemCollection
      .doc(id)
      .snapshotChanges()
      .pipe(
        map((action) => {
          const data = action.payload.data() as ObjectInDb<IItem>;
          const id = action.payload.id;
          return { id: id, ...data };
        })
      );
    return item;
  }

  createItem(item: IItem): void {
    this.itemCollection.add(item);
  }

  deleteItem(item: IItem): void {
    this.itemCollection.doc(item.id).delete();
  }
}
