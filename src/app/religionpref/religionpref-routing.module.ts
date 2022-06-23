import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReligionprefPage } from './religionpref.page';

const routes: Routes = [
  {
    path: '',
    component: ReligionprefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReligionprefPageRoutingModule {}
