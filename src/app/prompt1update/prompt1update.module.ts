import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prompt1updatePageRoutingModule } from './prompt1update-routing.module';

import { Prompt1updatePage } from './prompt1update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prompt1updatePageRoutingModule
  ],
  declarations: [Prompt1updatePage]
})
export class Prompt1updatePageModule {}
