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
  product: Products = {
    id: 0,
    name: '',
    description: '',
    brand: '',
    color: '',
    material: '',
    size: '',
    img: [],
  };
  constructor(private route: ActivatedRoute, private HTTPService: HTTPService) {
    const id = this.route.snapshot.paramMap.get('id');
    this.HTTPService.getProduct(id).subscribe((result) => {
      this.product = result;
    });
  }
}
