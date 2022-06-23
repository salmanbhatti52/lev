import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prompt1Page } from './prompt1.page';

const routes: Routes = [
  {
    path: '',
    component: Prompt1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prompt1PageRoutingModule {}
