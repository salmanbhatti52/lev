import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyethnicityPageRoutingModule } from './myethnicity-routing.module';

import { MyethnicityPage } from './myethnicity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyethnicityPageRoutingModule
  ],
  declarations: [MyethnicityPage]
})
export class MyethnicityPageModule {}
