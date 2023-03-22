import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroCreateComponent } from './heroes/hero-create/hero-create.component';
import { HeroEditComponent } from './heroes/hero-edit/hero-edit.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/new', component: HeroCreateComponent, data: { isNew: true } },
  { path: 'heroes/:id', component: HeroEditComponent },
  { path: 'heroes/:id/edit', component: HeroEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
