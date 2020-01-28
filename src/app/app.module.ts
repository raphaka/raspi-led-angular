import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule, MatGridList } from '@angular/material/grid-list';
import { TabColorsComponentComponent } from './tab-colors-component/tab-colors-component.component';
import { TabEffectsComponentComponent } from './tab-effects-component/tab-effects-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TabColorsComponentComponent,
    TabEffectsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
