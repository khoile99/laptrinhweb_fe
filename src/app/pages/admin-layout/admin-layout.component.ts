import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserStorageService } from 'src/app/common/storage.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent {
  constructor(
    private BrowserStorageService: BrowserStorageService,
    private router: Router
  ) {
    if (!BrowserStorageService.getAdminToken())
      this.router.navigate(['/admin/login']);
  }
}
