import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: 'popup-window', component: PopupWindowComponent},
  {path: 'start', component: StartComponent},
  {path: 'app', component: AppComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PopupWindowComponent];
