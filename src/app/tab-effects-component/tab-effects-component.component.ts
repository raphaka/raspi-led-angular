import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as _ from 'underscore';

import { Effect } from '../shared/effect';
import { EffectsService } from '../services/effects.service';
import { SettingsService, Settings } from '../services/settings.service';
import { NewEffectDialogComponent } from '../new-effect-dialog/new-effect-dialog.component';


@Component({
  selector: 'app-tab-effects-component',
  templateUrl: './tab-effects-component.component.html',
  styleUrls: ['./tab-effects-component.component.css']
})
export class TabEffectsComponentComponent implements OnInit {

  effects: Effect[];
  scale: number = 10;

  @ViewChild('speed_slider')speed_slider;

  constructor(private ser_effects: EffectsService, private ser_settings:SettingsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.refreshEffects();
    this.ser_settings.getSettings().subscribe(data => this.speed_slider.value = data.effect_speed*100);
  }

  private setSpeed(speed: number){
    this.ser_settings.putSettings({'effect_speed': speed/100});
  }

  public throttledSetSpeed = _.throttle(data => this.setSpeed(data), 200, {});

  public addEffect(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
        newEffect: true
    };
    let dialogRef = this.dialog.open(NewEffectDialogComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(async result => {
      if(result){
        this.effects.push(new Effect(
          result[0], [{"color":result[1].replace("#", ""),"duration":result[2],"fade":result[3]}],true
        ));
      }
    });
  }

  public refreshEffects(){
    this.ser_effects.getEffects().subscribe(data => this.effects = data);
  }

}
