import { Component } from '@angular/core';
import { HTTPService } from 'src/app/common/http.service';
import { BrowserStorageService } from 'src/app/common/storage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private HTTPService: HTTPService, private BrowserStorageService: BrowserStorageService) { }
  onLogin() {
    let user = this.loginForm.value;
    this.HTTPService.login(user).subscribe((res) => {
      this.BrowserStorageService.setToken(res.token)
    })
  }
}
