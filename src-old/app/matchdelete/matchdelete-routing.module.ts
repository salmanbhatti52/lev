import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchdeletePage } from './matchdelete.page';

const routes: Routes = [
  {
    path: '',
    component: MatchdeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchdeletePageRoutingModule {}
