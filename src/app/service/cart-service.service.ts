import { Injectable } from '@angular/core';
import { Product } from '../Modal/product_modal';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

 private items: Product[] = [];

  addToCart(product: Product) {
    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity! += 1; // Increment quantity if already in cart
    } else {
      this.items.push({ ...product, quantity: 1 }); // Add new product with quantity 1
    }
  }

  getItems(): Product[] {
    return this.items;
  }

  getItemCount(): number {
    return this.items.reduce((count, item) => count + (item.quantity || 0), 0);
  }

  removeItem(product: Product) {
    this.items = this.items.filter(item => item.id !== product.id);
  }
   selectSize(size: string) {
    alert(`Selected size: ${size}`);
    // You can store the selected size in a variable or state if needed
  }
}