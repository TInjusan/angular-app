import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@NgModule({

    declarations: [ShoppingListComponent, ShoppingEditComponent ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: 'shopping-list', component: ShoppingListComponent}
        ])
        
    ]
  
})

export class ShoppingListModule{

}