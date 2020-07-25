import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

@Injectable()
export class RecipeListComponent implements OnInit, OnDestroy {
   
  recipes:Recipe [];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  this.subscription =  this.recipeService.recipesChanged.subscribe(
      (recipe: Recipe[]) => {
        this.recipes = recipe;
      }
    );
    this.recipes = this.recipeService.getRecipe();
    this.dataStorageService.fetchRecipes();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
