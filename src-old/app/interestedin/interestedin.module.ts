import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterestedinPageRoutingModule } from './interestedin-routing.module';

import { InterestedinPage } from './interestedin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterestedinPageRoutingModule
  ],
  declarations: [InterestedinPage]
})
export class InterestedinPageModule {}
