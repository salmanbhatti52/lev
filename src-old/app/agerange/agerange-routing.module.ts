import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgerangePage } from './agerange.page';

const routes: Routes = [
  {
    path: '',
    component: AgerangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgerangePageRoutingModule {}
