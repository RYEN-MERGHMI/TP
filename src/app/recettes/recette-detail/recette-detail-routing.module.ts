import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetteDetailPage } from './recette-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RecetteDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetteDetailPageRoutingModule {}
