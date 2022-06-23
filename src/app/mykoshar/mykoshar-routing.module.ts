import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MykosharPage } from './mykoshar.page';

const routes: Routes = [
  {
    path: '',
    component: MykosharPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MykosharPageRoutingModule {}
