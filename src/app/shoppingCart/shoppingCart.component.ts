import { Component, OnInit } from '@angular/core';
import { MyShoppingCart } from './shoppingCart.model';
import { MyBook } from '../books/book.model';
import { ShoppingCartService } from '../service/shoppingCart.service';

@Component({
  selector: 'app-shoppingCart',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.css'],   
})

export class ShoppingCartComponent implements OnInit {
  shoppingCartItems : MyBook[];
  constructor (private shoppingCartService: ShoppingCartService) {}
  
  ngOnInit() {
    this.shoppingCartService.getShoppingCartItems().then(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }
  onDelete(i: number) {
    this.shoppingCartService.deleteItem(i);
    console.log('deleteItem'+i);
  }
}