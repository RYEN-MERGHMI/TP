import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecettesPage } from './recettes.page';

const routes: Routes = [
  {
    path: '',
    component: RecettesPage
  },
  {
    path: 'recette-detail',
    loadChildren: () => import('./recette-detail/recette-detail.module').then( m => m.RecetteDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettesPageRoutingModule {}
