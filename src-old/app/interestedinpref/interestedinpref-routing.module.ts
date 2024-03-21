import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterestedinprefPage } from './interestedinpref.page';

const routes: Routes = [
  {
    path: '',
    component: InterestedinprefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterestedinprefPageRoutingModule {}
