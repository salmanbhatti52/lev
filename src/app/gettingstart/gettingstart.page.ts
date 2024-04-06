import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';


import { AlertController, IonInput, NavController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { AngularFireModule } from '@angular/fire';


import firebaseConfig from '../firebase'
import firebase from 'firebase/app';
import 'firebase/auth';



import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';


import { createTextMaskInputElement } from 'text-mask-core';
// import OneSignal from 'onesignal-cordova-plugin';
firebase.initializeApp(firebaseConfig);

import OneSignal from 'onesignal-cordova-plugin';
@Component({
  selector: 'app-gettingstart',
  templateUrl: './gettingstart.page.html',
  styleUrls: ['./gettingstart.page.scss'],
})
export class GettingstartPage implements OnInit {

  otpSent = false;
  recpVerification;
  otpConfrimResult: firebase.auth.ConfirmationResult;
  phonenumber = '';
  otpCode = '';
  //////////////////////////

  flagsList: any
  countryName: any = 'USA'
  flagofcountry: any = 'us'

  countryCode: any = '+1'
  phoneNum: any = ''

  countryCodephoneNum: any

  matchpopupHidden: boolean = true

  phoneNumStatus = false
  countryCodeStatus = false


  oneSignalDeviceID: any = ''

  //////////////////

  verificationID: any = ''


  completePhoneNum: any = ''

  userData: any = ''
  uid: any;
  oneSignalAppId = 'db3264f6-fcb1-49e5-b3df-888a40925111'
  constructor(public router: Router,
    public restService: RestService,
    public workService: WorkService,
    public location: Location,
    public alertController: AlertController,
    public afAuth: AngularFireModule,
    public platform: Platform,
    public storage: Storage,
    public navCtrl: NavController,
    private fb: FormBuilder) {

    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });

  }



  ngOnInit() {


    var prompt1HeadIDVal = 1
    var prompt2HeadIDVal = 1
    var prompt3HeadIDVal = 1


    var prompt1Val = "afjlff"
    var prompt2Val = "afjsafsafdlff"
    var prompt3Val = "afsdfwG4WEFWEjlff"


    var myprompts = {};
    myprompts[prompt1HeadIDVal] = prompt1Val;
    myprompts[prompt2HeadIDVal] = prompt2Val;
    myprompts[prompt3HeadIDVal] = prompt3Val;

    console.log('my array ---->>>', myprompts)



  }


  goToOTP() {

    if (this.countryCode == '') {
      this.countryCodeStatus = true

      setInterval(() => {
        this.phoneNumStatus = false
        this.countryCodeStatus = false
      }, 4000);

    } else if (this.phoneNum == '(' || this.phoneNum == '') {
      this.phoneNumStatus = true

      setInterval(() => {
        this.phoneNumStatus = false
        this.countryCodeStatus = false
      }, 4000);

    } else {
      this.workService.data1 = "+92"
      this.workService.data2 = { data: "9632" }

      console.log('complete phone num---', this.countryCode + this.phoneNum);

      var num = this.countryCode + this.phoneNum

      var num = this.countryCode + this.phoneNum



      this.completePhoneNum = num

      // replace specual character
      var c1 = num.replace('(', '');
      var c2 = c1.replace(')', '');
      var c3 = c2.replace(' ', '');
      var c4 = c3.replace('-', '');
      console.log('num-----', c4);
      localStorage.setItem('simpleNumberToSendourDB', c4)
      console.log('num-----simpleNumberToSendourDB', localStorage.getItem('simpleNumberToSendourDB'));
      // replace specual character

      this.workService.presentLoading()

      var data = JSON.stringify({
        "contact_number": localStorage.getItem('simpleNumberToSendourDB')
      })
      console.log('data-----', data);
      this.oneSignalDeviceID = localStorage.getItem("oneSignaldeviceID");

      console.log('164--------------------', num);
      console.log('165--------------------', localStorage.getItem('phone'));

      if (num != localStorage.getItem('phone')) {
        localStorage.clear()
        this.storage.clear()
        localStorage.setItem("oneSignaldeviceID", this.oneSignalDeviceID);

        // replace specual character
        var c1 = num.replace('(', '');
        var c2 = c1.replace(')', '');
        var c3 = c2.replace(' ', '');
        var c4 = c3.replace('-', '');
        console.log('num-----', c4);
        localStorage.setItem('simpleNumberToSendourDB', c4)
        console.log('num-----simpleNumberToSendourDB', localStorage.getItem('simpleNumberToSendourDB'));
        // replace specual character
      }

      console.log('login or signup 1111----', this.workService.comingForm);
      this.restService.check_contact_existsAPI(data).subscribe((res: any) => {
        this.workService.hideLoading()
        console.log('res----', res);
        if (res.status == 'success') {


          localStorage.setItem('phone', num)

          // replace specual character
          var c1 = num.replace('(', '');
          var c2 = c1.replace(')', '');
          var c3 = c2.replace(' ', '');
          var c4 = c3.replace('-', '');
          console.log('num-----', c4);
          localStorage.setItem('simpleNumberToSendourDB', c4)
          console.log('num-----simpleNumberToSendourDB', localStorage.getItem('simpleNumberToSendourDB'));
          // replace specual character

          if (this.workService.comingForm == 'sigup') {


            if (this.platform.is('ios')) {
              console.log('platform iosssssssssss', this.completePhoneNum)
              this.workService.userMobileNum = this.completePhoneNum
              this.router.navigate(['otppageweb'])
            } else {
              console.log('platform android')
              this.sendOTP()
            }


          } else if (this.workService.comingForm == 'login') {
            this.workService.hideLoading()
            this.workService.presentToast('Contact number does not registered.')
          }




        } else {



          console.log('login or signup 1111[[[[[[[[[[[[[[]]]]]]]]]]]]]]----', this.workService.comingForm);
          if (this.workService.comingForm == 'sigup') {
            this.workService.presentToast('Contact Number already exists.')
          } else if (this.workService.comingForm == 'login') {



            console.log('yserrrrrrrrrrr', res.message.userStatus);

            if (res.message.userStatus == 'Active') {
              //---- login the number
              this.workService.hideLoading()

              if (this.platform.is('ios')) {

                console.log('platform iosssssssssss', this.completePhoneNum)

                this.workService.userMobileNum = this.completePhoneNum
                this.router.navigate(['otppageweb'])
              } else {
                console.log('platform android')
                this.sendOTPForLogin()
              }
              //---- login the number
            } else if (res.message.userStatus == "Pending") {
              this.workService.presentToast('Your application is under review by the admin.')
            } else if (res.message.userStatus == "Inactive") {
              this.workService.presentToast('Your login is temporary disabled. Please contact our team for further information.')
            } else if (res.message.userStatus == "Rejected") {
              this.workService.presentToast('Your application is rejected by the admin. You can try applying again.')
            } else if (res.message.userStatus == "Deleted") {
              this.workService.presentToast('Your application is deleted. Please contact our team for further information.')
            } else {
              this.workService.presentToast('Some error occured')
            }


          }



        }
      }, err => {
        this.workService.hideLoading()
        this.workService.presentToast('Network error occured')
      })
    }
  }




  showPopup() {
    this.matchpopupHidden = false
    console.log();
  }

  hidePopup() {
    this.matchpopupHidden = true

    this.otp1 = ''
    this.otp2 = ''
    this.otp3 = ''
    this.otp4 = ''
    this.otp5 = ''
    this.otp6 = ''
  }


  flagClick(flag) {

    this.hidePopup();

    this.countryCode = flag.id
    this.flagofcountry = flag.alpha2
    this.countryName = flag.name

  }


  goBack() {
    //this.location.back()
    this.router.navigate(['apply'])
  }

  ////////////////////////////



  ionViewDidEnter() {
    this.recpVerification = new firebase.auth.RecaptchaVerifier('sign-in-button', { size: 'invisible' });
  }
  ionViewDidLoad() {
    this.recpVerification = new firebase.auth.RecaptchaVerifier('sign-in-button', { size: 'invisible' });

  }


  sendOTP() {

    this.workService.presentLoading()
    // this.phonenumber = '+923156198610';
    var num = this.countryCode + this.phoneNum
    firebase.auth().signInWithPhoneNumber(num, this.recpVerification).then(data => {
      console.log('data from sending otp response', data);
      this.phonenumber = this.phonenumber;
      this.otpSent = true;
      this.otpConfrimResult = data;
      this.workService.otpConfrimResultData = JSON.stringify(this.otpConfrimResult)
      // this.router.navigate(['otp'])
      this.workService.hideLoading()
      this.showPopup()

    }).catch(res => {
      this.workService.hideLoading()
      this.workService.presentToast('Some error occured or too many requests. Please try again after some time')
      console.log('Error from firebase', res);


    });
  }



  sendOTPForLogin() {

    this.workService.presentLoading()
    // this.phonenumber = '+923156198610';
    var num = this.countryCode + this.phoneNum
    firebase.auth().signInWithPhoneNumber(num, this.recpVerification).then(data => {
      console.log('data from sending otp response', data);
      this.phonenumber = this.phonenumber;
      this.otpSent = true;
      this.otpConfrimResult = data;
      this.workService.otpConfrimResultData = JSON.stringify(this.otpConfrimResult)
      // this.router.navigate(['otp'])
      this.workService.hideLoading()
      this.showPopup()
      this.loginTheNumber()

    }).catch(res => {
      this.workService.hideLoading()
      this.workService.presentToast('Some error occured or too many requests. Please try again after some time')
      console.log('Error from firebase', res);


    });
  }


  ionViewWillEnter() {

    console.log('login or signup ----', this.workService.comingForm);

    var imgArr = [{ "id": 0, "img": "data:image/p" }, { "id": 0, "img": "data:image/p" }]


    console.log('my tessssstttttttZ---------', imgArr[0].img);

  }




  send() {
    console.log('Sending OTP......');

    var num = this.countryCode + this.phoneNum
    console.log(num);
    (<any>window).FirebasePlugin.verifyPhoneNumber(num, 60, (credential) => {
      alert('OTP Sent successfully.');
      console.log(credential);
      this.verificationID = credential.verificationId;
      console.log("Verificaion ID : " + this.verificationID);
    }, (error) => {
      console.log(error);
    });
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




  phoneNumber: any
  otp: any = ''
  otp1: any = ''
  otp2: any = ''
  otp3: any = ''
  otp4: any = ''

  otp5: any = ''
  otp6: any = ''


  newOtp: any


  @ViewChild('input1', { static: false }) ionInput1: { setFocus: () => void; };
  @ViewChild('input2', { static: false }) ionInput2: { setFocus: () => void; };
  @ViewChild('input3', { static: false }) ionInput3: { setFocus: () => void; };
  @ViewChild('input4', { static: false }) ionInput4: { setFocus: () => void; };
  @ViewChild('input5', { static: false }) ionInput5: { setFocus: () => void; };
  @ViewChild('input6', { static: false }) ionInput6: { setFocus: () => void; };




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






  goToProfile1() {


    this.workService.hideLoading()

    console.log(this.otpConfrimResult);


    if (this.otp1 != '' && this.otp2 != '' && this.otp3 != '' && this.otp4 != '' && this.otp5 != '' && this.otp6 != '') {
      this.newOtp = this.otp1 + "" + this.otp2 + "" + this.otp3 + "" + this.otp4 + "" + this.otp5 + "" + this.otp6

      this.otpConfrimResult.confirm(this.newOtp).then(data => {
        console.log('Verify result', data);

        this.hidePopup()
      }).then(res => {

        this.hidePopup()

        this.workService.hideLoading()

        console.log('nnnnnnnnnnnnnnnnnnnnnnn---', this.workService.comingForm);


        if (this.workService.comingForm == 'sigup') {
          this.router.navigate(['profile1'])
        }


        if (this.workService.comingForm == 'login') {
          //error is here , please login first
          localStorage.setItem('login', 'isLogin')
          this.userData = JSON.parse(localStorage.getItem('loggedinUserData'))
          console.log('usr packageee--->', this.userData.packages_id);
          var sbID = this.userData.packages_id

          localStorage.setItem('packages_id', sbID)

          this.navCtrl.navigateRoot(['/tabs/tab1'], { replaceUrl: true })

          // if (sbID.toString() == '0') {
          //   this.navCtrl.navigateRoot(['subscriptionlogin'], { replaceUrl: true })
          // } else {
          //   this.navCtrl.navigateRoot(['/tabs/tab1'], { replaceUrl: true })
          // }
          ////is ko 1 karna ha after testing///

          ///latest comment code 27-1-24
          // if (sbID.toString() == '1') {
          //   this.navCtrl.navigateRoot(['subscriptionlogin'], { replaceUrl: true })
          // } else {
          //   this.navCtrl.navigateRoot(['/tabs/tab1'], { replaceUrl: true })
          // }
        }



      }, err => {
        this.workService.presentToast('Incorrect OTP')
      });
    } else {

      this.workService.presentToast('Enter OTP')
    }



  }



  editNum() {
    this.hidePopup()
  }

  resendOTP() {//
    this.sendOTP()
  }


  loginTheNumber() {


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
            // localStorage.set('loggedinUserData', JSON.stringify(res.data.user))
            // localStorage.setItem('loggedinUserID', res.data.user.users_customers_id)
            this.showPopup()
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




  //masking here

  @ViewChild('phoneInput')
  public set phoneInput(value: IonInput) {
    if (!value) {
      return;
    }

    value.getInputElement().then(input => this.registerTextMask(input));
  }

  public form: FormGroup = this.fb.group({
    phoneNumberMSK: [null, [Validators.required]],
  });

  // prettier-ignore
  private phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  get phoneNumberMSK() {
    return this.form.get('phoneNumberMSK') as FormControl;
  }



  private registerTextMask(inputElement: HTMLInputElement) {
    const maskedInput = createTextMaskInputElement({
      inputElement,
      mask: this.phoneMask,
      guide: false,
    });
    this.phoneNumberMSK.valueChanges.subscribe(value => {
      maskedInput.update(value);
    });
  }

  countryCodeInput() {
    // this.phoneNum = ''
  }
}
