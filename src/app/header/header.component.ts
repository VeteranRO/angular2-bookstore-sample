import { Component, Output, EventEmitter } from '@angular/core';
import { ShoppingCartService } from '../service/shoppingCart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  private shoppingCartCounter: number;
  constructor (private shoppingCartService: ShoppingCartService) {
    this.shoppingCartService.totalInCart.subscribe(totalInCart => {
            this.shoppingCartCounter = totalInCart
        });

  }
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }  
}
