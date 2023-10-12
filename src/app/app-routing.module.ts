import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HistoryPageComponent } from './teacher-page/history-page/history-page.component';

const routes: Routes = [
  {
    path: '', 
    component: LandingPageComponent 
  },
  {
    path: 'history', 
    component: HistoryPageComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
