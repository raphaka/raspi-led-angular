import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';


@Component({
  selector: 'app-post-color-dialog',
  templateUrl: './post-color-dialog.component.html',
  styleUrls: ['./post-color-dialog.component.css']
})
export class PostColorDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleChange($event: ColorEvent) {
    console.log($event.color);
  }
}
