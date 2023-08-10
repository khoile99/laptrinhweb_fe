import { Component } from '@angular/core';
import { HTTPService } from 'src/app/common/http.service';
import { BrowserStorageService } from 'src/app/common/storage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.maxLength(10),
      Validators.minLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthday: new FormControl('', [Validators.required]),
  });

  constructor(
    private HTTPService: HTTPService,
    private BrowserStorageService: BrowserStorageService,
    private router: Router
  ) {}
  onRegister() {
    let user = this.registerForm.value;
    this.HTTPService.register(user).subscribe(
      (res) => {
        this.router.navigate(['/login']);
      },
      (error: HttpErrorResponse) => {
        alert(error.error.message);
      }
    );
  }
}
