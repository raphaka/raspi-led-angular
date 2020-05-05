import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as _ from 'underscore';

import { SettingsService, Settings } from '../services/settings.service';

@Component({
  selector: 'app-tab-settings',
  templateUrl: './tab-settings.component.html',
  styleUrls: ['./tab-settings.component.css']
})
export class TabSettingsComponent implements OnInit {

  options: FormGroup;
  speedControl = new FormControl(Validators.min(1));

  @ViewChild('bright_slider')bright_slider;
  @ViewChild('speed_input')speed_input;

  constructor(private ser_settings:SettingsService, private fb: FormBuilder) {
    this.options = fb.group({
      speed: this.speedControl,
    });
  }

  ngOnInit(): void {
    this.refreshSettings();
  }

  private refreshSettings(){
    this.ser_settings.getSettings().subscribe(data => {
      this.bright_slider.value = data.brightness_maximum;
      this.speedControl.setValue(data.effect_speed * 100);
    });

  }

  private setSpeed(){
    if(this.speedControl.value > 0){
      this.ser_settings.putSettings({'effect_speed': this.speedControl.value/100});
    }
  }

  private throttledSetSpeed = _.throttle(data => this.setSpeed(), 200, {});

  private setBright(bright: number){
    this.ser_settings.putSettings({'brightness_maximum': bright});
  }

  private throttledSetBright = _.throttle(data => this.setBright(data), 200, {});


}
