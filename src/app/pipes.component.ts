import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: []
})
export class PipesComponent implements OnInit {
  myValue = 'lowercase';
  myDate = new Date(2016, 5, 24);

  constructor() { }

  ngOnInit() {
  }

}