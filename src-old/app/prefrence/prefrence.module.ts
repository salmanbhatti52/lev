import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrefrencePageRoutingModule } from './prefrence-routing.module';

import { PrefrencePage } from './prefrence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrefrencePageRoutingModule
  ],
  declarations: [PrefrencePage]
})
export class PrefrencePageModule {}
