import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillanosPage } from './villanos.page';

const routes: Routes = [
  {
    path: '',
    component: VillanosPage,
  },
  {
    path: 'villano-detalle',
    loadChildren: () => import('./villano-detalle/villano-detalle.module').then( m => m.VillanoDetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillanosPageRoutingModule {}
