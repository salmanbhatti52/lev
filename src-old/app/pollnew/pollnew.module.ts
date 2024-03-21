import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PollnewPageRoutingModule } from './pollnew-routing.module';

import { PollnewPage } from './pollnew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PollnewPageRoutingModule
  ],
  declarations: [PollnewPage]
})
export class PollnewPageModule {}
