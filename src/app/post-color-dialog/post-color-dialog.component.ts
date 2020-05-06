import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { ColorsService } from '../services/colors.service';

import * as _ from 'underscore';

@Component({
  selector: 'app-post-color-dialog',
  templateUrl: './post-color-dialog.component.html',
  styleUrls: ['./post-color-dialog.component.css']
})
export class PostColorDialogComponent implements OnInit {

  name: string;

  constructor(private ser_colors: ColorsService) { }

  ngOnInit() {}

  public color: String = "000000";

  private setColor(c: String){
    this.ser_colors.setColor(c.replace("#", ""));
  }

  //limit the request to 12.5 hz, used for colorPickerChange event
  public throttledSetColor = _.throttle(c => this.setColor(c), 80, {});

}
