import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { ColorsService } from '../services/colors.service';


@Component({
  selector: 'app-post-color-dialog',
  templateUrl: './post-color-dialog.component.html',
  styleUrls: ['./post-color-dialog.component.css']
})
export class PostColorDialogComponent implements OnInit {

  constructor(private ser_colors: ColorsService) { }

  ngOnInit() {
  }

  private color: String = "000000";

  private postColor(n: String, v: String){
      this.ser_colors.postColor(n, v);
  }

  logcolor(c: String){
    console.log(c);
  }

}
