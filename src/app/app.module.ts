import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule, MatGridList } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ColorPickerModule } from 'ngx-color-picker';

import { TabColorsComponentComponent } from './tab-colors-component/tab-colors-component.component';
import { TabEffectsComponentComponent } from './tab-effects-component/tab-effects-component.component';
import { ColorsService } from './services/colors.service';
import { PostColorDialogComponent } from './post-color-dialog/post-color-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TabColorsComponentComponent,
    TabEffectsComponentComponent,
    PostColorDialogComponent
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
    FormsModule,
    ColorPickerModule
  ],
  providers: [ColorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
