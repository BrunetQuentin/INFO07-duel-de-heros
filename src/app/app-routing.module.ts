import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroCreateComponent } from './heroes/hero-create/hero-create.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ItemCreateComponent } from './items/item-create/item-create.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/:id', component: HeroCreateComponent },
  { path: 'heroes/:id/edit', component: HeroCreateComponent },
  { path: 'heroes/new', component: HeroCreateComponent, data: { isNew: true } },
  { path: 'items', component: ItemsComponent },
  { path: 'items/:id', component: ItemCreateComponent },
  { path: 'items/:id/edit', component: ItemCreateComponent },
  { path: 'items/new', component: ItemCreateComponent, data: { isNew: true } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
}
