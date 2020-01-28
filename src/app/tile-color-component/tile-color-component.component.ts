import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile-color-component',
  templateUrl: './tile-color-component.component.html',
  styleUrls: ['./tile-color-component.component.css']
})
export class TileColorComponentComponent implements OnInit {

  @Input() colorobj: string;

  constructor() { }

  ngOnInit() {
  }

}
