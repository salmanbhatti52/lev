import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-accountsetting',
  templateUrl: './accountsetting.page.html',
  styleUrls: ['./accountsetting.page.scss'],
})
export class AccountsettingPage implements OnInit {

  togglePlatformAndroid = false

  userNoti: any = 'Yes'

  constructor(public location: Location,
    public router: Router,
    public platform: Platform,
    public navCtrl: NavController,
    public workService: WorkService,
    public restService: RestService) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });

  }

  ionViewWillEnter() {
    console.log('user data--->>accountsetting>>', this.workService.myUserData.data.user_data.notification_switch);

    // this.userNoti = this.workService.myUserData.data.user_data.notification_switch
    this.userNoti = localStorage.getItem('userNotiStatus')

  }


  ngOnInit() {
    if (this.platform.is('android')) {
      this.togglePlatformAndroid = true
    } else {
      this.togglePlatformAndroid = false
    }
  }

  goBack() {
    this.location.back()
  }

  goToBell() {
    this.router.navigate(['notification'])
  }

  goToFAQ() {
    this.router.navigate(['faq'])
  }

  goToTermsService() {
    this.router.navigate(['termsservice'])
  }

  goToMembership() {
    this.router.navigate(['subscription'])
  }

  deleteaccount() {
    this.router.navigate(['deleteaccount'])
  }



  goToApply() {
    localStorage.removeItem('login')
    console.log(localStorage.getItem('login'));

    this.navCtrl.navigateRoot(['/apply'], { replaceUrl: true })

  }


  getNoti(noti) {
    console.log(noti.detail.checked);

    if (noti.detail.checked) {
      this.userNoti = 'Yes'
      localStorage.setItem('userNotiStatus', 'Yes')

    } else {
      this.userNoti = 'No'
      localStorage.setItem('userNotiStatus', 'No')

    }


    var ss = JSON.stringify({

      "users_customers_id": localStorage.getItem('loggedinUserID'),
      "notification_switch": this.userNoti

    })

    this.restService.update_notification_switchAPI(ss).subscribe((res: any) => {

      console.log('noti res--->', res);


    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })



  }





}
