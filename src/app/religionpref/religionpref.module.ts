import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReligionprefPageRoutingModule } from './religionpref-routing.module';

import { ReligionprefPage } from './religionpref.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReligionprefPageRoutingModule
  ],
  declarations: [ReligionprefPage]
})
export class ReligionprefPageModule {}
