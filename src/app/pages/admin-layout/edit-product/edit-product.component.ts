import { Component } from '@angular/core';
import { HTTPService } from 'src/app/common/http.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/entity/comments';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  imgIndex = 0;
  id: string = '';
  comments: Comment[] = [];
  imgs: string[] = [];

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern('([0-9]*[.])?[0-9]+'),
    ]),
    description: new FormControl('', [Validators.required]),
    brand: new FormControl('', []),
    color: new FormControl('', []),
    material: new FormControl('', []),
    size: new FormControl('', []),
  });

  constructor(
    private route: ActivatedRoute,
    private HTTPService: HTTPService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
      this.HTTPService.getProduct(this.id).subscribe((result) => {
        this.productForm.patchValue({
          name: result.name,
          price: result.price,
          description: result.description,
          brand: result.brand,
          color: result.color,
          material: result.material,
          size: result.size,
        });
        this.imgs = result.img;
      });
      this.HTTPService.getComments(this.id).subscribe((results) => {
        for (let result of results) {
          this.comments.push({
            id: result.id,
            userName: result.user_name,
            comment: result.comment,
            createdAt: result.created_at,
          });
        }
      });
    });
  }

  onUpdate() {
    console.log(this.productForm.value);
  }
}
