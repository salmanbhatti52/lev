import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GettingstartPage } from './gettingstart.page';

const routes: Routes = [
  {
    path: '',
    component: GettingstartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GettingstartPageRoutingModule {}
