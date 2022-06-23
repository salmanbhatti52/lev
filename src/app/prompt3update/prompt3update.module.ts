import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prompt3updatePageRoutingModule } from './prompt3update-routing.module';

import { Prompt3updatePage } from './prompt3update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prompt3updatePageRoutingModule
  ],
  declarations: [Prompt3updatePage]
})
export class Prompt3updatePageModule {}
