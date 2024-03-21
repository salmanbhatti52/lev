import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Yourprofile3Page } from './yourprofile3.page';

const routes: Routes = [
  {
    path: '',
    component: Yourprofile3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Yourprofile3PageRoutingModule {}
