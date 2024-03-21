import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { SignupService } from '../signup.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-religionpref',
  templateUrl: './religionpref.page.html',
  styleUrls: ['./religionpref.page.scss'],
})
export class ReligionprefPage implements OnInit {


  religionID: any = ''
  religionArr: any = ''

  constructor(public location: Location,
    public signupService: SignupService,
    public workService: WorkService,
    public restService: RestService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    if (this.workService.userPrefData.user_preferences == null || this.workService.userPrefData.user_preferences == 'undefined') {
      this.religionID = 0
    } else {
      this.religionID = this.workService.userPrefData.user_preferences.system_religions_id
    }

    this.religionArr = this.workService.systemData.system_religions
    console.log('gender---', this.religionArr);

  }

  goBack() {
    this.location.back()
  }


  religionSelected(val) {

    this.workService.presentLoading()

    console.log(val);
    var userID = localStorage.getItem('loggedinUserID')

    var data = JSON.stringify({
      "system_religions_id": val.system_religions_id
    })
    this.restService.updatePrefAPI('update_religions/', userID, data).subscribe((res: any) => {
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

}
