import { Component } from '@angular/core';
import { DataService } from 'src/app/common/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HTTPService } from 'src/app/common/http.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  userName: string = '';
  updateForm = new FormGroup({
    password: new FormControl('', []),
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

  constructor(private data: DataService, private HTTPService: HTTPService) {
    this.data.currentUser.subscribe((user) => {
      this.updateForm.patchValue({
        address: user.address,
        phoneNumber: user.phoneNumber,
        email: user.email,
        birthday: user.birthday,
      });
      this.userName = user.userName;
    });
  }

  onUpdate() {
    let user = this.updateForm.value;
    this.HTTPService.editUser(user).subscribe((result) =>
      alert(result.message)
    );
  }
}
