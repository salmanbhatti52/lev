import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaritalstatusprefPageRoutingModule } from './maritalstatuspref-routing.module';

import { MaritalstatusprefPage } from './maritalstatuspref.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaritalstatusprefPageRoutingModule
  ],
  declarations: [MaritalstatusprefPage]
})
export class MaritalstatusprefPageModule {}
