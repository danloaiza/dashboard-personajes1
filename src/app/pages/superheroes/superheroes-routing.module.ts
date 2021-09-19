import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperheroesPage } from './superheroes.page';

const routes: Routes = [
  {
    path: '',
    component: SuperheroesPage,
  },
  {
    path: 'superheroe-detalle',
    loadChildren: () => import('./superheroe-detalle/superheroe-detalle.module').then( m => m.SuperheroeDetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperheroesPageRoutingModule {}
