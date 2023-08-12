import { Component } from '@angular/core';
import { HTTPService } from 'src/app/common/http.service';
import { QA } from 'src/app/entity/qa';
import { DataService } from 'src/app/common/data.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
})
export class SupportComponent {
  email: string = '';
  phoneNumber: string = '';
  qas: QA[] = [];

  constructor(private HTTPService: HTTPService, private data: DataService) {
    this.HTTPService.getQA().subscribe((results) => {
      for (let result of results) {
        let answers = result.answer.split('\r\n');
        this.qas.push({ question: result.question, answer: answers });
      }
    });
    this.data.currentInformation.subscribe((information) => {
      this.email = information.email;
      this.phoneNumber = information.phone;
    });
  }
}
