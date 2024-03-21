import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController, Platform, AlertController } from '@ionic/angular';
import { MatchdeletePage } from '../matchdelete/matchdelete.page';
import { RestService } from '../rest.service';
import { SignupService } from '../signup.service';
import { UserserviceService } from '../userservice.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {
  matchpopupHidden = true;
  popupSelectedVal: any;
  togglePlatformAndroid = false

  toggleFalse = false




  userData: any = ''

  totalMatches = 0

  myUserName: any = ''


  userHeight: any = ''
  height1: any = ''
  height2: any = ''

  newHeight: any = ''

  selectedUserID: any = ""

  selectedIndexToDelete: any = ''

  toggleNotSelected = 1

  matchDeleted: any = 0
  bvalue = false;
  matches = [

    // { "users_customers_id": "15", "onesignal_id": "de1a9360-6fd8-11ec-ad6b-1a75e5ae0c98", "packages_id": "0", "packages_sms_id": "0", "allowed_sms": "-14", "first_name": "Ali", "last_name": "Syed", "user_email": "123@ff.vv", "user_password": "$2y$10$Z2eFZjHwK9aCzr002MnKlOi1kwcdTJkfEgKI\/oqYmzBT\/MKxblDRC", "newsletter": "Yes", "date_of_birth": "1998-04-01", "lives": "Muhammad Ali International Airport, Louisville, KY, USA", "froms": "K.K.NAGAR, KK Nagar Road, Ghatlodiya, Nirnay Nagar, Ahmedabad, Gujarat, India", "profile_pic_1": "b332eab4f74d4bc42624c3d4040b3823.png", "profile_pic_2": "01acd1d318c154cee3edddbafb1bdf51.png", "contact_number": "+923047848242", "system_countries_id": "2", "system_ethinicity_id": "0", "system_genders_id": "1", "system_looking_for_id": "2", "height": "6.4000", "work_company": "Tt", "system_jobtitle": "Ff", "system_edulevel_id": "5", "school": "", "career_goals": "no gols", "system_religions_id": "2", "system_kosher_id": "0", "system_affiliations_id": "8", "system_maritalstatus_id": "2", "willing_relocate": "Yes", "system_personality_type_id": "1", "short_bio": "shot", "instagram": "gf", "linkedin": "gg", "spotify": "cv", "know_anyone": "Yes", "friend_full_name": "", "friend_email": "", "friend_contact": "", "additional_comments": "Comment", "notification_switch": "Yes", "created_at": "2022-01-31 01:47:22", "updated_at": "2022-01-05 12:51:52", "status": "Active", "system_affiliations_name": "Other", "system_countries_name": "Albanian", "system_ethinicity_name": null, "system_edulevel_name": "Bachelor's Degree", "system_genders_name": "Male", "system_looking_for_name": "Female", "system_maritalstatus_name": "Single", "system_personality_type_name": "Introvert", "system_religions_name": "Other", "system_kosher_name": null, "prompt_replies": "Yes" },
    //  { "users_customers_id": "2", "onesignal_id": "ecd8942c-6e22-11ec-88e4-a6bbdbfc2e1e", "packages_id": "0", "packages_sms_id": "0", "allowed_sms": "-5", "first_name": "Arslan", "last_name": "Ahmad", "user_email": "arslan_ahmad91@yahoo.com", "user_password": "$2y$10$\/Z4WlXJpetFTFABg7melrOT1QT373gl1rA0dW.fD.dfRbvaqBYA0G", "newsletter": "Yes", "date_of_birth": "2018-09-01", "lives": "hah", "froms": "hah", "profile_pic_1": "26d5660156b6c966427629d256c549bd.png\t", "profile_pic_2": "26d5660156b6c966427629d256c549bd.png\t", "contact_number": "+923002485139---Deleted", "system_countries_id": "1", "system_ethinicity_id": "0", "system_genders_id": "1", "system_looking_for_id": "1", "height": "111.0000", "work_company": "test", "system_jobtitle": "1", "system_edulevel_id": "1", "school": "asdf school", "career_goals": "goals", "system_religions_id": "1", "system_kosher_id": "0", "system_affiliations_id": "1", "system_maritalstatus_id": "1", "willing_relocate": "Yes", "system_personality_type_id": "1", "short_bio": "asd asdfsdfa", "instagram": "asdf", "linkedin": "asdf", "spotify": "asdf", "know_anyone": "Yes", "friend_full_name": "asdf", "friend_email": "asdf@asd.com", "friend_contact": "123123123123", "additional_comments": "asdfasdfas asa asd", "notification_switch": "Yes", "created_at": "2022-01-31 00:05:31", "updated_at": "2021-11-15 03:12:16", "status": "Active", "system_affiliations_name": "Orthodox", "system_countries_name": "Afghan", "system_ethinicity_name": null, "system_edulevel_name": "Matric", "system_genders_name": "Male", "system_looking_for_name": "Male", "system_maritalstatus_name": "Divorsed", "system_personality_type_name": "Introvert", "system_religions_name": "Jewish", "system_kosher_name": null, "prompt_replies": "No" }

  ]
  otherUserID: any;
  block_status: string;

  constructor(public router: Router,
    public signupService: SignupService,
    public platform: Platform,
    public restService: RestService,
    public workService: WorkService,
    public userService: UserserviceService,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public alertcontroller: AlertController) { }

  ngOnInit() {
    if (this.platform.is('android')) {
      this.togglePlatformAndroid = true
    } else {
      this.togglePlatformAndroid = false
    }
  }

  showPopup() {


    // this.matchpopupHidden = false;

    // this.router.navigate(['matchdelete'])

    this.openMapModel()
  }


  async openMapModel() {

    let modal = await this.modalCtrl.create({
      component: MatchdeletePage,
      cssClass: 'map-model',
      backdropDismiss: false
    })

    modal.onDidDismiss().then((data: any) => {
      console.log('dddddddddddddddddd', data);

      var i = JSON.parse(data.data)



      console.log('fffffffffffffffff', i.add);

      this.matchDeleted = i.add

      if (this.matchDeleted == 1) {
        this.matches.splice(this.selectedIndexToDelete, 1)
        this.totalMatches = this.totalMatches - 1
      }

    })

    modal.present()
  }

  hidePopup() {

    this.toggleFalse = false

    console.log('toggg---', this.toggleFalse);

    this.matchpopupHidden = true;
  }

  async presentAlert(data) {
    if (data.block_status == 'Unblock' || data.block_status == null) {
      this.block_status = 'Block'
    } else {
      this.block_status = 'Unblock'
    }

    const alert = await this.alertcontroller.create({
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Report',
          cssClass: 'alert-button-cancel',
          handler: () => {
            console.log('I care about humanity');
            this.reportUser(data)
          }
        },
        {
          text: this.block_status,
          cssClass: 'alert-button-confirm',
          handler: () => {
            console.log('I care about humanity');
            this.blockorunblockuser(data)
          }
        },
      ],
    });

    await alert.present();
  }

  reportUser(value) {
    let data = {
      "reported_user_id": value.users_customers_id,
      "reported_by_user_id": localStorage.getItem('loggedinUserID')
    }
    this.restService.repoertuser(data).subscribe((res: any) => {
      console.log('block user result==', res);
      if (res.status == 'success') {
        this.ionViewWillEnter();
        this.workService.presentToast(res.message);
      } if (res.status == 'error') {
        this.workService.presentToast(res.message);
      }
    })
  }
  blockorunblockuser(value) {
    console.log('user data==', value)
    if (value.block_status == 'Unblock' || value.block_status == null) {
      value.block_status = 'Block'
      this.blockuser(value.users_customers_id)
    } else {
      value.block_status = 'Unblock'
      this.unblockuser(value.users_customers_id)
    }
  }
  blockuser(otheruserid) {
    let data = {
      "blocked_user_id": otheruserid,
      "blocked_by_user_id": localStorage.getItem('loggedinUserID')
    }
    this.restService.blockuser(data).subscribe((res: any) => {
      console.log('block user result==', res)
      if (res.status == 'success') {
        this.workService.presentToast('User blocked')
      }
    })
  }

  unblockuser(otheruserid) {
    let data = {
      "blocked_user_id": otheruserid,
      "blocked_by_user_id": localStorage.getItem('loggedinUserID')
    }
    this.restService.unblockuser(data).subscribe((res: any) => {
      console.log('unblock user result==', res);
      if (res.status == 'success') {
        this.workService.presentToast('User Unblocked')
      }
    })
  }

  imageclicked(match) {
    if (match.report_status == 'reported') {
      this.workService.presentToast('User is reported as a spam');
    }

  }
  goToMessage(match) {
    console.log(match);
    //this.router.navigate(['/tabs/tab2'])
    if (match.block_status == 'Block') {
      this.restService.basicAlert('You had blocked the user!')
    } else {
      console.log('other user id on match page line 125', match.users_customers_id);
      // this.workService.myUserData = match
      // this.router.navigate(['otherprofile']);
      this.checkedmatchblockeduser(match)
    }

    // if (match.prompt_replies == 'No') {



    // } else {
    //   this.userService.userName = match.first_name + ' ' + match.last_name
    //   this.userService.userId = match.users_customers_id
    //   this.userService.userIMG = this.restService.baseUrlForImg + match.profile_pic_1
    //   var ss = JSON.stringify({
    //     "request_type": "startChat",
    //     "users_customers_id": localStorage.getItem('loggedinUserID'),
    //     "reciever_users_customers_id": match.users_customers_id
    //   })
    //   this.restService.chat_messagesAPI(ss).subscribe((res: any) => {
    //     console.log('res--->>chat-->>', res);
    //   }, err => {
    //     this.workService.hideLoading()
    //     this.workService.presentToast('Network error occured')
    //   })
    //   this.navCtrl.navigateForward("/chat");

    // }



  }

  checkedmatchblockeduser(match) {
    this.workService.presentLoading()
    this.otherUserID = match.users_customers_id
    console.log('other user id on otherprofile page line 82', this.otherUserID);
    let data = {
      loginuser: localStorage.getItem('loggedinUserID'),
      otheruser: this.otherUserID
    }
    console.log('data get==', data)
    this.restService.get_user_dataAPI(data).subscribe((res: any) => {
      this.workService.hideLoading()
      console.log('incomming data === ', res);
      if (res.status == "success") {
        this.workService.hideLoading();
        this.workService.myUserData = match
        this.router.navigate(['otherprofile']);

        console.log('other profile ---->>');







      }
      if (res.status == 'error') {
        this.workService.hideLoading();
        this.basicAlert(res.message)
      }

    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })
  }

  goToMessageMain(match) {
    console.log(match);
    //this.router.navigate(['/tabs/tab2'])


    if (match.prompt_replies == 'No') {
      console.log(match.users_customers_id);
      this.workService.myUserData = match
      this.router.navigate(['otherprofile'])


    }



  }

  crossClick(match, index) {

    this.toggleNotSelected = 1
    console.log('ok', match)
    this.selectedUserID = match.users_customers_id
    // this.showPopup()

    this.selectedIndexToDelete = index

    localStorage.setItem('other_users_customers_id', this.selectedUserID)
    this.openMapModel()
    // if (this.matches.length > 1) {

    // }
    // this.matches.splice(0, 1);

    // console.log(this.matches);
    // this.totalMatches = this.matches.length

  }

  closeMatch() {

    var ss = JSON.stringify({
      'users_customers_id': localStorage.getItem('loggedinUserID'),
      'other_users_customers_id': this.selectedUserID
    })

    this.workService.presentLoading()

    this.restService.delete_matchAPI(ss).subscribe((res: any) => {
      this.workService.hideLoading()

      if (res.status.success) {
        this.workService.presentToast(res.message)
        this.matches.splice(this.selectedIndexToDelete, 1)
        this.totalMatches = this.totalMatches - 1
      } else {
        this.workService.presentToast(res.message)
      }


    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })

    console.log(ss);

    //
  }



  openChat(event) {
    console.log("event---", event)
    var ss = JSON.stringify({
      'users_customers_id': localStorage.getItem('loggedinUserID'),
      'other_users_customers_id': this.selectedUserID
    })

    this.workService.presentLoading()

    this.restService.remove_matchAPI(ss).subscribe((res: any) => {

      this.workService.hideLoading()


      if (res.status.success) {
        this.workService.presentToast(res.message)
        this.matches.splice(this.selectedIndexToDelete, 1)
        this.totalMatches = this.totalMatches - 1
      } else {
        this.workService.presentToast(res.message)
      }
    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })

    console.log(ss);

  }

  ionViewWillEnter() {

    // localStorage.setItem('loggedinUserID', '71')


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
      // "users_customers_id": 71

    })
    console.log('data-----', data);


    this.restService.getBestMatchesAPI(data).subscribe((res: any) => {

      this.workService.hideLoading()
      console.log('data-----', res);

      if (res.status == 'success') {
        this.matches = res.data
        this.totalMatches = this.matches.length
      } else {
        this.workService.presentToast('No Match Found')
      }




    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })

  }


  handleImgError(ev: any, item: any, url) {
    let source = ev.srcElement;
    let imgSrc = `assets/imgs/placeholder.jpg`;

    source.src = imgSrc;
  }


  goTootherProfile(match) {
    console.log(match.users_customers_id);
    this.workService.myUserData = match
    this.router.navigate(['otherprofile'])


  }


  vhangeHeight(val) {

    this.userHeight = parseFloat(val).toFixed(2)

    this.height1 = this.userHeight.substring(0, 1)
    this.height2 = this.userHeight.substring(2, 4)

    this.newHeight = this.height1 + "'" + this.height2

    return this.newHeight

  }

  goTONoti() {
    this.router.navigate(['notification'])
  }

  async basicAlert(message) {
    const alert = await this.alertcontroller.create({
      cssClass: 'basicAlert',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
