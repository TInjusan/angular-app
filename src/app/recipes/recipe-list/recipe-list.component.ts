import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe [] =[
    new Recipe('Test 1', 'This is a test 1', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1000,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
    new Recipe('Test 2', 'This is a test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-TCn9a7UeRYA44PbgU6Zk8E-_z1YnvvmZ5xj6sz8q2ecaf42P&usqp=CAU')
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
