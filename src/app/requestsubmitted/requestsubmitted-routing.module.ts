import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestsubmittedPage } from './requestsubmitted.page';

const routes: Routes = [
  {
    path: '',
    component: RequestsubmittedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestsubmittedPageRoutingModule {}
