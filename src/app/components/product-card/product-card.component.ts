import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() id: number = 0;
  @Input() img: string = '';
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() brand: string | null = '';
}
