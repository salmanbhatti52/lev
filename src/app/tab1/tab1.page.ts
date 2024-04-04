
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { UserpreferencesmodalPage } from '../userpreferencesmodal/userpreferencesmodal.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  subscription;


  userData: any = ''
  myUserName: any = ''
  matches: any = ''
  totalMatches = 0

  divPopupShow = false
  mobile: any;
  subscriptionIDFree: string;
  userpkgincoming: any;
  users_packages_txns: any;
  preferencesdata = [];
  data = [
    { label: "Kosher", value: "Not Kosher" },
    { label: "Looking For", value: "Female" },
    { label: "Marital Status", value: "Single" },
    { label: "Personality Type", value: "Introvert" }
  ];

  constructor(public router: Router,
    public platform: Platform,
    public restService: RestService,
    public workService: WorkService,
    public alertController: AlertController,
    private modalController: ModalController
    // public iab: InAppBrowser
  ) {

    // najam
    // localStorage.setItem('loggedinUserID', '213') 
    //mughees
    // localStorage.setItem('loggedinUserID', '63')


    this.subscription = this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
      navigator['app'].exitApp();

    });

    if (this.platform.is('android')) {
      this.mobile = 'android';
    }
    if (this.platform.is('ios')) {
      this.mobile = 'ios';
    }

  }

  ionViewWillEnter() {


    console.log('ionviewwillenter');
    // this.workService.presentLoading()
    var userID = localStorage.getItem('loggedinUserID')
    let data = {
      loginuser: 0,
      otheruser: userID
    }
    this.restService.get_user_dataAPI(data).subscribe(async (res: any) => {
      // this.workService.hideLoading()
      console.log('incomming data ===333333333 ', res);
      if (res.status == "success") {
        this.openPreferences(res.data.user_data)
        this.userpkgincoming = res.data.user_data.packages_id

        if (this.userpkgincoming == '0') {
          console.log('88888888');

          localStorage.setItem('packages_id', '88')
          this.subscriptionIDFree = localStorage.getItem('packages_id')
        } else {
          console.log('iiiiii');
          localStorage.setItem('packages_id', this.userpkgincoming)
          this.subscriptionIDFree = localStorage.getItem('packages_id')
        }

        this.users_packages_txns = res.data.users_packages_txns
        const lastSubsEndDate = this.users_packages_txns[this.users_packages_txns.length - 1].subs_end_date;
        const endDate = new Date(lastSubsEndDate);
        const currentDate = new Date();
        if (currentDate > endDate) {
          // If current date is greater, show an alert
          // const alert = await this.alertController.create({
          //   header: 'Subscription Alert',
          //   message: 'Your subscription has expired!',
          //   buttons: ['OK']
          // });

          // await alert.present();
          this.SubscriptionExpirenoti()
        }
      }
    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Some error occured')
    })





  }

  async openPreferences(userdata) {
    const isModalShown = localStorage.getItem('isUserDetailsModalShown');
    if (!isModalShown) {
      const modal = await this.modalController.create({
        component: UserpreferencesmodalPage,
        componentProps: { data: userdata }
      });
      await modal.present();

      // After showing the modal, set a flag in local storage
      localStorage.setItem('isUserDetailsModalShown', 'true');

    }
  }
  SubscriptionExpirenoti() {
    var ss = JSON.stringify({
      "user_id": localStorage.getItem('loggedinUserID'),
      "msgTitle": "Subscription Alert",
      "msg": "Your subscription has expired!"
    })
    this.restService.sendnotification(ss).subscribe((res: any) => {
      this.workService.hideLoading()

      console.log('resss----', res);


      if (res.status == 'success') {


      } else {
        this.workService.presentToast(res.message)
      }


    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }

  goToSubscription() {
    this.router.navigate(['subscription'])
  }


  goToHi() {
    // this.router.navigate(['/tabs/match'])

    this.userData = JSON.parse(localStorage.getItem('loggedinUserData'))

    console.log('user data ======', this.userData);

    if (this.userData != null) {
      this.myUserName = this.userData.first_name + ' ' + this.userData.last_name
    } else {
      this.myUserName = 'Friend'

    }





    this.workService.presentLoading()
    var data = JSON.stringify({
      "users_customers_id": localStorage.getItem('loggedinUserID'),
      // "users_customers_id": 15

    })
    console.log('data-----', data);
    this.restService.getBestMatchesAPI(data).subscribe((res: any) => {
      this.workService.hideLoading()
      console.log('data-----', res);
      if (res.status == 'success') {
        this.matches = res.data
        this.totalMatches = this.matches.length
        if (this.totalMatches == 0) {

          this.router.navigate(['pollnew'])
        } else {
          if (this.subscriptionIDFree == '88') {

            this.router.navigate(['pollnew'])
          } else {
            this.router.navigate(['tabs/match'])
          }
        }
      } else {

        this.router.navigate(['pollnew'])
      }
    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Some error occured')
    })



  }



  hidePopup() {
    this.divPopupShow = false
  }

  showPopup() {
    this.divPopupShow = true

  }

  startTalkToChat() {

    // this.router.navigate(['contactus'])

    // this.userData = JSON.parse(localStorage.getItem('loggedinUserData'))


    // console.log('my user data --', this.userData);

    // this.workService.myUserData = this.userData
    // this.router.navigate(['contactus2'])


    this.router.navigate(['adminchat'])




    // var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    // (function () {
    //   var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    //   s1.async = true;

    //   s1.src = 'https://embed.tawk.to/61b30a5dc82c976b71c0bdc1/1fmhm108j';
    //   s1.charset = 'UTF-8';
    //   s1.setAttribute('crossorigin', '*');
    //   s0.parentNode.insertBefore(s1, s0);
    // })();


  }

  goToFAQ() {
    this.router.navigate(['faq'])
  }


}
