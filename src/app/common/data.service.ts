import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../entity/products';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private productSource = new BehaviorSubject<Products[]>([]);
  currentProduct = this.productSource.asObservable();

  constructor() {}

  changeProducts(products: Products[]) {
    this.productSource.next(products);
  }
}
