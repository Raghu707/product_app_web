import { Component, OnInit } from '@angular/core';
import { Product } from '../Modal/product_modal';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   cartItems: Product[] = [];

  constructor(private cartService: CartServiceService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

  updateQuantity(item: Product, change: number) {
    if (item.quantity! + change <= 0) {
      this.removeItem(item);
    } else {
      item.quantity! += change;
    }
  }

  removeItem(item: Product) {
    this.cartService.removeItem(item);
    this.cartItems = this.cartService.getItems(); // Refresh the cart items
  }

  get totalAmount() {
    return this.cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0).toFixed(2);
  }
}