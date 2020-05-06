import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-new-effect-dialog',
  templateUrl: './new-effect-dialog.component.html',
  styleUrls: ['./new-effect-dialog.component.css']
})
export class NewEffectDialogComponent implements OnInit {

  options: FormGroup;
  newEffect: boolean;
  effectname: string;
  durationControl = new FormControl(1000, Validators.min(10));

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.options = fb.group({
      duration: this.durationControl,
    });
    this.newEffect = data.newEffect;
  }

  ngOnInit(): void {
  }

  public color: String = "000000";
  public fade: boolean = false;

}

export interface DialogData {
  newEffect: boolean;
}
