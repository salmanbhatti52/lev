import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prompt1updatePage } from './prompt1update.page';

const routes: Routes = [
  {
    path: '',
    component: Prompt1updatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prompt1updatePageRoutingModule {}
