import { Component } from '@angular/core';
import { Products } from 'src/app/entity/products';
import { HTTPService } from 'src/app/common/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  allProductList: Products[] = [];
  productList: Products[] = [];
  showTable = false;
  nameFilter = '';
  constructor(private HTTPService: HTTPService) {
    this.HTTPService.listProducts().subscribe((results) => {
      for (let result of results) {
        this.productList.push({
          id: result.id,
          name: result.name,
          description: result.description,
          brand: result.brand,
          color: result.color,
          material: result.material,
          size: result.size,
          img: [],
        });
      }
    });
    this.allProductList = this.productList;
  }

  filterResult() {
    this.productList = this.allProductList.filter((ele) => {
      return ele.name.toLowerCase().includes(this.nameFilter.toLowerCase());
    });
  }
}
