import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  ingredients: string[] =['one', 'two', 'three'];
  public recipes: Recipe[] = [
    new Recipe('Shereo', this.ingredients, 'bla bla bla bla', 'https://www.berkeleyside.com/wp-content/uploads/2017/12/02_Lemat-Ethiopian-112617_AndriaLo.jpg'),
    new Recipe('Shereo', this.ingredients, 'bla bla bla bla', 'https://www.berkeleyside.com/wp-content/uploads/2017/12/02_Lemat-Ethiopian-112617_AndriaLo.jpg'),
    new Recipe('Shereo', this.ingredients, 'bla bla bla bla', 'https://www.berkeleyside.com/wp-content/uploads/2017/12/02_Lemat-Ethiopian-112617_AndriaLo.jpg'),
    new Recipe('Shereo', this.ingredients, 'bla bla bla bla', 'https://www.berkeleyside.com/wp-content/uploads/2017/12/02_Lemat-Ethiopian-112617_AndriaLo.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
