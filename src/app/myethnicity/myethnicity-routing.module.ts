import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyethnicityPage } from './myethnicity.page';

const routes: Routes = [
  {
    path: '',
    component: MyethnicityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyethnicityPageRoutingModule {}
