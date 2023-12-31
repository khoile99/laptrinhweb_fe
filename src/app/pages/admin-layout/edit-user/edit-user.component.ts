import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HTTPService } from 'src/app/common/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  id: number = 0;
  userName: string = '';

  updateForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.maxLength(10),
      Validators.minLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthday: new FormControl('', [Validators.required]),
    userType: new FormControl('', [Validators.required]),
    isBlocked: new FormControl('', [Validators.required]),
  });

  constructor(
    private route: ActivatedRoute,
    private HTTPService: HTTPService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
      this.HTTPService.getUserByAdmin(this.id).subscribe((user) => {
        this.updateForm.patchValue({
          address: user.address,
          phoneNumber: user.phone_number,
          email: user.email,
          birthday: user.birthday,
          userType: user.user_type.toString(),
          isBlocked: user.is_blocked ? '1' : '0',
        });
        this.userName = user.user_name;
      });
    });
  }

  onUpdate() {
    let value = this.updateForm.value;
    let form = {
      userId: this.id,
      address: value.address,
      phoneNumber: value.phoneNumber,
      email: value.email,
      birthday: value.birthday,
      userType: parseInt(value.userType || '0'),
      isBlocked: parseInt(value.isBlocked || '0'),
    };
    this.HTTPService.updateUserByAdmin(form).subscribe(
      (result) => {
        alert('Updated Successfully');
      },
      (error: HttpErrorResponse) => {
        alert(error.error.message);
      }
    );
  }
  onDelete() {
    this.HTTPService.deleteUser(this.id).subscribe((result) => {
      alert('Delete user successfully');
      this.router.navigate(['/admin/list-users']);
    });
  }
}
