import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule, MatGridList } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { ColorPickerModule } from 'ngx-color-picker';
import { ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

import { TabColorsComponentComponent } from './tab-colors-component/tab-colors-component.component';
import { TabEffectsComponentComponent } from './tab-effects-component/tab-effects-component.component';
import { ColorsService } from './services/colors.service';
import { PostColorDialogComponent } from './post-color-dialog/post-color-dialog.component';
import { EffectComponent } from './effect/effect.component';
import { NewEffectDialogComponent } from './new-effect-dialog/new-effect-dialog.component';
import { TabSettingsComponent } from './tab-settings/tab-settings.component';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TabColorsComponentComponent,
    TabEffectsComponentComponent,
    PostColorDialogComponent,
    EffectComponent,
    NewEffectDialogComponent,
    TabSettingsComponent,
    DeleteConfirmDialogComponent
  ],
  entryComponents: [
    PostColorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatGridListModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    ChartModule
  ],
  providers: [ColorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
