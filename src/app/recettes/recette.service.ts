import { Injectable } from '@angular/core';
import { Recette } from './recette.model';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  private listeRecettes: Recette[] = [
    {
      id: 'r1',
      Title: 'Escalope Panée',
      imageUrl: 'https://mccormick.widen.net/content/pl2zil1etj/original/escalope_de_dinde_panee_800x800.jpg',
      ingredients: ['frite', 'scallope', 'salade']
    },
    {
      id: 'r2',
      Title: 'Spaghetti',
      imageUrl: 'https://img.taste.com.au/sE-X5HqY/taste/2024/03/5-ingredient-turbo-charged-spaghetti-recipe-196959-1.jpg',
      ingredients: ['spaghetti', 'viande', 'tomate']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.listeRecettes];
  }

  addRecipe(newRecipe: Recette) {
    this.listeRecettes.push(newRecipe);
  }
  getRecipe(recipeId: string | null) {
    return {
      ...this.listeRecettes.find(recette => recette.id === recipeId)
    };
  }


  deleteRecipes(recipeIds: string[]) {
    this.listeRecettes = this.listeRecettes.filter(
      recette => !recipeIds.includes(recette.id)
    );
  }
}
