import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];

  constructor() { }

  addToCart(product: any) {
    this.cartItems.push(product);
    console.log('Cart items:', this.cartItems)
  }

  getCartItems() {
    return this.cartItems;
  }

  removeFromCart(product: any) {
    const index = this.cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  clearCart() {
    this.cartItems = [];
  }
}
