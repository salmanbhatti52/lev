import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-prefrence',
  templateUrl: './prefrence.page.html',
  styleUrls: ['./prefrence.page.scss'],
})
export class PrefrencePage implements OnInit {

  constructor(public location: Location,
    public router: Router,
    public restService: RestService,
    public workService: WorkService) {




  }

  ionViewWillEnter() {

    this.workService.presentLoading()
    var stringy = JSON.stringify({
    })

    var userID = localStorage.getItem('loggedinUserID')

    console.log('userPref--->userID', userID);



    this.restService.get_user_preferencesAPI(userID).subscribe((res: any) => {
      this.workService.hideLoading()
      console.log('userPref--->', res);

      if (res.status == "success") {
        this.workService.userPrefData = res.data
      }
    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })


    var stringy = JSON.stringify({
    })

    var userID = localStorage.getItem('loggedinUserID')


    this.restService.getSystemDataAPI(userID).subscribe((resPref: any) => {
      this.workService.hideLoading()



      if (resPref.status == "success") {
        this.workService.systemData = resPref.data
      }
    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })
  }

  ngOnInit() {
  }
  goBack() {
    this.location.back()
  }

  goToInterestedIn() {
    this.router.navigate(['interestedinpref'])
  }

  goToMaritalStatus() {
    this.router.navigate(['maritalstatuspref'])
  }


  goToAge() {
    this.router.navigate(['agerange'])
  }


  goToReligion() {
    this.router.navigate(['religionpref'])
  }

  goToKosher() {
    this.router.navigate(['koshar'])
  }


  goToEthnicity() {
    this.router.navigate(['ethnicity'])
  }




}
