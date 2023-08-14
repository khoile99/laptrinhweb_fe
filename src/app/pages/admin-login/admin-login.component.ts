import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HTTPService } from 'src/app/common/http.service';
import { BrowserStorageService } from 'src/app/common/storage.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private HTTPService: HTTPService,
    private BrowserStorageService: BrowserStorageService,
    private router: Router
  ) {}

  onLogin() {
    let user = this.loginForm.value;
    this.HTTPService.loginAdmin(user).subscribe(
      (res) => {
        this.BrowserStorageService.setAdminToken(res.token);
        this.router.navigate(['/admin/list-users']);
      },
      (error: HttpErrorResponse) => {
        alert(error.error.message);
      }
    );
  }
}
