import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.css']
})
export class DeleteConfirmDialogComponent implements OnInit {

  item: String = "this item";

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.item = data.item;
  }

  ngOnInit(): void {
  }

}

export interface DialogData {
  item: String;
}
