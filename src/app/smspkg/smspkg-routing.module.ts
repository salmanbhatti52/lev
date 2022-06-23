import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmspkgPage } from './smspkg.page';

const routes: Routes = [
  {
    path: '',
    component: SmspkgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmspkgPageRoutingModule {}
