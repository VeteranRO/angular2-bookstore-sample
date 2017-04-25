import { MyBook } from '../books/book.model';
import { Injectable } from '@angular/core';
import { ShoppingCartService } from './shoppingCart.service';
//import { BOOKS } from '../books/mock-books';

@Injectable()
export class BookService {
  //getBooks(): Promise<MyBook[]>{
  //  return Promise.resolve(BOOKS);
  //}
  books: MyBook[] = [
    new MyBook(1,'Lord of The Ring 1',120, 'assets/images/lotr1.png','The fellowship of the ring'),
    new MyBook(2,'Lord of The Ring 2',120, 'assets/images/lotr2.png','The return of the king'),    
  ];
  getBooks(){
    return this.books.slice();
  }

  constructor(private shoppingCartService: ShoppingCartService){}
  addBookToShoppingCart(book: MyBook){
    this.shoppingCartService.addToShoppingCart(book);
  }
}