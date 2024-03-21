import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewprofileotherPage } from './viewprofileother.page';

const routes: Routes = [
  {
    path: '',
    component: ViewprofileotherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewprofileotherPageRoutingModule {}
