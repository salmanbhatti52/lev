import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollnewPage } from './pollnew.page';

const routes: Routes = [
  {
    path: '',
    component: PollnewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PollnewPageRoutingModule {}
