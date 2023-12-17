import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  product: Product = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    // Check if a user is logged in
    if (this.authService.isLoggedIn()) {
      // Set the userId before creating the product
      this.product.userId = this.authService.getUserId()!;
      this.productService.createProduct(this.product).subscribe(
        () => {
          this.router.navigate(['/products']); // Redirect to the list of products
        },
        (error) => {
          console.error('Error creating product:', error);
        }
      );
    } else {
      // Handle the case where a user is not logged in
      console.error('User is not logged in');
    }
  }
}
