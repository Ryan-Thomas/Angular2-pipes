import { Component } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
})
export class HttpComponent {

  constructor(private httpService: HttpService) { }

  onSubmit(username: string, email: string) {
    this.httpService.sendData({username: username, email: email})
      .subscribe(data => console.log(data));
  }

}
