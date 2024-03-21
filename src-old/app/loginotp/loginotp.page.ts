import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-loginotp',
  templateUrl: './loginotp.page.html',
  styleUrls: ['./loginotp.page.scss'],
})
export class LoginotpPage implements OnInit {


  phoneNumber: any
  otp: any
  otp1: any
  otp2: any
  otp3: any
  otp4: any

  newOtp: any

  userData: any = ''


  @ViewChild('input1', { static: false }) ionInput1: { setFocus: () => void; };
  @ViewChild('input2', { static: false }) ionInput2: { setFocus: () => void; };
  @ViewChild('input3', { static: false }) ionInput3: { setFocus: () => void; };
  @ViewChild('input4', { static: false }) ionInput4: { setFocus: () => void; };


  constructor(public location: Location,
    public router: Router,
    public restService: RestService,
    public workService: WorkService,
    public navCtrl: NavController) {

    console.log('logedinUserData-----', JSON.parse(localStorage.getItem('loggedinUserData')));

  }


  inp1Change(ev) {

    if (ev.detail.value.length == 1) {
      this.ionInput2.setFocus()
    }


  }

  inp2Change(ev) {
    if (ev.detail.value.length == 1) {
      this.ionInput3.setFocus()
    } else if (ev.detail.value.length == 0) {
      this.ionInput1.setFocus()
    }
  }

  inp3Change(ev) {
    if (ev.detail.value.length == 1) {
      this.ionInput4.setFocus()
    } else if (ev.detail.value.length == 0) {
      this.ionInput2.setFocus()
    }
  }

  inp4Change(ev) {

    if (ev.detail.value.length == 0) {
      this.ionInput3.setFocus()
    }

  }

  ngOnInit() {

    this.phoneNumber = localStorage.getItem('phone')
    this.otp = this.workService.data2.data

    this.otp1 = this.otp.charAt(0)
    this.otp2 = this.otp.charAt(1)
    this.otp3 = this.otp.charAt(2)
    this.otp4 = this.otp.charAt(3)


    console.log(this.phoneNumber);
    console.log(this.otp);

  }

  goToBack() {
    this.location.back()
  }


  goToProfile1() {
    localStorage.setItem('login', 'isLogin')

    this.userData = JSON.parse(localStorage.getItem('loggedinUserData'))

    console.log('usr packageee--->>>>>', this.userData.packages_id);

    var sbID = this.userData.packages_id
    if ( this.userData.packages_id == 0) {
      console.log('subscription');
      
      this.navCtrl.navigateRoot(['subscriptionlogin'], { replaceUrl: true })
    } else {
      console.log('tab1');
      this.navCtrl.navigateRoot(['/tabs/tab1'], { replaceUrl: true })
      
    }


  }

  // goToProfile1() {


  //   this.newOtp = this.otp1 + "" + this.otp2 + "" + this.otp3 + this.otp4

  //   console.log(this.newOtp);


  //   var data = JSON.stringify({
  //     requestType: "verify_otp",
  //     number: this.phoneNumber,
  //     otp: this.newOtp
  //   })

  //   this.workService.presentLoading()

  //   this.restService.getOTP(data).subscribe((res: any) => {

  //     console.log(res);
  //     this.workService.hideLoading()

  //     if (res.status == 'success') {
  //       this.router.navigate(['/tabs/tab1'])
  //     }


  //   }, err => {
  //     this.workService.hideLoading()
  //     console.log(err);
  //     this.workService.presentToast('OTP not confirmed.')

  //   })


  //   // 

  // }


  editNum() {
    this.router.navigate(['login'], { replaceUrl: true })
  }

  resendOTP() {


    // var data = JSON.stringify({
    //   "requestType": "send_otp",
    //   number: this.phoneNumber
    // })

    // console.log(data);



    // // this.restService.sendRequest('send_otp', data).subscribe(res => {
    // //   console.log(res);

    // // })

    // this.workService.presentLoading()

    // this.restService.getOTP(data).subscribe((res: any) => {
    //   console.log(res);

    //   if (res.status == 'success') {

    //     this.otp = res.data

    //     this.otp1 = this.otp.charAt(0)
    //     this.otp2 = this.otp.charAt(1)
    //     this.otp3 = this.otp.charAt(2)
    //     this.otp4 = this.otp.charAt(3)

    //     this.workService.hideLoading()

    //   }



    // })




  }

}
