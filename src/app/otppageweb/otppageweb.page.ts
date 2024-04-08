import { Component, OnInit } from '@angular/core';
import { WorkService } from '../work.service';
import { DomSanitizer } from '@angular/platform-browser';
import { RestService } from '../rest.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-otppageweb',
  templateUrl: './otppageweb.page.html',
  styleUrls: ['./otppageweb.page.scss'],
})
export class OtppagewebPage implements OnInit {

  otpUrl: any = ''
  userMobileNum: any = ''
  userData: any = ''

  private autoSaveInterval: any;

  constructor(public workService: WorkService,
    public dom: DomSanitizer,
    public restService: RestService,
    public navCtrl: NavController,
    public router: Router,
    public location: Location) {



    this.otpUrl = this.dom.bypassSecurityTrustResourceUrl("https://thelevapp.co/backoffice/otp?phone=" + encodeURIComponent(this.workService.userMobileNum));


    this.userMobileNum = encodeURIComponent(this.workService.userMobileNum)

    console.log('urlllllll', this.userMobileNum);

    console.log('otpUrl', this.otpUrl);

  }

  ngOnInit() {
  }
  back() {
    // this.location.back()

    this.router.navigate(['/gettingstart'], { replaceUrl: true })
  }


  ionViewWillEnter() {
    this.autoSaveInterval = setInterval(() => {
      this.nextCheckUserStatus();
    }, 2000);
  }

  ionViewWillLeave() {
    clearInterval(this.autoSaveInterval);
    console.log("clear");
  }


  checkNumberStatus() {
    console.log('okkk');

  }


  nextCheckUserStatus() {
    var ss = JSON.stringify({
      'phone': this.workService.userMobileNum
    })




    this.restService.check_phone_authAPI(ss).subscribe((res: any) => {

      console.log('ress--->', res);

      if (res.status == 'success') {
        this.workService.presentToast(res.message)
        if (this.workService.comingForm == 'sigup') {
          this.router.navigate(['profile1'])
        }


        if (this.workService.comingForm == 'login') {
          this.loginUser()

        }

      } else {
        // this.workService.presentToast(res.message)
      }

    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })
  }





  loginUser() {

    this.workService.data1 = "+92"
    this.workService.data2 = { data: "9632" }


    console.log('oneSignaldeviceID', localStorage.getItem("oneSignaldeviceID"));

    var oneSignalID = localStorage.getItem("oneSignaldeviceID")

    if (oneSignalID == null || oneSignalID == 'null') {
      oneSignalID = 'not available'
    }

    localStorage.setItem('phone', this.workService.userMobileNum)

    var stringy = JSON.stringify({
      'contact_number': localStorage.getItem('simpleNumberToSendourDB'),
      'onesignal_id': oneSignalID
    })


    console.log(stringy);


    this.workService.presentLoading()
    this.restService.loginAPI(stringy).subscribe((res: any) => {

      this.workService.hideLoading()
      console.log(res)

      if (res.status == "success") {

        if (res.data.status == "Active") {
          localStorage.setItem('login', 'isLogin')
          localStorage.setItem('loggedinUserData', JSON.stringify(res.data))
          localStorage.setItem('loggedinUserID', res.data.users_customers_id)
          localStorage.setItem('remainingSMS', res.data.allowed_sms)
          localStorage.setItem('packages_id', res.data.packages_id)


          console.log('packages_id----', res.data.packages_id);
          //packages_id will be 1 or 0//////
          // 0 for not active package
          // 1 for when pacakge is active
          // if (res.data.packages_id.toString() == '0') {
          //   this.navCtrl.navigateRoot(['subscriptionlogin'], { replaceUrl: true })
          // } else {
          this.navCtrl.navigateRoot(['/tabs/tab1'], { replaceUrl: true })
          // }

        } else if (res.data.status == "Pending") {
          this.workService.presentToast('Your application is under review by the admin.')
        } else if (res.data.status == "Inactive") {
          this.workService.presentToast('Your login is temporary disabled. Please contact our team for further information.')
        } else if (res.data.status == "Rejected") {
          this.workService.presentToast('Your application is rejected by the admin. You can try applying again.')
        } else if (res.data.status == "Deleted") {
          this.workService.presentToast('Your application is deleted. Please contact our team for further information.')
        } else {
          this.workService.presentToast(res.message)
        }

      } else {
        this.workService.presentToast(res.message)
      }

    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })

  }






  goToProfile1() {


    this.workService.hideLoading()

    console.log('nnnnnnnnnnnnnnnnnnnnnnn---', this.workService.comingForm);


    if (this.workService.comingForm == 'sigup') {
      this.router.navigate(['profile1'])
    }


    if (this.workService.comingForm == 'login') {

      localStorage.setItem('login', 'isLogin')
      this.userData = JSON.parse(localStorage.getItem('loggedinUserData'))
      console.log('usr packageee--->>>>>', this.userData.packages_id);
      var sbID = this.userData.packages_id

      // if (sbID.toString() == '0') {
      //   this.navCtrl.navigateRoot(['subscription'], { replaceUrl: true })
      // } else {
      this.navCtrl.navigateRoot(['/tabs/tab1'], { replaceUrl: true })
      // }
    }







  }

}
