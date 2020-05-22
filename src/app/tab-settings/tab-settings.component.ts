import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Chart } from 'angular-highcharts';
import * as _ from 'underscore';

import { SettingsService, Settings } from '../services/settings.service';

@Component({
  selector: 'app-tab-settings',
  templateUrl: './tab-settings.component.html',
  styleUrls: ['./tab-settings.component.css']
})
export class TabSettingsComponent implements OnInit {

  chart: Chart;
  options: FormGroup;
  logfilepath: String;
  pins_enabled: boolean;
  speedControl = new FormControl(1,Validators.min(1));
  frequencyControl = new FormControl(1,Validators.min(1));
  pinrControl =  new FormControl(1,Validators.min(1));
  pingControl =  new FormControl(1,Validators.min(1));
  pinbControl =  new FormControl(1,Validators.min(1));
  sockTO_Control = new FormControl(1,Validators.min(0.1));
  udpPortControl = new FormControl(1,Validators.min(1024));

  @ViewChild('bright_slider')bright_slider;
  @ViewChild('contrast_slider')contrast_slider;
  @ViewChild('speed_input')speed_input;
  @ViewChild('frequency_input')frequency_input;
  @ViewChild('pinr_input')pinr_input;
  @ViewChild('ping_input')ping_input;
  @ViewChild('pinb_input')pinb_input;
  @ViewChild('sockTO_input')sockTO_input;
  @ViewChild('udpPort_input')udpPort_input;

  constructor(private ser_settings:SettingsService, private fb: FormBuilder) {
    this.options = fb.group({
      speed: this.speedControl,
      frequency: this.frequencyControl,
      pinr: this.pinrControl,
      ping: this.pingControl,
      pinb: this.pinbControl,
      sockTO: this.sockTO_input,
      udpPort: this.udpPort_input,
    });
  }

  ngOnInit(): void {
    this.refreshSettings();
    this.initChart();
  }

  private initChart(){
    let chartOptions:Highcharts.Options = {
      chart: { type: 'line' },
      title: { text: null },
      legend: { enabled: false },
      credits: { enabled: false },
      yAxis: {
        endOnTick: false,
        ceiling: 255,
        max:255,
        tickInterval: 50,
        minorTicks:true,
        title: null },
      xAxis: {
        tickInterval: 50,
        minorTicks: true },
      series: [{type: 'line',
        name: 'Color',
        data: []}]
    }
    this.chart = new Chart(chartOptions);
  }

  private calculateGraph(brightness: number, contrast: number){
    let values:chartPoint[] = [];
    for(let i=0;i<=255;i+=5) {
      values[i/5] = {
        y: ((i/255)**contrast)*brightness,
        x: i
      }
    }
    this.redrawChart(values);
  }

  private redrawChart(line:chartPoint[]){
    this.chart.removeSeries(0);
    this.chart.addSeries(
      {
        type: 'line',
        name: 'Color',
        marker: { enabled: false },
        data: line
    }
    ,true,true);
  }

  public refreshSettings(){
    this.ser_settings.getSettings().subscribe(data => {
      this.calculateGraph(data.brightness_maximum, data.contrast_adjustment);
      this.bright_slider.value = data.brightness_maximum;
      this.speedControl.setValue(data.effect_speed * 100);
      this.frequencyControl.setValue(data.fade_frequency);
      this.contrast_slider.value = data.contrast_adjustment;
      this.logfilepath = data.log_file;
      this.pinrControl.setValue(data.pin_red);
      this.pingControl.setValue(data.pin_green);
      this.pinbControl.setValue(data.pin_blue);
      this.pins_enabled = data.pins_enabled;
      this.sockTO_Control.setValue(data.socket_timeout);
      this.udpPortControl.setValue(data.udp_port);
    });

  }

  public saveAll(){
    this.ser_settings.putSettings({
      'fade_frequency': this.frequencyControl.value,
      'log_file': this.logfilepath,
      'pin_blue': this.pinbControl.value,
      'pin_green': this.pingControl.value,
      'pin_red': this.pinrControl.value,
      'pins_enabled': this.pins_enabled,
      'socket_timeout': this.sockTO_Control.value,
      'udp_port': this.udpPortControl.value
    });
  }

  private setSpeed(){
    if(this.speedControl.value > 0){
      this.ser_settings.putSettings({'effect_speed': this.speedControl.value/100});
    }
  }

  public throttledSetSpeed = _.throttle(data => this.setSpeed(), 100, {});

  private setBright(bright: number){
    this.ser_settings.putSettings({'brightness_maximum': bright});
    this.calculateGraph(bright,this.contrast_slider.value);
  }

  public throttledSetBright = _.throttle(data => this.setBright(data), 100, {});

  private setContrast(contrast: number){
    this.ser_settings.putSettings({'contrast_adjustment': contrast});
    this.calculateGraph(this.bright_slider.value,contrast);
  }

  public throttledSetContrast = _.throttle(data => this.setContrast(data), 100, {});

}

interface chartPoint{
  x:number,
  y:number
}
