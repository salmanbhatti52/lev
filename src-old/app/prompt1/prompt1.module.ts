import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prompt1PageRoutingModule } from './prompt1-routing.module';

import { Prompt1Page } from './prompt1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prompt1PageRoutingModule
  ],
  declarations: [Prompt1Page]
})
export class Prompt1PageModule {}
