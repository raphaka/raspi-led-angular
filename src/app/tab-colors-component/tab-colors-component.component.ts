import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-colors-component',
  templateUrl: './tab-colors-component.component.html',
  styleUrls: ['./tab-colors-component.component.css']
})
export class TabColorsComponentComponent implements OnInit {

  colors: string[];

  constructor() { }

  ngOnInit() {
    this.colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  }

}
