import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabColorsComponentComponent } from './tab-colors-component/tab-colors-component.component';
import { TabEffectsComponentComponent } from './tab-effects-component/tab-effects-component.component';


const routes: Routes = [
  { path: '', redirectTo: 'colors', pathMatch: 'full'},
  { path: 'colors', component: TabColorsComponentComponent },
  { path: 'effects', component: TabEffectsComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
