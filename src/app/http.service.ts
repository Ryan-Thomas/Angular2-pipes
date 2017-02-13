import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getData() {
    return this.http.get('https://angular2-course-c2101.firebaseio.com/title.json');
  }

}