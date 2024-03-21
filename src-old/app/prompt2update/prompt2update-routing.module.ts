import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prompt2updatePage } from './prompt2update.page';

const routes: Routes = [
  {
    path: '',
    component: Prompt2updatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prompt2updatePageRoutingModule {}
