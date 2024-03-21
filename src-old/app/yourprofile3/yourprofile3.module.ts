import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Yourprofile3PageRoutingModule } from './yourprofile3-routing.module';

import { Yourprofile3Page } from './yourprofile3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Yourprofile3PageRoutingModule
  ],
  declarations: [Yourprofile3Page]
})
export class Yourprofile3PageModule {}
