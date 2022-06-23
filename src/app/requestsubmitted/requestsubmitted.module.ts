import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestsubmittedPageRoutingModule } from './requestsubmitted-routing.module';

import { RequestsubmittedPage } from './requestsubmitted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestsubmittedPageRoutingModule
  ],
  declarations: [RequestsubmittedPage]
})
export class RequestsubmittedPageModule {}
