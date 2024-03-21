import { JsonPipe, Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

import firebase from 'firebase/app';
import 'firebase/auth';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  phoneNumber: any
  otp: any = ''
  otp1: any = ''
  otp2: any = ''
  otp3: any = ''
  otp4: any = ''

  otp5: any = ''
  otp6: any = ''


  newOtp: any

  otpConfrimResult: firebase.auth.ConfirmationResult;


  @ViewChild('input1', { static: false }) ionInput1: { setFocus: () => void; };
  @ViewChild('input2', { static: false }) ionInput2: { setFocus: () => void; };
  @ViewChild('input3', { static: false }) ionInput3: { setFocus: () => void; };
  @ViewChild('input4', { static: false }) ionInput4: { setFocus: () => void; };
  @ViewChild('input5', { static: false }) ionInput5: { setFocus: () => void; };
  @ViewChild('input6', { static: false }) ionInput6: { setFocus: () => void; };



  constructor(public location: Location,
    public router: Router,
    public restService: RestService,
    public workService: WorkService) { }


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
    if (ev.detail.value.length == 1) {
      this.ionInput5.setFocus()
    } else if (ev.detail.value.length == 0) {
      this.ionInput3.setFocus()
    }
  }




  inp5Change(ev) {
    if (ev.detail.value.length == 1) {
      this.ionInput6.setFocus()
    } else if (ev.detail.value.length == 0) {
      this.ionInput4.setFocus()
    }
  }



  inp6Change(ev) {

    if (ev.detail.value.length == 0) {
      this.ionInput5.setFocus()
    }

  }

  ngOnInit() {

    this.phoneNumber = localStorage.getItem('phone')
    // this.otp = '85296354'

    // this.otp1 = this.otp.charAt(0)
    // this.otp2 = this.otp.charAt(1)
    // this.otp3 = this.otp.charAt(2)
    // this.otp4 = this.otp.charAt(3)
    // this.otp5 = this.otp.charAt(4)
    // this.otp6 = this.otp.charAt(5)


    console.log(this.phoneNumber);
    console.log(this.otp);

  }

  goToBack() {
    // this.location.back()

    this.router.navigate(['gettingstart'], { replaceUrl: true })

  }


  // goToProfile1() {

  //   this.router.navigate(['profile1'])


  // }


  goToProfile1() {

    this.otpConfrimResult = JSON.parse(this.workService.otpConfrimResultData)

    console.log(this.otpConfrimResult);


    if (this.otp1 != '' && this.otp2 != '' && this.otp3 != '' && this.otp4 != '' && this.otp5 != '' && this.otp6 != '') {
      this.newOtp = this.otp1 + "" + this.otp2 + "" + this.otp3 + "" + this.otp4 + "" + this.otp5 + "" + this.otp6

      this.otpConfrimResult.confirm(this.newOtp).then(data => {
        console.log('Verify result', data);
        this.router.navigate(['profile1'])
      }).then(res => {
        console.log('Verify error', res);
        this.workService.presentToast('Incorrect OTP')
      });
    } else {
      this.workService.presentToast('Enter OTP')
    }



  }

  editNum() {
    this.router.navigate(['gettingstart'], { replaceUrl: true })
  }

  resendOTP() {

  }

}
