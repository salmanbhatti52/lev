import { Location } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { Platform } from '@ionic/angular';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';


@Component({
  selector: 'app-agerange',
  templateUrl: './agerange.page.html',
  styleUrls: ['./agerange.page.scss'],
})
export class AgerangePage implements OnInit {

  constructor(public location: Location,
    public platform: Platform,
    public workService: WorkService,
    public restService: RestService) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });

  }

  max_price: number = 10;
  min_price: number = 40;

  public price: any = {
    upper: 35,
    lower: 10
  }

  lowerAge: any = ''
  upperAge: any = ''

  system_age_range_start: any = 20
  system_age_range_end: any = 30



  ngOnInit() {


  }

  goBack() {
    this.location.back()
  }


  onSliderChanged(event) {

    // console.log(event)
    console.log(this.price.lower)
    console.log(this.price.upper);

    this.system_age_range_start = this.price.lower
    this.system_age_range_end = this.price.upper


  }


  ionViewWillEnter() {

    if (this.workService.userPrefData.user_preferences == null || this.workService.userPrefData.user_preferences == 'undefined') {
      this.system_age_range_start = 20
      this.system_age_range_end = 30

    } else {
      this.system_age_range_end = this.workService.userPrefData.user_preferences.age_range_end
      this.system_age_range_start = this.workService.userPrefData.user_preferences.age_range_start

    }


    console.log('userDayaPred-->', this.workService.userPrefData);


    this.price = {
      upper: this.system_age_range_end,
      lower: this.system_age_range_start
    }


    console.log('price---->', this.price);

  }



  saveAgeRange() {

    this.workService.presentLoading()


    var userID = localStorage.getItem('loggedinUserID')



    var data = JSON.stringify({
      "system_age_range_start": this.system_age_range_start,
      "system_age_range_end": this.system_age_range_end
    })

    console.log('age====>>', data);


    this.restService.updatePrefAPI('update_age_range/', userID, data).subscribe((res: any) => {
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
