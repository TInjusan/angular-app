import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; 
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take, exhaust, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})

export class DataStorageService {

    constructor(private http: HttpClient, 
                private recipeService: RecipeService,
                private authService: AuthService){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipe();
        //Firebase uses put method to fetch all data and overwrite existing
        return  this.http.put('https://my-first-app-2e9eb.firebaseio.com/recipes.json', recipes )
        .subscribe(reponse =>{
            console.log(reponse);
        });
    }
    fetchRecipes(){

     return this.authService.user.pipe(
        take(1),
        exhaustMap(user =>{
            return this.http.get<Recipe[]>
            ('https://my-first-app-2e9eb.firebaseio.com/recipes.json',
                {
                    params: new HttpParams().set('auth', user.token)
                }
            );            
        }),  
        map(recipes => {
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
            });
        }),
        tap(recipes =>{
            this.recipeService.setRecipes(recipes);
         })
     );    
          
    }
}