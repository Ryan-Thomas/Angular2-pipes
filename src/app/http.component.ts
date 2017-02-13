import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
})
export class HttpComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
        (data: any) => {
          console.log(data);
        }
      );
  }

}
