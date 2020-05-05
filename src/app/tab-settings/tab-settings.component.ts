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
  logfilepath: String;
  speedControl = new FormControl(Validators.min(1));
  frequencyControl = new FormControl(Validators.min(1));

  @ViewChild('bright_slider')bright_slider;
  @ViewChild('contrast_slider')contrast_slider;
  @ViewChild('speed_input')speed_input;
  @ViewChild('frequency_input')frequency_input;

  constructor(private ser_settings:SettingsService, private fb: FormBuilder) {
    this.options = fb.group({
      speed: this.speedControl,
      frequency: this.frequencyControl
    });
  }

  ngOnInit(): void {
    this.refreshSettings();
  }

  private refreshSettings(){
    this.ser_settings.getSettings().subscribe(data => {
      this.bright_slider.value = data.brightness_maximum;
      this.speedControl.setValue(data.effect_speed * 100);
      this.frequencyControl.setValue(data.fade_frequency);
      this.contrast_slider.value = data.contrast_adjustment;
      this.logfilepath = data.log_file;
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

  private setContrast(contrast: number){
    this.ser_settings.putSettings({'contrast_adjustment': contrast});
  }

  private throttledSetContrast = _.throttle(data => this.setContrast(data), 200, {});

}

// export interface Settings {
//     pin_blue?: number,
//     pin_green?: number,
//     pin_red?: number,
//     pins_enabled?: boolean,
//     socket_timeout?: number,
//     udp_port?: number
// }
