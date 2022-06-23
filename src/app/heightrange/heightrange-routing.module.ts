import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeightrangePage } from './heightrange.page';

const routes: Routes = [
  {
    path: '',
    component: HeightrangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeightrangePageRoutingModule {}
