import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromptnewPageRoutingModule } from './promptnew-routing.module';

import { PromptnewPage } from './promptnew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromptnewPageRoutingModule
  ],
  declarations: [PromptnewPage]
})
export class PromptnewPageModule {}
