import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HTTPService } from 'src/app/common/http.service';
import { Products } from 'src/app/entity/products';
import { Comment } from 'src/app/entity/comments';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  imgIndex = 0;
  comments: Comment[] = [];
  commentInput: string = '';
  id: string = '';
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
      this.commentInput = '';
      this.comments = [];
      this.id = param['id'];
      this.HTTPService.getProduct(this.id).subscribe((result) => {
        this.product = result;
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

  sendComment() {
    let form = { comment: this.commentInput, productId: this.id };
    this.HTTPService.addComment(form).subscribe((result) => {
      let comment: Comment = {
        id: result.id,
        userName: result.user_name,
        comment: result.comment,
        createdAt: result.created_at,
      };
      this.comments.unshift(comment);
    });
  }
}
