import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-lookingfor',
  templateUrl: './lookingfor.page.html',
  styleUrls: ['./lookingfor.page.scss'],
})
export class LookingforPage implements OnInit {


  lookingForID: any = ''

  LookingForArr: any = ''
  selectedLookingForID: any = ''





  constructor(public location: Location,
    public signupService: SignupService,
    public workService: WorkService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    //this.selectedGenderID = selectedGenderID
    this.lookingForID = localStorage.getItem('lookingForSelectedID')
    this.LookingForArr = this.workService.systemData.system_looking_for
    console.log('gender---', this.lookingForID);


  }

  goBack() {
    this.location.back()
  }

  funClick(val) {
    console.log(val);
    
    localStorage.setItem('lookingFor', val.name)
    localStorage.setItem('lookingForSelectedID', val.system_looking_for_id)
    this.signupService.lookingFor = val
    this.location.back()
  }


}
