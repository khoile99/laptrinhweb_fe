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
  constructor(private HTTPService: HTTPService) {
    HTTPService.getCarts().subscribe((carts) => {
      this.carts = carts;
    });
  }

  updateOnDeleteCard(id: number) {
    this.carts = this.carts.filter((cart) => {
      return cart.id != id;
    });
  }
}
