import { Location } from '@angular/common';
import { fn } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.page.html',
  styleUrls: ['./profile1.page.scss'],
})
export class Profile1Page implements OnInit {


  fname: any = ''
  lname: any = ''
  email: any = ''
  pass1: any = ''
  pass2: any = ''

  userPhoneNumber: any = ''



  fnameStatus: boolean = false
  lnameStatus: boolean = false
  emailStatus: boolean = false
  pass1Status: boolean = false
  pass2Status: boolean = false

  getNotiAndUpdates = 'Yes'

  u = false

  togglePlatformAndroid = false

  constructor(public router: Router,
    public location: Location,
    public workService: WorkService,
    public restService: RestService,
    public platform: Platform,
    public iab: InAppBrowser) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });
  }

  ngOnInit() {

    if (this.platform.is('android')) {
      this.togglePlatformAndroid = true
    } else {
      this.togglePlatformAndroid = false
    }
  }


  ionViewWillEnter() {



    this.fname = localStorage.getItem('fname')
    this.lname = localStorage.getItem('lname')
    this.email = localStorage.getItem('email')
    this.getNotiAndUpdates = localStorage.getItem('getNotiAndUpdates')

    console.log('noti', this.getNotiAndUpdates);

    if (localStorage.getItem('getNotiAndUpdates') == null) {
      this.getNotiAndUpdates = 'Yes'
    }

    if (localStorage.getItem('fname') == null) {
      this.fname = ''
    }

    if (localStorage.getItem('lname') == null) {
      this.lname = ''
    }

    if (localStorage.getItem('email') == null) {
      this.email = ''
    }

    console.log(localStorage.getItem('fname'));


  }


  // createAccount() { this.router.navigate(['info'], { replaceUrl: true }) }

  changename(ev) {
    this.fname = this.restService.removebadwords(ev.detail.value)
  }
  changelname(ev) {
    this.lname = this.restService.removebadwords(ev.detail.value)
  }
  changeemail(ev) {
    this.email = this.restService.removebadwords(ev.detail.value)
  }
  changepass(ev) {
    this.pass1 = this.restService.removebadwords(ev.detail.value)
  }
  changepass2(ev) {
    this.pass2 = this.restService.removebadwords(ev.detail.value)
  }
  createAccount() {


    console.log('createAccount', this.pass1);


    this.userPhoneNumber = localStorage.getItem('userPhoneNumber')

    if (this.fname == '') {
      this.fnameStatus = true
    }

    if (this.lname == '') {
      this.lnameStatus = true
    }

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (!re.test(this.email)) {
      this.emailStatus = true
      this.workService.presentToast('Enter Valid Email.')
    }

    if (this.email == '') {
      this.emailStatus = true
    }

    if (this.pass1 == '') {
      this.pass1Status = true
    }

    if (this.pass2 == '') {
      this.pass2Status = true
    }



    setInterval(() => {
      this.fnameStatus = false
      this.lnameStatus = false
      this.emailStatus = false
      this.pass1Status = false
      this.pass2Status = false
    }, 4000);





    if (this.fname != '' && this.lname != '' && this.email != '' && re.test(this.email) && this.pass1 != '' && this.pass2 != '') {

      if (this.pass1 == this.pass2) {
        //   var data = JSON.stringify({
        //     firstname: this.fname,
        //     lastname: this.lname,
        //     userEmail: this.email,
        //     userPassword: this.pass1,
        //     phone: this.userPhoneNumber,
        //     getNotification: this.getNotiAndUpdates,
        //   })

        //   console.log(data);

        //   this.workService.presentLoading()

        //   this.restService.profile1API(data).subscribe((res: any) => {
        //     this.workService.hideLoading()

        //     if (res.status == 'success') {
        //       this.router.navigate(['info'], { replaceUrl: true })
        //       localStorage.setItem('userData', JSON.stringify(res))
        //     } else {
        //       this.workService.presentToast(res.message)
        //     }
        //     console.log(res);

        //   }, err => {
        //     console.log(err);
        //     this.workService.presentToast('Some Error Occured')
        //     this.workService.hideLoading()
        //   })

        // 

        this.workService.presentLoading()

        var data = JSON.stringify({
          "requestType": "check_email",
          "user_email": this.email
        })

        console.log('data-----', data);
        this.restService.check_email_existsAPI(data).subscribe((res: any) => {

          console.log('res-----', res);


          this.workService.hideLoading()
          if (res.status == 'success') {
            localStorage.setItem('fname', this.fname)
            localStorage.setItem('lname', this.lname)
            localStorage.setItem('email', this.email)
            localStorage.setItem('pass1', this.pass1)
            localStorage.setItem('getNotiAndUpdates', this.getNotiAndUpdates)
            this.router.navigate(['info'])

          } else {
            this.workService.presentToast('Email already exists.')
          }
        }, err => {
          this.workService.hideLoading()
          this.workService.presentToast('Network error occured')
        })






      } else {

        this.pass1Status = true
        this.pass2Status = true
        this.pass1Status = true
        this.pass2Status = true
        setInterval(() => {
          this.pass1Status = false
          this.pass2Status = false
        }, 4000);

        this.workService.presentToast('Password not matched.')
      }




    }


  }

  goToBack() {
    this.location.back()

    //this.router.navigate(['otp'], { replaceUrl: true })
  }

  getNoti(event) {
    console.log(event);

    if (event.detail.checked) {
      this.getNotiAndUpdates = 'Yes'
    } else {
      this.getNotiAndUpdates = 'No'
    }

  }


  goToSignin() {
    // this.router.navigate(['apply'], { replaceUrl: true })

    this.workService.comingForm = 'login'
    this.router.navigate(['gettingstart'], { replaceUrl: true })
  }



  goToTermsPolicy() {
    this.router.navigate(['termsservice'])
  }

  goToCareer() {
    this.router.navigate(['career'])
  }

  goToContact() {

    this.router.navigate(['contactussignup'])
  }


  gotoInta() {
    console.log('goToInnsta');

    let browser = this.iab.create(
      "https://www.instagram.com/thelevapp/?utm_medium=copy_link",
      "_system"
    );

  }

}
