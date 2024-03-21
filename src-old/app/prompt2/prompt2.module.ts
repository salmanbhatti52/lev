import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prompt2PageRoutingModule } from './prompt2-routing.module';

import { Prompt2Page } from './prompt2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prompt2PageRoutingModule
  ],
  declarations: [Prompt2Page]
})
export class Prompt2PageModule {}
