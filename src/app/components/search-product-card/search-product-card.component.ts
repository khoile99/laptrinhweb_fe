import { Component, Input } from '@angular/core';
import { Products } from 'src/app/entity/products';

@Component({
  selector: 'app-search-product-card',
  templateUrl: './search-product-card.component.html',
  styleUrls: ['./search-product-card.component.css'],
})
export class SearchProductCardComponent {
  @Input() product: Products = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    brand: '',
    color: '',
    material: '',
    size: '',
    img: [],
  };
}
