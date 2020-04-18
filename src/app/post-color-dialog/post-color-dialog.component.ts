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

  constructor(private ser_colors: ColorsService) { }

  ngOnInit() {}

  private color: String = "000000";

  //todo validate if name is given
  //todo auto refresh color list
  private async postColor(n: String, v: String){
    await this.ser_colors.postColor(n, v);
  }

  private setColor(c: String){
    this.ser_colors.setColor(c.replace("#", ""));
  }

  //limit the request to 12.5 hz, used for colorPickerChange event
  private throttledSetColor = _.throttle(c => this.setColor(c), 80, {});

}
