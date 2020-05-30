import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { UtilService } from '../services/util.service';
import { EffectsService } from '../services/effects.service';
import { Effect } from '../shared/effect';
import { NewEffectDialogComponent } from '../new-effect-dialog/new-effect-dialog.component';


@Component({
  selector: 'app-effect',
  templateUrl: './effect.component.html',
  styleUrls: ['./effect.component.css']
})
export class EffectComponent implements OnInit {

  @Input() effect:Effect
  @Input() scale: number = 10; // seconds of effect displayed within 100% width
  @Output() updated = new EventEmitter();

  constructor(private ser_effects: EffectsService, public util: UtilService,  public dialog: MatDialog) { }

  ngOnInit(): void {}

  public setEffect(id: number){
      this.ser_effects.setEffect(id);
  }

  public async deleteEffect(id: number){
    if (id != undefined){ //effect does not yet exist in backend so it will vanish when refreshing UI
      await this.ser_effects.deleteEffect(id);
    }
    this.updated.emit();
  }

  public async postEffect(effect: Effect){
    effect.id = await this.ser_effects.postEffect(effect);
    this.effect.edited = false;
  }

  public refreshEffects(){
    this.updated.emit();
  }

  public addElement(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
        newEffect: false
    };
    let dialogRef = this.dialog.open(NewEffectDialogComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        this.effect.value.push( {"color":result[0].replace("#", ""),"duration":result[1],"fade":result[2]} );
        this.effect.edited = true;
      }
    });
  }

  public moveElementLeft(i: number){
    let tmp = this.effect.value[i];
    this.effect.value[i] = this.effect.value[i-1];
    this.effect.value[i-1] = tmp;
    this.effect.edited = true;
  }

  public moveElementRight(i: number){
    let tmp = this.effect.value[i];
    this.effect.value[i] = this.effect.value[i+1];
    this.effect.value[i+1] = tmp;
    this.effect.edited = true;
  }

  public removeElement(i: number){
    this.effect.value.splice(i,1);
    this.effect.edited = true;
  }

  // color of the prevoius element in effect is used as start color for linear gradient
  // when no gradient should be visible, the current color is returned
  public getPreviousColor(i: number,fade: boolean){
    if (!fade){
      return this.effect.value[i].color;
    }
    if (i==0){
      return this.effect.value[this.effect.value.length-1].color;
    } else {
      return this.effect.value[i-1].color;
    }
  }
}
