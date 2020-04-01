import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import {
  MatTabsModule,
  MatGridListModule,
  MatGridList,
  MatIconModule,
  MatDialogModule
} from '@angular/material';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatGridListModule, MatGridList } from '@angular/material/grid-list';
// import { MatIconModule } from '@angular/material/icon';
// import { Matodule } from '@angular/material/icon';


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
    MatGridListModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [ColorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
