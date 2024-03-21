import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contactus2PageRoutingModule } from './contactus2-routing.module';

import { Contactus2Page } from './contactus2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contactus2PageRoutingModule
  ],
  declarations: [Contactus2Page]
})
export class Contactus2PageModule {}
