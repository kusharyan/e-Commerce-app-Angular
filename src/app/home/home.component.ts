import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 70000,
      image: '/images/laptop.jpeg',
      description: 'High-performance laptop',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 30000,
      image: '/images/smartphone.jpeg',
      description: 'Latest smartphone model',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 5000,
      image: '/images/headphone.jpeg',
      description: 'Noise-canceling headphones',
    },
  ];

  private cartService = inject(CartService);

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`)
  }
}
