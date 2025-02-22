import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bag',
  imports: [CommonModule, RouterLink],
  templateUrl: './bag.component.html',
  styleUrl: './bag.component.scss'
})
export class BagComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCartItems(); // Refresh cart
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.cartService.getTotalPrice();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalPrice = 0;
  }
}
