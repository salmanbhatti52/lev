import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prompt3Page } from './prompt3.page';

const routes: Routes = [
  {
    path: '',
    component: Prompt3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prompt3PageRoutingModule {}
