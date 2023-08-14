import { Component } from '@angular/core';
import { UserWithId } from 'src/app/entity/users';
import { HTTPService } from 'src/app/common/http.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent {
  users: UserWithId[] = [];
  constructor(private HTTPService: HTTPService) {
    HTTPService.listUsers().subscribe((users) => {
      for (let user of users) {
        this.users.push({
          id: user.id,
          userName: user.user_name,
          address: user.address,
          phoneNumber: user.phone_number,
          email: user.email,
          birthday: user.birthday,
          userType: user.user_type,
          isBlocked: user.is_blocked,
        });
      }
    });
  }
}
