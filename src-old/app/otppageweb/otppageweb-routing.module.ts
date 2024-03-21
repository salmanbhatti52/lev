import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtppagewebPage } from './otppageweb.page';

const routes: Routes = [
  {
    path: '',
    component: OtppagewebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtppagewebPageRoutingModule {}
