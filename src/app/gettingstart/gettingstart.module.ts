import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GettingstartPageRoutingModule } from './gettingstart-routing.module';

import { GettingstartPage } from './gettingstart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GettingstartPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [GettingstartPage]
})
export class GettingstartPageModule { }
