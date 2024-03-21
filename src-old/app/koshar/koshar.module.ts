import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KosharPageRoutingModule } from './koshar-routing.module';

import { KosharPage } from './koshar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KosharPageRoutingModule
  ],
  declarations: [KosharPage]
})
export class KosharPageModule {}
