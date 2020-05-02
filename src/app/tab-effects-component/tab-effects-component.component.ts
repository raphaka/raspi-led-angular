import { Component, OnInit } from '@angular/core';

import { Effect } from '../shared/effect';
import { EffectsService } from '../services/effects.service';

@Component({
  selector: 'app-tab-effects-component',
  templateUrl: './tab-effects-component.component.html',
  styleUrls: ['./tab-effects-component.component.css']
})
export class TabEffectsComponentComponent implements OnInit {

  effects: Effect[];
  constructor(private ser_effects: EffectsService) { }

  ngOnInit() {
    this.ser_effects.getEffects().subscribe(data => this.effects = data);
  }

}
