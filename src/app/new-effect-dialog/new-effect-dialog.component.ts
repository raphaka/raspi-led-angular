import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-effect-dialog',
  templateUrl: './new-effect-dialog.component.html',
  styleUrls: ['./new-effect-dialog.component.css']
})
export class NewEffectDialogComponent implements OnInit {

  options: FormGroup;
  durationControl = new FormControl(1000, Validators.min(10));

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      duration: this.durationControl,
    });
  }

  ngOnInit(): void {
  }

  private color: String = "000000";
  //private duration: number = 1000;
  private fade: boolean = false;

}
