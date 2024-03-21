import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prompt3PageRoutingModule } from './prompt3-routing.module';

import { Prompt3Page } from './prompt3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prompt3PageRoutingModule
  ],
  declarations: [Prompt3Page]
})
export class Prompt3PageModule {}
