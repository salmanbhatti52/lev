import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { SignupService } from '../signup.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-maritalstatuspref',
  templateUrl: './maritalstatuspref.page.html',
  styleUrls: ['./maritalstatuspref.page.scss'],
})
export class MaritalstatusprefPage implements OnInit {

  meritalStatusSelectedID: any = ''

  maritalStatusArr: any = ''

  constructor(public location: Location,
    public signupService: SignupService,
    public workService: WorkService,
    public restService: RestService) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }


  funClick(val) {

    this.workService.presentLoading()

    console.log(val);
    var userID = localStorage.getItem('loggedinUserID')

    var data = JSON.stringify({
      "system_maritalstatus_id": val.system_maritalstatus_id
    })

    this.restService.updatePrefAPI('update_maritalstatus/', userID, data).subscribe((res: any) => {
      this.workService.hideLoading()
      console.log('resss======', res);
      if (res.status == 'success') {
        this.workService.presentToast(res.message)
        this.location.back()
      }
    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })

  }

  ionViewWillEnter() {



    if (this.workService.userPrefData.user_preferences == null || this.workService.userPrefData.user_preferences == 'undefined') {
      this.meritalStatusSelectedID = 0
    } else {
      this.meritalStatusSelectedID = this.workService.userPrefData.user_preferences.system_maritalstatus_id
      console.log(this.workService.systemData);
    }

    this.maritalStatusArr = this.workService.systemData.system_maritalstatus

  }


}
