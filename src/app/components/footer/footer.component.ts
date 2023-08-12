import { Component } from '@angular/core';
import { DataService } from 'src/app/common/data.service';
import { Information } from 'src/app/entity/information';
import { HTTPService } from 'src/app/common/http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  information: Information = { email: '', address: '', phone: '' };

  constructor(private HTTPService: HTTPService, private data: DataService) {
    HTTPService.getInformation().subscribe((information) => {
      this.information = information;
      data.changeInformation(information);
    });
  }
}
