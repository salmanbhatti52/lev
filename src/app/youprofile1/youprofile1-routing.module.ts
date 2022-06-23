import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Youprofile1Page } from './youprofile1.page';

const routes: Routes = [
  {
    path: '',
    component: Youprofile1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Youprofile1PageRoutingModule {}
