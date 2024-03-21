import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionloginPageRoutingModule } from './subscriptionlogin-routing.module';

import { SubscriptionloginPage } from './subscriptionlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionloginPageRoutingModule
  ],
  declarations: [SubscriptionloginPage]
})
export class SubscriptionloginPageModule {}
