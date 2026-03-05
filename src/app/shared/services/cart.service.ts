import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productSubject = new BehaviorSubject<string>(
    localStorage.getItem('product') || ''
  );

  product$ = this.productSubject.asObservable();

  constructor() {}

  setProduct(product: string): void {
    this.productSubject.next(product);
    localStorage.setItem('product', product);
  }

  getProduct(): string {
    return this.productSubject.value;
  }

  clearProduct(): void {
    this.productSubject.next('');
    localStorage.removeItem('product');
  }
}
