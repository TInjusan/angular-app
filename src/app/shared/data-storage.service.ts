import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { RecipeService } from '../recipes/recipe.service';

@Injectable({providedIn: 'root'})

export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipe();
        //Firebase uses put method to fetch all data and overwrite existing
        return  this.http.put('https://my-first-app-2e9eb.firebaseio.com/recipes.json', recipes )
        .subscribe(reponse =>{
            console.log(reponse);
        });
    }
}