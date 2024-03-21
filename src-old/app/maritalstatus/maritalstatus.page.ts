import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-maritalstatus',
  templateUrl: './maritalstatus.page.html',
  styleUrls: ['./maritalstatus.page.scss'],
})
export class MaritalstatusPage implements OnInit {

  meritalStatusSelectedID: any = ''

  maritalStatusArr: any = ''

  constructor(public location: Location,
    public signupService: SignupService,
    public workService: WorkService) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }


  funClick(val) {
    localStorage.setItem('meritalStatus', val.name)
    localStorage.setItem('meritalStatusSelectedID', val.system_maritalstatus_id)

    this.signupService.meritalStatus = val
    this.location.back()

  }

  ionViewWillEnter() {
    this.meritalStatusSelectedID = localStorage.getItem('meritalStatusSelectedID')
    console.log(this.workService.systemData);

    this.maritalStatusArr = this.workService.systemData.system_maritalstatus

  }


}
