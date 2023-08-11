import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/data.service';
import { Products } from 'src/app/entity/products';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  products: Products[] = [];
  constructor(private data: DataService) {
    this.data.currentProduct.subscribe(
      (products) => (this.products = products)
    );
  }
}
