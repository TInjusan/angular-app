import { Ingredient } from '../shared/ingredient.model'; 
import { Subject } from 'rxjs';

export class ShoppingListService{
    ingredientsUpdate = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    
    getIngredients(){
        return this.ingredients.slice();
    }
    getIngredient(index: number){
        return this.ingredients[index];
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
    
    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsUpdate.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsUpdate.next(this.ingredients.slice());
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