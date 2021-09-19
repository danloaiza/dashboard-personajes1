import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VillanoDetallePageRoutingModule } from './villano-detalle-routing.module';

import { VillanoDetallePage } from './villano-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VillanoDetallePageRoutingModule
  ],
  declarations: [VillanoDetallePage]
})
export class VillanoDetallePageModule {}
