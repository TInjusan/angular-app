import { NgModule } from "@angular/core";
import { Routes, RouterModule, RouteReuseStrategy } from "@angular/router";

 
const appRoutes: Routes= [
    {path:'', redirectTo: '/recipes', pathMatch: 'full'},
    // loadChildren tells the angular to only load this component when someone access it.
    {path: 'recipes', 
            loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) }
];
@NgModule({
     imports: [RouterModule.forRoot(appRoutes)],
     exports: [RouterModule]
})

export class AppRoutingModule{


}