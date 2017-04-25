import { MyShoppingCart } from '../shoppingCart/shoppingCart.model';
import { MyBook } from '../books/book.model';
import { Injectable, EventEmitter } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class ShoppingCartService {
  shoppingCartChanged = new EventEmitter<MyBook[]>();
  totalInCart:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  
  private shoppingCartItems: MyBook[] = [   
  ];
  
  getShoppingCartItems(): Promise<MyBook[]>{
    return Promise.resolve(this.shoppingCartItems);
  }
  addToShoppingCart(pBook: MyBook) {    
    this.shoppingCartItems.push(pBook);    
    this.shoppingCartChanged.emit(this.shoppingCartItems.slice());
    console.log('inside shopingcrt:'+this.shoppingCartItems);    
  }
  deleteItem(pItem: number) {
    this.shoppingCartItems.splice(pItem, 1);    
    console.log('itemdelete shopingcrt:'+ pItem);
    console.log('inside shopingcrt:'+this.shoppingCartItems);
  }
  getShoppingCartCounter() {
    return this.shoppingCartItems.length;
  }
}