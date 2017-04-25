import { Component } from '@angular/core';
import { MyBook } from './book.model';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})

export class BooksComponent {  
  constructor (private bookService: BookService) {}
  
  private books : MyBook[] = this.bookService.getBooks();

  onAddShoppingCart(i: number){
    this.bookService.addBookToShoppingCart(this.books[i]);
    console.log('adding book to shopingcart..'+this.books[i].name);
  }  
}