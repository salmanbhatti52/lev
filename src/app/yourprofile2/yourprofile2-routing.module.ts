import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Yourprofile2Page } from './yourprofile2.page';

const routes: Routes = [
  {
    path: '',
    component: Yourprofile2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Yourprofile2PageRoutingModule {}
