// src/app/components/delete/delete.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  productId: string | null = null;
  deleting = false; // Add loading indicator

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    console.log('Product ID:', this.productId); // Add this line for debugging
  }

  onDelete(): void {
    if (this.productId) {
      console.log('Product ID to delete:', this.productId); // Add this line for debugging
      this.deleting = true;
      this.productService.deleteProduct(parseInt(this.productId, 10)).subscribe(
        () => {
          this.deleting = false;
          this.router.navigate(['/products']);
        },
        (error) => {
          this.deleting = false;
          console.error('Error deleting product:', error);
        }
      );
    }
  }
}
