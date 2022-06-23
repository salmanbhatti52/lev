import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterestedinprefPageRoutingModule } from './interestedinpref-routing.module';

import { InterestedinprefPage } from './interestedinpref.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterestedinprefPageRoutingModule
  ],
  declarations: [InterestedinprefPage]
})
export class InterestedinprefPageModule {}
