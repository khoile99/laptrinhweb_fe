import { Component } from '@angular/core';
import { DataService } from 'src/app/common/data.service';
import { Products } from 'src/app/entity/products';
import { HTTPService } from 'src/app/common/http.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent {
  products: Products[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 8;

  constructor(private data: DataService, private HTTPService: HTTPService) {
    this.HTTPService.listProducts().subscribe((results) => {
      for (let result of results) {
        this.products.push({
          id: result.id,
          name: result.name,
          price: result.price,
          description: result.description,
          brand: result.brand,
          color: result.color,
          material: result.material,
          size: result.size,
          img: result.img,
        });
      }
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
}
