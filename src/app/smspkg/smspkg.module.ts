import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmspkgPageRoutingModule } from './smspkg-routing.module';

import { SmspkgPage } from './smspkg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmspkgPageRoutingModule
  ],
  declarations: [SmspkgPage]
})
export class SmspkgPageModule {}
