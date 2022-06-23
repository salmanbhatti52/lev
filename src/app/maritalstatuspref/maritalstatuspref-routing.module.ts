import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaritalstatusprefPage } from './maritalstatuspref.page';

const routes: Routes = [
  {
    path: '',
    component: MaritalstatusprefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaritalstatusprefPageRoutingModule {}
