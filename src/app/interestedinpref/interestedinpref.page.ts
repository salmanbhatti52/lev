import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { SignupService } from '../signup.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-interestedinpref',
  templateUrl: './interestedinpref.page.html',
  styleUrls: ['./interestedinpref.page.scss'],
})
export class InterestedinprefPage implements OnInit {


  lookingForID: any = ''

  LookingForArr: any = ''
  selectedLookingForID: any = ''





  constructor(public location: Location,
    public signupService: SignupService,
    public workService: WorkService,
    public restService: RestService) { }

  ngOnInit() {
  }



  goBack() {
    this.location.back()
  }

  ionViewWillEnter() {


    console.log('userDayaPred-->', this.workService.userPrefData);

    if (this.workService.userPrefData.user_preferences == null || this.workService.userPrefData.user_preferences == 'undefined') {
      this.lookingForID = 0
    } else {
      this.lookingForID = this.workService.userPrefData.user_preferences.system_genders_id
    }




    this.LookingForArr = this.workService.systemData.system_looking_for
    console.log('gender---', this.lookingForID);


  }



  funClick(val) {

    this.workService.presentLoading()

    console.log(val);
    var userID = localStorage.getItem('loggedinUserID')

    var data = JSON.stringify({
      "system_genders_id": val.system_looking_for_id
    })

    this.restService.updatePrefAPI('update_genders/', userID, data).subscribe((res: any) => {
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

    // 
  }


}
