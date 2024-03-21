import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewprofileotherPageRoutingModule } from './viewprofileother-routing.module';

import { ViewprofileotherPage } from './viewprofileother.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewprofileotherPageRoutingModule
  ],
  declarations: [ViewprofileotherPage]
})
export class ViewprofileotherPageModule {}
