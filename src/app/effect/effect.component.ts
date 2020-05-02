import { Component, Input, OnInit } from '@angular/core';

import { Effect } from '../shared/effect';

@Component({
  selector: 'app-effect',
  templateUrl: './effect.component.html',
  styleUrls: ['./effect.component.css']
})
export class EffectComponent implements OnInit {

  @Input() effect:Effect

  constructor() { }

  ngOnInit(): void {
    console.log(this.effect)
  }

}
