import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromptnewPage } from './promptnew.page';

const routes: Routes = [
  {
    path: '',
    component: PromptnewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromptnewPageRoutingModule {}
