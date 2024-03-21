import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsservicePageRoutingModule } from './termsservice-routing.module';

import { TermsservicePage } from './termsservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsservicePageRoutingModule
  ],
  declarations: [TermsservicePage]
})
export class TermsservicePageModule {}
