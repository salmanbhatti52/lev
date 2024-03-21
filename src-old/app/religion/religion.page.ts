import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-religion',
  templateUrl: './religion.page.html',
  styleUrls: ['./religion.page.scss'],
})
export class ReligionPage implements OnInit {

  religionID: any = ''
  religionArr: any = ''

  constructor(public location: Location,
    public signupService: SignupService,
    public workService: WorkService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.religionID = localStorage.getItem('religionID')

    this.religionArr = this.workService.systemData.system_religions
    console.log('gender---', this.religionArr);
 
  }

  goBack() {
    this.location.back()
  }


  religionSelected(val) {
    localStorage.setItem('religion', val.name)
    localStorage.setItem('religionID', val.system_religions_id)
    this.signupService.religion = val
    this.location.back()
  }

}
