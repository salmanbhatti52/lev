import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaritalstatusPageRoutingModule } from './maritalstatus-routing.module';

import { MaritalstatusPage } from './maritalstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaritalstatusPageRoutingModule
  ],
  declarations: [MaritalstatusPage]
})
export class MaritalstatusPageModule {}
