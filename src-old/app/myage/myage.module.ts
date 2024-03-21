import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyagePageRoutingModule } from './myage-routing.module';

import { MyagePage } from './myage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyagePageRoutingModule
  ],
  declarations: [MyagePage]
})
export class MyagePageModule {}
