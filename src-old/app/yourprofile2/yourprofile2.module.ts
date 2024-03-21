import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Yourprofile2PageRoutingModule } from './yourprofile2-routing.module';

import { Yourprofile2Page } from './yourprofile2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Yourprofile2PageRoutingModule
  ],
  declarations: [Yourprofile2Page]
})
export class Yourprofile2PageModule {}
