import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prompt3updatePage } from './prompt3update.page';

const routes: Routes = [
  {
    path: '',
    component: Prompt3updatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prompt3updatePageRoutingModule {}
