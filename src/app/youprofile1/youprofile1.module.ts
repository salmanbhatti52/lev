import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Youprofile1PageRoutingModule } from './youprofile1-routing.module';

import { Youprofile1Page } from './youprofile1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Youprofile1PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Youprofile1Page]
})
export class Youprofile1PageModule { }
