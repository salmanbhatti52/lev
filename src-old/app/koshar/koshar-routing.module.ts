import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KosharPage } from './koshar.page';

const routes: Routes = [
  {
    path: '',
    component: KosharPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KosharPageRoutingModule {}
