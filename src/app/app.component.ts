import { Component } from '@angular/core';
import { PRODUCTS } from './data/product_details';
import { Product } from './Modal/product_modal';
import { CartServiceService } from './service/cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { products = PRODUCTS;

  constructor(private router: Router, public cartService: CartServiceService) {}

  getCartCount() {
    return this.cartService.getItemCount();
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }
}