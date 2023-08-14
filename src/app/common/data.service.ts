import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../entity/products';
import { Information } from '../entity/information';
import { User } from '../entity/users';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private productSource = new BehaviorSubject<Products[]>([]);
  private informationSource = new BehaviorSubject<Information>({
    email: '',
    address: '',
    phone: '',
  });
  private userSource = new BehaviorSubject<User>({
    address: '',
    birthday: '',
    email: '',
    isBlocked: false,
    phoneNumber: '',
    userName: '',
    userType: null,
  });

  currentProduct = this.productSource.asObservable();
  currentInformation = this.informationSource.asObservable();
  currentUser = this.userSource.asObservable();

  constructor() {}

  changeProducts(products: Products[]) {
    this.productSource.next(products);
  }

  changeInformation(information: Information) {
    this.informationSource.next(information);
  }

  changeuser(user: User) {
    this.userSource.next(user);
  }
}
