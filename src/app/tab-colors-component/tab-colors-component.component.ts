import { Component, OnInit } from '@angular/core';
import { Color } from '../shared/color';


@Component({
  selector: 'app-tab-colors-component',
  templateUrl: './tab-colors-component.component.html',
  styleUrls: ['./tab-colors-component.component.css']
})
export class TabColorsComponentComponent implements OnInit {

  colors: Color[];

  constructor() { }

  ngOnInit() {
    this.colors = [
      { red: 0, green: 0, blue: 0, name: 'black' },
      {  red : 255,  green : 255,  blue : 255,  name : 'white' },
      {  red : 255,  green : 0,  blue : 0,  name : 'red' },
      {  red : 0,  green : 255,  blue : 0,  name : 'green' },
      {  red : 0,  green : 0,  blue : 255,  name : 'blue' },
      {  red : 255,  green : 255,  blue : 0,  name : 'yellow' },
      {  red : 0,  green : 255,  blue : 255,  name : 'cyan' }
    ];
  }

}
