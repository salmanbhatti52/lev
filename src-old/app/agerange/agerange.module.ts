import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgerangePageRoutingModule } from './agerange-routing.module';

import { AgerangePage } from './agerange.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgerangePageRoutingModule
  ],
  declarations: [AgerangePage]
})
export class AgerangePageModule {}
