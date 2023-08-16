import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/common/data.service';
import { Products } from 'src/app/entity/products';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  products: Products[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  constructor(private route: ActivatedRoute, private data: DataService) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      let keyword = param['query'];
      this.data.currentProduct.subscribe((products) => {
        let a = setInterval(() => {
          if (products.length > 0) {
            this.products = products.filter((product) => {
              return product.name.toLowerCase().includes(keyword.toLowerCase());
            });
            clearInterval(a);
          }
        }, 1000);
      });
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
