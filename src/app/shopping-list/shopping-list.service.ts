import { Ingredient } from '../shared/ingredient.model'; 
import { Subject } from 'rxjs';

export class ShoppingListService{
    ingredientsUpdate = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    
    getIngredients(){
        return this.ingredients.slice();
    }
    
    addIngredient(ingredient: Ingredient){
        if(this.checkIngredient(ingredient.name, ingredient.amount) < 1 ){
            this.ingredients.push(ingredient);
            this.ingredientsUpdate.next(this.ingredients.slice());
        }
    
    }
    
    addIngredients(ingredients: Ingredient[]){
        for(let ingredient of ingredients){
            this.addIngredient(ingredient);
        }

        //using spread operator
        //this.ingredients.push(...ingredients);
        this.ingredientsUpdate.next(ingredients.slice());
    }

    checkIngredient(ingredientName: string, ingredientAmount: number): any{
        let count = 0;
        for(let ingredient of this.ingredients){
            if(ingredient.name === ingredientName){
                ingredient.amount = ingredient.amount + ingredientAmount;
                count++;
            }
        }
        
        return count;

    }
}