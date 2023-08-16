import { Component } from '@angular/core';
import { HTTPService } from 'src/app/common/http.service';
import { Cart } from 'src/app/entity/cart';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css'],
})
export class CartsComponent {
  carts: Cart[] = [];
  totalPrice: number = 0;
  constructor(private HTTPService: HTTPService) {
    HTTPService.getCarts().subscribe((carts) => {
      this.carts = carts;
      this.updatePrice();
    });
  }

  updateOnDeleteCard(id: number) {
    this.carts = this.carts.filter((cart) => {
      return cart.id != id;
    });
    this.updatePrice();
  }

  updatePrice() {
    this.totalPrice = 0;
    for (let cart of this.carts) {
      this.totalPrice += cart.number * cart.price;
    }
  }
}
