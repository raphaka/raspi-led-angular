import { Component, OnInit } from '@angular/core';
import { Color } from '../shared/color';
import { ColorsService } from '../services/colors.service';

@Component({
  selector: 'app-tab-colors-component',
  templateUrl: './tab-colors-component.component.html',
  styleUrls: ['./tab-colors-component.component.css']
})
export class TabColorsComponentComponent implements OnInit {

  breakpoint: number;
  colors: Color[];

  constructor(private ser_colors: ColorsService) { }

  public getTextColor(r, g, b): string {
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    if (brightness < 123) {
      return 'rgb(255,255,255)';
    } else  {
      return 'rgb(0,0,0)';
    }
  }

  public getColor(red, green, blue): string {
    return 'rgb(' + red +
      ',' + green +
      ',' + blue + ')';
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 2 : 6;
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 2 : 6;
    this.colors = this.ser_colors.getColors();
  }

}
