import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrefrencePage } from './prefrence.page';

const routes: Routes = [
  {
    path: '',
    component: PrefrencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrefrencePageRoutingModule {}
