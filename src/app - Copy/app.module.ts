import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { ShoppingCartComponent } from './shoppingCart/shoppingCart.component';
import { Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'books', component: BooksComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent }
];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BooksComponent, 
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
