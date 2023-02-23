import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroEditComponent } from './heroes/hero-edit/hero-edit.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroEditComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterOutlet, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
