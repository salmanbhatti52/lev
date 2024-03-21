import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserpreferencesmodalPage } from './userpreferencesmodal.page';

const routes: Routes = [
  {
    path: '',
    component: UserpreferencesmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserpreferencesmodalPageRoutingModule {}
