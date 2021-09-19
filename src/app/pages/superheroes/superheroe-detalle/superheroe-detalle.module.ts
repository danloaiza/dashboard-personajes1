import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperheroeDetallePageRoutingModule } from './superheroe-detalle-routing.module';

import { SuperheroeDetallePage } from './superheroe-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperheroeDetallePageRoutingModule
  ],
  declarations: [SuperheroeDetallePage]
})
export class SuperheroeDetallePageModule {}
