import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserpreferencesmodalPageRoutingModule } from './userpreferencesmodal-routing.module';

import { UserpreferencesmodalPage } from './userpreferencesmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserpreferencesmodalPageRoutingModule
  ],
  declarations: [UserpreferencesmodalPage]
})
export class UserpreferencesmodalPageModule {}
