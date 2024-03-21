import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactussignupPage } from './contactussignup.page';

const routes: Routes = [
  {
    path: '',
    component: ContactussignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactussignupPageRoutingModule {}
