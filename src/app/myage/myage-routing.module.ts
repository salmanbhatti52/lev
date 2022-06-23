import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyagePage } from './myage.page';

const routes: Routes = [
  {
    path: '',
    component: MyagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyagePageRoutingModule {}
