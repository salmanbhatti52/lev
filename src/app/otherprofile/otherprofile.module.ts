import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherprofilePageRoutingModule } from './otherprofile-routing.module';

import { OtherprofilePage } from './otherprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherprofilePageRoutingModule
  ],
  declarations: [OtherprofilePage]
})
export class OtherprofilePageModule {}
