import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuperheroesPage } from './superheroes.page';

import { SuperheroesPageRoutingModule } from './superheroes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SuperheroesPageRoutingModule
  ],
  declarations: [SuperheroesPage]
})
export class SuperheroesPageModule {}
