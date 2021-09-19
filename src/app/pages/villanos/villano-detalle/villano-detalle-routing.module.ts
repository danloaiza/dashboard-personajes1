import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VillanoDetallePage } from './villano-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: VillanoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VillanoDetallePageRoutingModule {}
