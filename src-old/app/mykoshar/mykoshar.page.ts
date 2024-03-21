import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-mykoshar',
  templateUrl: './mykoshar.page.html',
  styleUrls: ['./mykoshar.page.scss'],
})
export class MykosharPage implements OnInit {

  religionID: any = ''
  religionArr: any = ''

  constructor(public location: Location,
    public signupService: SignupService,
    public workService: WorkService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.religionID = localStorage.getItem('kosherID')

    this.religionArr = this.workService.systemData.kosher
    console.log('kosher---', this.religionArr);
 
  }

  goBack() {
    this.location.back()
  }


  religionSelected(val) {
    localStorage.setItem('kosher', val.name)
    localStorage.setItem('kosherID', val.system_kosher_id)
    this.signupService.kosher = val
    this.location.back()
  }

}
