import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prompt2updatePageRoutingModule } from './prompt2update-routing.module';

import { Prompt2updatePage } from './prompt2update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prompt2updatePageRoutingModule
  ],
  declarations: [Prompt2updatePage]
})
export class Prompt2updatePageModule {}
