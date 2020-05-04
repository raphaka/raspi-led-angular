import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Effect } from '../shared/effect';
import { EffectsService } from '../services/effects.service';
import { NewEffectDialogComponent } from '../new-effect-dialog/new-effect-dialog.component';

@Component({
  selector: 'app-tab-effects-component',
  templateUrl: './tab-effects-component.component.html',
  styleUrls: ['./tab-effects-component.component.css']
})
export class TabEffectsComponentComponent implements OnInit {

  effects: Effect[];
  scale: number = 10;
  constructor(private ser_effects: EffectsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.ser_effects.getEffects().subscribe(data => this.effects = data);
  }

  private addEffect(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
        newEffect: true
    };
    let dialogRef = this.dialog.open(NewEffectDialogComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        console.log(result);
        this.effects.push(new Effect(
          result[0], [{"color":result[1].replace("#", ""),"duration":result[2],"fade":result[3]}],true
        ));
      }
    });
  }

}
