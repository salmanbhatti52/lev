import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  flagsList: any
  countryName: any = 'Pakistan'
  flagofcountry: any = 'pk'

  countryCode: any = '+1'
  phoneNum: any = ''

  countryCodephoneNum: any

  matchpopupHidden: boolean = true

  phoneNumStatus = false
  countryCodeStatus = false


  constructor(public router: Router,
    public restService: RestService,
    public workService: WorkService,
    public location: Location,
    public platform: Platform) {


    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['apply'], { replaceUrl: true })
    });


    // this.workService.presentLoading()

    // setTimeout(() => {
    //   console.log();
    //   this.flagsList = this.restService.flagsList;

    //   this.workService.hideLoading()

    // }, 2000);



  }

  ngOnInit() {


  }



  goToOTP() {

    if (this.countryCode == '') {
      this.countryCodeStatus = true

      setInterval(() => {
        this.phoneNumStatus = false
        this.countryCodeStatus = false
      }, 4000);

    } else if (this.phoneNum == '') {
      this.phoneNumStatus = true

      setInterval(() => {
        this.phoneNumStatus = false
        this.countryCodeStatus = false
      }, 4000);

    } else {
      this.workService.data1 = "+92"
      this.workService.data2 = { data: "9632" }

      console.log('complete phone num---', this.countryCode + this.phoneNum);

      console.log('oneSignaldeviceID', localStorage.getItem("oneSignaldeviceID"));

      var oneSignalID = localStorage.getItem("oneSignaldeviceID")

      if (oneSignalID == null || oneSignalID == 'null') {
        oneSignalID = 'not available'
      }

      localStorage.setItem('phone', this.countryCode + this.phoneNum)

      var stringy = JSON.stringify({
        'contact_number': this.countryCode + this.phoneNum,
        'onesignal_id': oneSignalID
      })


      console.log(stringy);


      this.workService.presentLoading()
      this.restService.loginAPI(stringy).subscribe((res: any) => {

        this.workService.hideLoading()
        console.log(res)

        if (res.status == "success") {

          if (res.data.status == "Active") {
            localStorage.setItem('loggedinUserData', JSON.stringify(res.data))
            localStorage.setItem('loggedinUserID', res.data.users_customers_id)
            localStorage.setItem('remainingSMS', res.data.allowed_sms)
            localStorage.setItem('packages_id', res.data.users_customers_id.packages_id)
            // localStorage.set('loggedinUserData', JSON.stringify(res.data.user))
            // localStorage.setItem('loggedinUserID', res.data.user.users_customers_id)
            this.router.navigate(['loginotp'])
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


      //
    }
  }

  // goToOTP() {

  //   if (this.phoneNum == '') {
  //     this.phoneNumStatus = true

  //     setInterval(() => {
  //       this.phoneNumStatus = false
  //     }, 4000);

  //   } else {
  //     this.countryCodephoneNum = this.countryCode + "" + this.phoneNum

  //     var data = JSON.stringify({
  //       "requestType": "send_otp",
  //       number: this.countryCodephoneNum
  //     })


  //     localStorage.setItem('userPhoneNumber', this.countryCodephoneNum)

  //     console.log(data);



  //     // this.restService.sendRequest('send_otp', data).subscribe(res => {
  //     //   console.log(res);

  //     // })

  //     this.workService.presentLoading()

  //     this.restService.getOTP(data).subscribe((res: any) => {
  //       console.log(res);

  //       if (res.status == 'success') {
  //         this.workService.data1 = this.countryCodephoneNum
  //         this.workService.data2 = res
  //         this.workService.hideLoading()
  //         this.router.navigate(['loginotp'])
  //       }



  //     }, err => {
  //       this.workService.hideLoading();
  //       this.workService.presentToast('Some Error Occured')
  //     })


  //   }




  //   //
  // }


  showPopup() {
    this.matchpopupHidden = false
    console.log();
  }

  hidePopup() {
    this.matchpopupHidden = true
  }


  flagClick(flag) {

    this.hidePopup();

    this.countryCode = flag.id
    this.flagofcountry = flag.alpha2
    this.countryName = flag.name

  }


  goBack() {
    //this.location.back()

    this.router.navigate(['apply'], { replaceUrl: true })
  }

  phoneNumChaneg(val) {




    console.log('valll---', val.detail.data);



  }


  eventHandler(e) {


    console.log(e);



    if (this.countryCode == '+1') {

      console.log('ok', this.phoneNum);


      if (this.phoneNum.length == 3 && (e.key != 'Backspace')) {
        console.log('ok333333');
        this.phoneNum = "(" + this.phoneNum + ") "
      }

      if (this.phoneNum.length == 9 && (e.key != 'Backspace')) {
        console.log('ok333333');
        this.phoneNum = this.phoneNum + "-"
      }

    }



  }

}
