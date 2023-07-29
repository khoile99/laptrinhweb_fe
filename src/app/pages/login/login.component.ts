import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: { email: string, password: string } = { email: 'asdasd', password: '' };
  onLogin() {
    console.log(this.form);
  }
}
