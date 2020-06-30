import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Array<Ingredient> = [
    new Ingredient('paper', 2, 'kg'),
    new Ingredient('onion', 1, 'kg'),
    new Ingredient('pasta', 1, 'pcs'),
    new Ingredient('salt', 1, 'pk'),
    new Ingredient('beaf', 1, 'kg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
