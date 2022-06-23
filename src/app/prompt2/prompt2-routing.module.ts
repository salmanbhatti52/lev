import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prompt2Page } from './prompt2.page';

const routes: Routes = [
  {
    path: '',
    component: Prompt2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prompt2PageRoutingModule {}
