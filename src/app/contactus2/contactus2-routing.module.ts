import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contactus2Page } from './contactus2.page';

const routes: Routes = [
  {
    path: '',
    component: Contactus2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contactus2PageRoutingModule {}
