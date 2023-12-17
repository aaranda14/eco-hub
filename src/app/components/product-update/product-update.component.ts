// src/app/components/product-update/product-update.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };

  updating = false; // Add loading indicator

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId !== null) {
      this.productService.getProduct(productId).subscribe(
        (product) => {
          this.product = product;
        },
        (error) => {
          console.error('Error fetching product:', error);
          // Handle error, e.g., display an error message
        }
      );
    }
  }

  onSubmit(): void {
    this.updating = true; // Show loading indicator

    this.productService.updateProduct(this.product).subscribe(
      () => {
        this.updating = false; // Hide loading indicator
        this.router.navigate(['/products']);
      },
      (error) => {
        this.updating = false; // Hide loading indicator
        console.error('Error updating product:', error);
        // Optional: Display error message to the user
      }
    );
  }

  onDelete(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.router.navigate(['/delete', productId]);
    }
  }
}
