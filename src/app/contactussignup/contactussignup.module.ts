import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactussignupPageRoutingModule } from './contactussignup-routing.module';

import { ContactussignupPage } from './contactussignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactussignupPageRoutingModule
  ],
  declarations: [ContactussignupPage]
})
export class ContactussignupPageModule {}
