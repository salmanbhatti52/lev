import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeightrangePageRoutingModule } from './heightrange-routing.module';

import { HeightrangePage } from './heightrange.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeightrangePageRoutingModule
  ],
  declarations: [HeightrangePage]
})
export class HeightrangePageModule {}
