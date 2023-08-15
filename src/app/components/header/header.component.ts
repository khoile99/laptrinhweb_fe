import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/entity/products';
import { HTTPService } from 'src/app/common/http.service';
import { BrowserStorageService } from 'src/app/common/storage.service';
import { User } from 'src/app/entity/users';
import { Router } from '@angular/router';
import { DataService } from 'src/app/common/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  allProductList: Products[] = [];
  productList: Products[] = [];
  user: User = {
    address: '',
    birthday: '',
    email: '',
    isBlocked: null,
    phoneNumber: '',
    userName: '',
    userType: null,
  };
  showTable = false;
  showtableUser = false;
  nameFilter = '';
  constructor(
    private HTTPService: HTTPService,
    private storage: BrowserStorageService,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit() {
    this.HTTPService.listProducts().subscribe((results) => {
      for (let result of results) {
        this.productList.push({
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
    this.allProductList = this.productList;
    this.data.changeProducts(this.allProductList);
    if (this.storage.getToken()) {
      this.HTTPService.getUser().subscribe(
        (result) => {
          this.user = {
            address: result.address,
            birthday: result.birthday,
            email: result.email,
            isBlocked: result.is_blocked,
            phoneNumber: result.phone_number,
            userName: result.user_name,
            userType: result.user_type,
          };
          this.data.changeuser(this.user);
        },
        (error: HttpErrorResponse) => {
          this.storage.clearToken();
        }
      );
    }
  }

  filterResult() {
    this.productList = this.allProductList.filter((ele) => {
      return ele.name.toLowerCase().includes(this.nameFilter.toLowerCase());
    });
  }

  onLogout() {
    this.storage.clearToken();
    this.router.navigate(['/login']);
  }
}
