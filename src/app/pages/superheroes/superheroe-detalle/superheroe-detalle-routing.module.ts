import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperheroeDetallePage } from './superheroe-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: SuperheroeDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperheroeDetallePageRoutingModule {}
