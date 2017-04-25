import { MyShoppingCart } from '../shoppingCart/shoppingCart.model';
import { MyBook } from '../books/book.model';
import { Injectable, EventEmitter } from '@angular/core';

export class ShoppingCartService {
  shoppingCartChanged = new EventEmitter<MyShoppingCart[]>();
  bookChanged = new EventEmitter<MyBook[]>();

  private book: MyBook;
  private books: MyBook[];
  private shoppingCartItems: MyShoppingCart[] = [ 
    new MyShoppingCart(this.book,1,2)
  ];
  
  getShoppingCartItems(): Promise<MyShoppingCart[]>{
    return Promise.resolve(this.shoppingCartItems);
  }
  //getShoppingCartItems(){
  //  return this.shoppingCartItems.slice();   
  //}
  addToShoppingCart(pBook: MyBook) {    
    //this.books.push(pBook);
    //this.bookChanged.emit(this.books);
    this.shoppingCartItems.push(new MyShoppingCart(this.book,1,2));    
    this.shoppingCartChanged.emit(this.shoppingCartItems.slice());
    console.log('inside shopingcrt:'+this.shoppingCartItems);    
  }
  deleteItem(pItem: number) {
    this.shoppingCartItems.splice(pItem, 1);    
    console.log('itemdelete shopingcrt:'+ pItem);
    console.log('inside shopingcrt:'+this.shoppingCartItems);
  }
}