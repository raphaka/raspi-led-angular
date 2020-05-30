import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Color } from '../shared/color';
import { ColorsService } from '../services/colors.service';
import { UtilService } from '../services/util.service';
import { PostColorDialogComponent } from '../post-color-dialog/post-color-dialog.component';

@Component({
  selector: 'app-tab-colors-component',
  templateUrl: './tab-colors-component.component.html',
  styleUrls: ['./tab-colors-component.component.css']
})
export class TabColorsComponentComponent implements OnInit {

  breakpoint: number;
  colors: Color[];

  constructor(private ser_colors: ColorsService, public util: UtilService, public dialog: MatDialog) {}

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 2 : 6;
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 2 : 6;
    this.ser_colors.getColors().subscribe(data => this.colors = this.getColorsFromArray(data)); //todo auto refresh
  }

  //Calculates R,G,B from hex once and saves it into Color objects
  private getColorsFromArray(cols: Color[]){
    for (let c of cols){
      var bigint = parseInt(c.value, 16);
      c.red = (bigint >> 16) & 255;
      c.green = (bigint >> 8) & 255;
      c.blue = bigint & 255;
    }
    return cols;
  }

  public setColor(c: String){
    this.ser_colors.setColor(c);
  }

  public async deleteColor(id: String){
    await this.ser_colors.deleteColor(id);
    this.refreshColors();
  }

  public postColorDialog(){
    let dialogRef = this.dialog.open(PostColorDialogComponent);
    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        await this.ser_colors.postColor(result[0], result[1]);
        this.refreshColors();
      }
    });
  }

  private refreshColors() {
    this.ser_colors.getColors().subscribe(data => this.colors = this.getColorsFromArray(data));
  }

}
