import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterestedinPage } from './interestedin.page';

const routes: Routes = [
  {
    path: '',
    component: InterestedinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterestedinPageRoutingModule {}
