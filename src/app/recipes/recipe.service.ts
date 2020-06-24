import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
  recipeSelected =  new EventEmitter<Recipe>();

  private  recipes:Recipe [] =[
            new Recipe('Test 1', 'This is a test 1', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1000,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
            new Recipe('Test 2', 'This is a test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-TCn9a7UeRYA44PbgU6Zk8E-_z1YnvvmZ5xj6sz8q2ecaf42P&usqp=CAU')
            ];

  getRecipe(){
      return this.recipes.slice();
  }
}