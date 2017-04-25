import { Component } from '@angular/core';
import { ShoppingCartService } from './service/shoppingCart.service';
import { BookService } from './service/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService, ShoppingCartService]
})
export class AppComponent { 
  loadedFeature = 'books';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
