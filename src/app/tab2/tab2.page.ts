import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { RestService } from '../rest.service';
import { UserserviceService } from '../userservice.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  authToken: any;
  showSkeleton = true;
  skeletonArray = [1, 2, 3, 4, 5, 6];
  noChatlistFlag = false;
  allChats = [];
  remainingSMS: any;

  constructor(
    private navCtrl: NavController,
    public restService: RestService,
    public userService: UserserviceService,
    public workService: WorkService,
    public platform: Platform,
    public router: Router,
    public alertController: AlertController
  ) {


    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
      this.router.navigate(['tabs/tab1'])

    });

    this.authToken = localStorage.getItem("token");

    // geting all chats list

  }

  ngOnInit() { }
  ionViewWillEnter() {
    console.log('ionviewwillenter');
    var userID = localStorage.getItem('loggedinUserID')
    let data = {
      loginuser: 0,
      otheruser: userID
    }
    this.restService.get_user_dataAPI(data).subscribe((res: any) => {
      console.log('incomming data === ', res);
      if (res.status == "success") {
        this.remainingSMS = res.data.user_data.allowed_sms;
        localStorage.setItem('remainingSMS', res.data.user_data.allowed_sms)
        console.log('smssssss-------------------', res.data.user_data.allowed_sms);
        localStorage.setItem('userNotiStatus', this.workService.myUserData.data.user_data.notification_switch)
      }
    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })
    this.getChatList();
  }

  getChatList(event?) {

    this.workService.presentLoading()

    // geting all chats list
    var data = JSON.stringify({
      request_type: "getChatList",
      users_customers_id: localStorage.getItem('loggedinUserID')
      // users_customers_id: 15
    })


    console.log('getMychatdata,', data);

    this.restService.chat_messagesAPI(data)
      .subscribe(async (res: any) => {
        this.workService.hideLoading();
        if (event) {
          event.target.complete();
        }
        this.showSkeleton = false;

        console.log("response-----------------", res);
        if (res.status == "success") {
          this.allChats = res.data.chat_list_details;
          let userIds = this.workService.closedUserIds
          this.allChats = this.allChats.filter(chat => !userIds.includes(chat.user_id));

          // this.allChats = this.allChats.map((val) => ({
          //   ...val,
          //   msg_time: this.extras.formatAMPM(new Date(val.msg_time)),
          // }));
          console.log("receving All chats", this.allChats);
          if (this.allChats.length == 0) {
            this.noChatlistFlag = true;
          } else {
            this.noChatlistFlag = false;
          }

        } else {
          this.noChatlistFlag = true;
        }
      }, err => {
        this.workService.hideLoading();
        console.log('error in get chatlist===', err)
        // this.workService.presentToast('Network error occured')
      });
  }
  viewChat(userDetails) {
    console.log("userDetails", userDetails);

    this.userService.userId = userDetails.user_id
    this.userService.userName = userDetails.name
    this.userService.userIMG = userDetails.profileImage
    if (this.remainingSMS > 0) {
      this.navCtrl.navigateForward("/chat");
    } else {
      this.presentAlert()
    }

  }


  handleImgError(ev: any, item: any, url) {
    let source = ev.srcElement;
    let imgSrc = `assets/imgs/placeholder.jpg`;

    source.src = imgSrc;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-alert',
      cssClass: 'custom-alertclass',
      header: 'Limit Exceeded',
      message: 'Your message limit exceeded. Buy package to send more messages.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        }, {
          text: 'Buy',
          handler: () => {
            console.log('Confirm Buy');
            this.router.navigate(['subscription'])
            // Here you can add the code to redirect the user to a page where they can buy the package
          },
        },
      ],
    });

    await alert.present();
  }
}
