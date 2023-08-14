import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HTTPService } from 'src/app/common/http.service';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.css'],
})
export class EditInformationComponent {
  updateForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.maxLength(10),
      Validators.minLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private HTTPService: HTTPService) {
    this.HTTPService.getInformation().subscribe((info) => {
      this.updateForm.patchValue({
        address: info.address,
        phone: info.phone,
        email: info.email,
      });
    });
  }

  onUpdate() {
    this.HTTPService.updateInformation(this.updateForm.value).subscribe(
      (result) => {
        alert('Update Information successfully');
      }
    );
  }
}
