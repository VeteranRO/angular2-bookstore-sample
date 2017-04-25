import { MyBook } from '../books/book.model';

export class MyShoppingCart {
    public book: MyBook;    
    public amount: number;
    public total: number;
    
    constructor(book: MyBook, amount: number, total: number) {
      this.book = book;
      this.amount = amount;
      this.total = total;
    }
}