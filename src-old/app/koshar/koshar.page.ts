import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-koshar',
  templateUrl: './koshar.page.html',
  styleUrls: ['./koshar.page.scss'],
})
export class KosharPage implements OnInit {

  togglePlatformAndroid = false

  kosherID: any
  kosherArr: any

  constructor(public location: Location,
    public platform: Platform,
    public workService: WorkService,
    public restService: RestService) { }

  ngOnInit() {
    if (this.platform.is('android')) {
      this.togglePlatformAndroid = true
    } else {
      this.togglePlatformAndroid = false
    }
  }

  goBack() {
    this.location.back()
  }



  ionViewWillEnter() {

    if (this.workService.userPrefData.user_preferences == null || this.workService.userPrefData.user_preferences == 'undefined') {
      this.kosherID = 0
    } else {
      this.kosherID = this.workService.userPrefData.user_preferences.system_kosher_id
      console.log(this.workService.systemData);
    }


    this.kosherArr = this.workService.systemData.kosher
    console.log('gender---', this.kosherArr);

  }



  getNoti(event, val) {
    console.log(event);
    console.log('val----', val);


    this.workService.presentLoading()


    var userID = localStorage.getItem('loggedinUserID')



    var data = JSON.stringify({
      "system_kosher_id": val.system_kosher_id
    })

    console.log('age====>>', data);


    this.restService.updatePrefAPI('update_koshers/', userID, data).subscribe((res: any) => {
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
