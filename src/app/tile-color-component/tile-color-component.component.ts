import { Component, OnInit, Input } from '@angular/core';
import { Color } from '../shared/color';

@Component({
  selector: 'app-tile-color-component',
  templateUrl: './tile-color-component.component.html',
  styleUrls: ['./tile-color-component.component.css']
})
export class TileColorComponentComponent implements OnInit {

  @Input() colorobj: Color;

  constructor() { }

  ngOnInit() {
  }

}
