import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../Modal/product_modal';

import { CartServiceService } from '../service/cart-service.service';
import { PRODUCTS } from '../data/product_details';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent { 
  products = PRODUCTS;
  msg="added";
  selectedSize: { [key: number]: string } = {}; // To store selected sizes by product ID
  sizeWarning: { [key: number]: boolean } = {}; // To manage warnings
   cartMessages: { [key: number]: string } = {}; // cart msg
  constructor(public cartService: CartServiceService) {}
//logic of adding cart
  addToCart(product: Product) {
    if (!this.selectedSize[product.id]) {
      this.sizeWarning[product.id] = true; // Show warning
      return; // Prevent adding to cart
    } else {
      this.sizeWarning[product.id] = false; // Clear warning
    }

    if (product.stock <= 0) {
      
      return;
    }
     this.cartMessages[product.id] = `${product.name} has been added to your cart!`;

   
    this.cartService.addToCart(product);
    
    
  }
}