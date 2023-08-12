import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../entity/products';
import { Information } from '../entity/information';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private productSource = new BehaviorSubject<Products[]>([]);
  private InformationSource = new BehaviorSubject<Information>({
    email: '',
    address: '',
    phone: '',
  });

  currentProduct = this.productSource.asObservable();
  currentInformation = this.InformationSource.asObservable();

  constructor() {}

  changeProducts(products: Products[]) {
    this.productSource.next(products);
  }

  changeInformation(information: Information) {
    this.InformationSource.next(information);
  }
}
