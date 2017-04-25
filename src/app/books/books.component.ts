import { Component, OnInit } from '@angular/core';
import { MyBook } from './book.model';
import { BookService } from '../service/book.service';

import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})

export class BooksComponent implements OnInit {  
  constructor (private bookService: BookService) {}
  
  private books : MyBook[] = this.bookService.getBooks();
  private _success = new Subject<string>();
  successMessage: string;

  ngOnInit() {
    this._success.debounceTime(5000).subscribe(() => this.successMessage = null);
  }

  onAddShoppingCart(i: number){
    this.bookService.addBookToShoppingCart(this.books[i]);
    
    this._success.next(`Book added to shopping cart.`);
    console.log('adding book to shopingcart..'+this.books[i].name);
  }  
}