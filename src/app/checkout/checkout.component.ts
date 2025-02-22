import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  cartItems: any[] = [];
  totalPrice: number = 0;
  customerName: string = '';
  address: string = '';

  private cartService = inject(CartService);
  constructor() {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  placeOrder() {
    if (!this.customerName || !this.address) {
      alert('Please enter your details.');
      return;
    }
    alert(`Order placed successfully for ₹${this.totalPrice}!`);
    this.cartService.clearCart();
  }
}
