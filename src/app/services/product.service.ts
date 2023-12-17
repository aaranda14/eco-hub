// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: string): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  deleteProduct(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id.toString()}`;
    console.log('Delete URL:', url);
    return this.http.delete<void>(url);
  }

  // New method to get products by user ID
  getProductsByUser(userId: number): Observable<Product[]> {
    const url = `${this.apiUrl}?userId=${userId}`;
    return this.http.get<Product[]>(url);
  }
}
