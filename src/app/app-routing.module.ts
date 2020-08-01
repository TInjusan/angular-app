import { NgModule } from "@angular/core";
import { Routes, RouterModule, RouteReuseStrategy, PreloadAllModules } from "@angular/router";

 
const appRoutes: Routes= [
    {path:'', redirectTo: '/recipes', pathMatch: 'full'},
    // loadChildren tells the angular to only load this component when someone access it.
    {path: 'recipes', 
            loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },

    {path: 'shopping-list', 
            loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule) },
    {path: 'auth', 
            loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    
    // This is the old way of doing lazy loading in the routing
    //  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipeModule' },
    //  {path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' },
    //  {path: 'auth', loadChildren: './auth/auth.module#AuthModule' }

];
@NgModule({                                    //Preloading Lazy-loaded code
     imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})],
     exports: [RouterModule]
})

export class AppRoutingModule{


}