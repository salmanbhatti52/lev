import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MykosharPageRoutingModule } from './mykoshar-routing.module';

import { MykosharPage } from './mykoshar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MykosharPageRoutingModule
  ],
  declarations: [MykosharPage]
})
export class MykosharPageModule {}
