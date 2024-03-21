import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-contactus2',
  templateUrl: './contactus2.page.html',
  styleUrls: ['./contactus2.page.scss'],
})
export class Contactus2Page implements OnInit {

  name: any = ''
  email: any = ''
  desc: any = ''

  nameStatus = false
  emailStatus = false
  descStatus = false

  userData: any = ''
  userIMG: any;

  constructor(public router: Router,
    public location: Location,
    public workService: WorkService,
    public restService: RestService,
    public platform: Platform) {

    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });


    this.userData = this.workService.myUserData

    console.log(this.userData);


    this.name = this.userData.first_name + ' ' + this.userData.last_name
    this.email = this.userData.user_email

  }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }

  changeFunction(ev) {

    this.name = this.restService.removebadwords(ev.detail.value);
  }
  changeFunction1(ev) {

    this.desc = this.restService.removebadwords(ev.detail.value);
  }

  send() {


    if (this.name == '') {
      this.nameStatus = true
    }

    if (this.email == '') {
      this.emailStatus = true
    }
    if (this.desc == '') {
      this.descStatus = true
    }

    if (this.name != '' && this.email != '' && this.desc != '') {

      var stringy = JSON.stringify({
        name: this.name,
        email: this.email,
        message: this.desc
      })

      console.log(stringy);


      this.workService.presentLoading()

      this.restService.contactUSAPI(stringy).subscribe((res: any) => {
        console.log(res);
        this.workService.hideLoading()

        if (res.status == 'success') {
          this.workService.presentToast(res.message)
          this.location.back()
        } else {
          this.workService.presentToast('Some Error Occured.')
        }


      }, err => {
        this.workService.hideLoading()
        this.workService.presentToast('Network error occured')
      })


    } else {
      setTimeout(() => {
        this.nameStatus = false
        this.emailStatus = false
        this.descStatus = false
      }, 3000);

    }



  }

}
