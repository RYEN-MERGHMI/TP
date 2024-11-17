import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetteService } from '../recette.service';
import { Recette } from '../recette.model';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.page.html',
  styleUrls: ['./recette-detail.page.scss'],
})
export class RecetteDetailPage implements OnInit {
  loadedRecette?: Recette; // Assert it's assigned later

  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecetteService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) return;

      const recipeId = paramMap.get('recipeId');
      if (recipeId) {
        this.loadedRecette = this.recipesService.getRecipe(recipeId) as Recette;
      }
    });
  }
}
