import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
 
@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();

  private  recipes:Recipe [] =[
            new Recipe('Schnitzel', 
                       'This is a schnitzel', 
                       'https://www.thespruceeats.com/thmb/oAls2Y49HemUbrDOUAdv14Mk3V8=/4288x2412/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
                       [
                           new Ingredient('Meat', 1),
                           new Ingredient('French Fries', 20)
                       ]),
            new Recipe('Burger',
                       'This is a Burger',
                       'https://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg?fit=1000%2C665&ssl=1', 
                       [
                         
                            new Ingredient('Buns', 2),
                            new Ingredient('Meat', 1)
                         
                       ])
            ];
  constructor(private shoppingListService: ShoppingListService){}

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice())
  }
  getRecipe(){
      return this.recipes.slice();
  }
  getRecipeByID(index: number){
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}