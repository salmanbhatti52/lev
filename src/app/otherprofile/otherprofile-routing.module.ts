import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherprofilePage } from './otherprofile.page';

const routes: Routes = [
  {
    path: '',
    component: OtherprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherprofilePageRoutingModule {}
