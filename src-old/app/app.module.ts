import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { MaritalstatusPageModule } from './maritalstatus/maritalstatus.module';
import { ReligionPageModule } from './religion/religion.module';
import { GenderPageModule } from './gender/gender.module';
import { LookingforPageModule } from './lookingfor/lookingfor.module';
import { Prompt1PageModule } from './prompt1/prompt1.module';
import { Prompt2PageModule } from './prompt2/prompt2.module';
import { Prompt3PageModule } from './prompt3/prompt3.module';



import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';




import { IonicStorageModule } from '@ionic/storage';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';

// import { File } from '@ionic-native/file/ngx';


import firebaseConfig from './firebase'

import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';


import { AngularFireModule } from '@angular/fire';
import { MatchdeletePageModule } from './matchdelete/matchdelete.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [

    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot(),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    MaritalstatusPageModule,
    ReligionPageModule,
    GenderPageModule,
    LookingforPageModule,
    Prompt1PageModule,
    Prompt2PageModule,
    Prompt3PageModule,
    MatchdeletePageModule,

    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [
    InAppPurchase,
    InAppPurchase2,
    OneSignal,
    Geolocation,
    NativeGeocoder,
    InAppBrowser,
    AppAvailability,
    FileTransfer,
    FileTransferObject,
    // File,
    Camera,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    }],
  bootstrap: [AppComponent],
})
export class AppModule { }
