import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecetteService } from './recette.service';
import { Recette } from './recette.model';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {
  listeR: Recette[] = [];
  selectedRecipes = new Set<string>(); // To track selected recipes for deletion
  isOpen = false; // Toggle form visibility
  newRecipe: Recette = { id: '', Title: '', imageUrl: '', ingredients: [] }; // Initialize new recipe

  constructor(private router: Router, private recetteService: RecetteService) { }

  ngOnInit() {
    this.listeR = this.recetteService.getAllRecipes();
  }

  navigateToDetail(recipeId: string) {
    this.router.navigate(['/recettes', recipeId]);
  }


  // Toggle selection of recipes
  toggleSelection(recipeId: string) {
    if (this.selectedRecipes.has(recipeId)) {
      this.selectedRecipes.delete(recipeId);
    } else {
      this.selectedRecipes.add(recipeId);
    }
  }

  // Add new recipe
  addNewRecipe() {
    if (this.newRecipe.Title && this.newRecipe.imageUrl && this.newRecipe.ingredients) {
      this.newRecipe.id = 'r' + (this.listeR.length + 1);

      // Use a temporary variable to handle ingredients as a string and split it into an array
      const ingredientsArray = (this.newRecipe.ingredients as unknown as string).split(',');
      this.newRecipe.ingredients = ingredientsArray;

      this.recetteService.addRecipe(this.newRecipe); // Update service
      this.listeR = this.recetteService.getAllRecipes(); // Refresh list

      // Clear form
      this.newRecipe = { id: '', Title: '', imageUrl: '', ingredients: [] };
      this.isOpen = false;
    }
  }


  // Delete selected recipes
  deleteSelectedRecipes() {
    this.recetteService.deleteRecipes(Array.from(this.selectedRecipes));
    this.listeR = this.recetteService.getAllRecipes(); // Refresh list
    this.selectedRecipes.clear(); // Clear selection
  }
}
