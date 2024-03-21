import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchdeletePageRoutingModule } from './matchdelete-routing.module';

import { MatchdeletePage } from './matchdelete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchdeletePageRoutingModule
  ],
  declarations: [MatchdeletePage]
})
export class MatchdeletePageModule {}
