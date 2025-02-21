import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bag',
  imports: [CommonModule],
  templateUrl: './bag.component.html',
  styleUrl: './bag.component.scss'
})
export class BagComponent implements OnInit {
  cartItems: any[] = [];

  private cartService = inject(CartService);

  ngOnInit(): void {
    this.cartItems =  this.cartService.getCartItems();
  }
}
