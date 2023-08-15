import { Component } from '@angular/core';
import { BrowserStorageService } from 'src/app/common/storage.service';
import { Router } from '@angular/router';
import { Admin } from 'src/app/entity/users';
import { HTTPService } from 'src/app/common/http.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent {
  showTable: boolean = false;
  admin: Admin = {
    id: 0,
    userName: '',
    email: '',
  };

  constructor(
    private BrowserStorageService: BrowserStorageService,
    private router: Router,
    private HTTPService: HTTPService
  ) {
    this.HTTPService.getAdmin().subscribe((admin) => {
      this.admin = {
        id: admin.id,
        userName: admin.user_name,
        email: admin.email,
      };
    });
  }
  onLogout() {
    this.BrowserStorageService.clearAdminToken();
    this.router.navigate(['admin/login']);
  }
}
