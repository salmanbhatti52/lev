import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtppagewebPageRoutingModule } from './otppageweb-routing.module';

import { OtppagewebPage } from './otppageweb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtppagewebPageRoutingModule
  ],
  declarations: [OtppagewebPage]
})
export class OtppagewebPageModule {}
