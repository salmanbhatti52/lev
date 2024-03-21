import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  Selectedgender: any = ''

  genderArr: any = ''
  selectedGenderID: any = ''




  constructor(public location: Location,
    public signupService: SignupService,
    public workService: WorkService) { }

  ngOnInit() {
  }


  ionViewWillEnter() {

    this.Selectedgender = localStorage.getItem('selectedGenderId')

    this.genderArr = this.workService.systemData.system_genders
    console.log('gender---', this.genderArr);
    console.log('gender---', this.Selectedgender);

  }

  goBack() {
    this.location.back()
  }


  funClick(val) {

    console.log(val);


    localStorage.setItem('gender', val.name)
    localStorage.setItem('selectedGenderId', val.system_genders_id)
    this.signupService.gender = val
    this.location.back()

  }

}
