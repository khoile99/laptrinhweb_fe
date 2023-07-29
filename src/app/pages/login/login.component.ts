import { Component } from '@angular/core';
import { ConfigService } from '../../common/http.service';
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

  constructor(private configService: ConfigService) { }
  onLogin() {
    let user = this.loginForm.value;
    this.configService.login(user).subscribe((res) => {
      console.log(res.token);
    })
  }
}
