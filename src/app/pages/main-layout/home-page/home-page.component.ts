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
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  showImg1: boolean = false;
  showImg2: boolean = true;

  constructor(private data: DataService) {
    setInterval(() => {
      this.showImg1 = !this.showImg1;
      this.showImg2 = !this.showImg2;
    }, 5000);
    this.data.currentProduct.subscribe(
      (products) => (this.products = products)
    );
  }

  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
}
