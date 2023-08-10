import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HTTPService } from 'src/app/common/http.service';
import { Products } from 'src/app/entity/products';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  imgIndex = 0;
  product: Products = {
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

  constructor(
    private route: ActivatedRoute,
    private HTTPService: HTTPService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      const id = param['id'];
      this.HTTPService.getProduct(id).subscribe((result) => {
        this.product = result;
      });
    });
  }
}
