import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router // Inject Router for navigation
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    console.log('Product Detail Component - Product ID:', productId);

    if (productId !== null) {
      this.productService.getProduct(productId).subscribe(
        (product) => {
          this.product = product;
          console.log('Product Detail Component - Fetched Product:', product);
        },
        (error) => {
          console.error('Product Detail Component - Error fetching product:', error);
        }
      );
    }
  }

  onUpdate(): void {
    const productId = this.product.id;
    this.router.navigate(['/update', productId]);
  }

  onDelete(): void {
    const productId = this.product.id;
    this.router.navigate(['/delete', productId]);
  }
}
