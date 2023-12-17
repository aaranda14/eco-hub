// src/app/components/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; // Import the Router
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router // Inject the Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    // Check if the user is logged in
    if (this.authService.isLoggedIn()) {
      // Get the logged-in user's ID
      const userId = this.authService.getUserId();

      if (userId !== null) {
        // Fetch only the posts created by the logged-in user
        this.productService.getProductsByUser(userId).subscribe((products) => {
          this.products = products;
        });
      } else {
        console.error('User ID is null.'); // Handle the case where userId is null
      }
    } else {
      // If the user is not logged in, fetch all products
      this.productService.getProducts().subscribe((products) => {
        this.products = products;
      });
    }
  }

  navigateToUpdate(product: Product): void {
    this.router.navigate(['/update', product.id]);
  }
}
