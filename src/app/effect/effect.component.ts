import { Component, Input, OnInit } from '@angular/core';

import { UtilService } from '../services/util.service';
import { Effect } from '../shared/effect';

@Component({
  selector: 'app-effect',
  templateUrl: './effect.component.html',
  styleUrls: ['./effect.component.css']
})
export class EffectComponent implements OnInit {

  @Input() effect:Effect

  constructor(private util: UtilService) { }

  ngOnInit(): void {}

  // color of the prevoius element in effect is used as start color for linear gradient
  // when no gradient should be visible, the current color is returned
  private getPreviousColor(i: number,fade: boolean){
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
