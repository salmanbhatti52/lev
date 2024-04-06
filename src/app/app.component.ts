import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
// import { OneSignal } from '@ionic-native/onesignal/ngx';
// import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';
import { WorkService } from './work.service';
import { RestService } from './rest.service';
// import OneSignal from 'onesignal-cordova-plugin';
// declare var OneSignal: any;
// declare var window: any;


import OneSignal from 'onesignal-cordova-plugin';
// import { OneSignalPlugin } from 'onesignal-cordova-plugin';
declare var window: any
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  uid: any;


  // oneSignalAppId = '3d7fddea-62ec-4b88-9b2f-1b15e2ba3138'
  // oneSignalFirebaseId = '257224415793'
  oneSignalAppId = 'db3264f6-fcb1-49e5-b3df-888a40925111'
  oneSignalFirebaseId = '150920249203'
  identy: any = ''
  userData: any = ''
  arr = [];
  myUserData: any;

  constructor(public platform: Platform,
    public navCtrl: NavController,
    // public oneSignal: OneSignal,
    public workService: WorkService,
    public restService: RestService,
    // public oneSignal: OneSignalPlugin
  ) {


    if (this.platform.ready()) {
      this.initializeApp()
      console.log('platform Ready apComponent', localStorage.getItem('login'))


      // Login code start here

      if (localStorage.getItem('login') == 'isLogin') {
        this.checkSubscription()
        this.userData = JSON.parse(localStorage.getItem('loggedinUserData'))
        console.log('usr packageee--->>>>>', this.userData.packages_id);
        // var sbID = this.userData.packages_id
        var sbID = localStorage.getItem('packages_id')
        // if (sbID == '0' || sbID == 'null' || sbID == null) {
        //   this.navCtrl.navigateRoot(['apply'], { replaceUrl: true })
        // } else {
        //   this.navCtrl.navigateRoot(['/tabs/tab1'], { replaceUrl: true })
        // } // old code comment on 2-3-24
        // if (sbID == 'null' || sbID == null) {
        //   this.navCtrl.navigateRoot(['apply'], { replaceUrl: true })
        // } else {
        this.navCtrl.navigateRoot(['/tabs/tab1'], { replaceUrl: true })
        // }
      } else {
        this.navCtrl.navigateRoot('/apply')
      }

      //   // Login code end here

    }


  }

  checkSubscription() {


    var userID = localStorage.getItem('loggedinUserID')
    let data = {
      loginuser: 0,
      otheruser: userID
    }
    this.restService.get_user_dataAPI(data).subscribe((res: any) => {

      console.log('incomming data === ', res);
      if (res.status == "success") {
        if (res.data.user_data) {
          this.workService.myUserData = res
          this.userData = this.workService.myUserData.data.user_data

          console.log('user dataaa app.component====', this.userData.packages_id);


          localStorage.setItem('userNotiStatus', this.workService.myUserData.data.user_data.notification_switch)



          // if (this.userData.packages_id == 0) {
          var sbID = localStorage.getItem('packages_id')
          if (sbID == '0' || sbID == 'null' || sbID == null) {
            this.navCtrl.navigateRoot(['apply'], { replaceUrl: true })
            localStorage.clear()
          }
        } else {
          this.navCtrl.navigateRoot(['apply'], { replaceUrl: true })
          localStorage.clear()
        }



      }


    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })



  }


  async initializeApp() {
    await this.platform.ready().then(() => {
      this.restService.sendRequest('get_badwords', {}).subscribe((res: any) => {
        console.log('hellow ppl===', res)
        res.data.map((val) => {
          console.log('map value', val.word);
          this.arr.push(val.word)

          console.log('new array==', this.arr);
          this.restService.newarr = this.arr
        })
      })
      // For onesignal push notification


      this.onesignalNotification();

      const closedUserIdsString = localStorage.getItem('closematches');

      const closedUserIds = closedUserIdsString ? JSON.parse(closedUserIdsString) : [];
      console.log('closedUserIdsString', closedUserIds);
      this.workService.closedUserIds = closedUserIds
    });
  }



  onesignalNotification() {
    console.log("app noti checkind started");

    // this.oneSignal.setAppId(this.oneSignalAppId);

    // let onesignalID = this.oneSignal.setExternalUserId(localStorage.getItem('loggedinUserID'));
    // console.log('onesignalIDss----', onesignalID);


    // this.oneSignal.setNotificationWillShowInForegroundHandler(event => {
    //   console.log('setNotificationWillShowInForegroundHandler', JSON.stringify(event));
    // });

    // this.oneSignal.setNotificationOpenedHandler(event => {
    //   console.log('setNotificationOpenedHandler', JSON.stringify(event));
    // })



    OneSignal.setAppId(this.oneSignalAppId);

    OneSignal.setNotificationOpenedHandler((jsonData) => {
      console.log('setNotificationOpenedHandler: ' + JSON.stringify(jsonData));
    });

    OneSignal.promptForPushNotificationsWithUserResponse((accepted) => {
      console.log('promptForPushNotificationsWithUserResponse: ' + accepted);
    });

    this.setupDeviceStateListener();
    // OneSignal.getDeviceState((resp: any) => {
    //   const osUser: any = resp;
    //   this.uid = osUser.userId;
    //   console.log('userID==========>', osUser);
    //   console.log('userID1223222==========>', this.uid);
    //   localStorage.setItem("oneSignaldeviceID", this.uid);
    // });

    // For onesignal push notification
    // this.oneSignal.setLogLevel({ logLevel: 6, visualLevel: 2 });
    // this.oneSignal.startInit(this.oneSignalAppId, this.oneSignalFirebaseId);
    // this.oneSignal.endInit();
    // this.oneSignal.getIds().then(
    //   (identity) => {
    //     this.identy = identity;
    //     localStorage.setItem("oneSignaldeviceID", this.identy.userId);
    //     console.log('userID==========>', this.identy.userId);

    //     // alert('id--->' + this.identy.userId)

    //     this.pushNotification();
    //   },
    //   (err) => {
    //     console.log("Error");
    //     console.log(err);
    //     return;
    //   }
    // );
    // For onesignal push notification
  }

  setupDeviceStateListener(): void {
    OneSignal.addSubscriptionObserver((state) => {
      if (state.to.userId) {
        console.log('OneSignal User ID:', state.to.userId);
        localStorage.setItem("oneSignaldeviceID", state.to.userId);

      }
    });


  }



  pushNotification() {
    // this.oneSignal.startInit(this.oneSignalAppId, this.oneSignalFirebaseId);

    // this.oneSignal.inFocusDisplaying(
    //   this.oneSignal.OSInFocusDisplayOption.Notification
    // );

    // this.oneSignal.endInit();
  }
}
