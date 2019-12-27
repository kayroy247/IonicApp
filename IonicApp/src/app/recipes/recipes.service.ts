import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

   recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'nkwobi',
      imageUrl: 'https://3.bp.blogspot.com/-xbGXN4KXcQ4/VvOng2X7bXI/AAAAAAAATCY/sp96e-J4JZUNrKn_FPCFkV9WprIXX9HFg/s1600/NKWOBI%2BRECIPE%2BSISIYEMMIE.JPG',
      ingredients: ['French Fries', 'CatFish', 'Salad']

    },

    {
      id: 'r2',
      title: 'spagetti',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSeKJ3fU_PPd0aWLlX3EkxsctYRa2GaxLeBDoL5tk_kRaDn3f71g&s',
      ingredients: ['spagetti', 'CatFish', 'Salad']

    },
  ];

  constructor() { }
  
  getAllRecipes() {
    return this.recipes;
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => recipe.id === recipeId)};
  }

  deleteRecipe(recipeId: string) {
     this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
