import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaritalstatusPage } from './maritalstatus.page';

const routes: Routes = [
  {
    path: '',
    component: MaritalstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaritalstatusPageRoutingModule {}
