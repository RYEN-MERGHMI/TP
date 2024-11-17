import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /* {
     path: 'home',
     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
   },*/

  {
    path: 'recettes',
    children: [
      {
        path: '',
        loadChildren: () => import('./recettes/recettes.module').then(m => m.RecettesPageModule)
      },
      {
        path: ':recipeId',
        loadChildren: () => import('./recettes/recette-detail/recette-detail.module').then(m => m.RecetteDetailPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
