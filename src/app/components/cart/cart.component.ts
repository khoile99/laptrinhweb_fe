import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from 'src/app/entity/cart';
import { HTTPService } from 'src/app/common/http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() cart: Cart = { id: 0, img: '', name: '', number: 0, price: '' };
  @Output() onDeleteCart = new EventEmitter<number>();

  constructor(private HTTPService: HTTPService) {}

  onUpdate(cart: Cart) {
    this.HTTPService.updateNumberCart(this.cart.id, this.cart.number).subscribe(
      (result) => {
        alert(result.message);
      }
    );
  }

  onDelete(id: number) {
    this.HTTPService.deleteCart(this.cart.id).subscribe((result) => {
      alert(result.message);
      this.onDeleteCart.emit(id);
    });
  }
}
