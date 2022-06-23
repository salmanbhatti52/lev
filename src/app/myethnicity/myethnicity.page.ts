import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { SignupService } from '../signup.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-myethnicity',
  templateUrl: './myethnicity.page.html',
  styleUrls: ['./myethnicity.page.scss'],
})
export class MyethnicityPage implements OnInit {

  ethnicityID: any
  ethnicityArray: any

  addedArray: any = []

  constructor(public location: Location,
    public workService: WorkService,
    public restService: RestService,
    public signupService: SignupService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {


    this.addedArray = JSON.parse(localStorage.getItem('ethnicityArr'))

    if (this.addedArray) {

    } else {
      this.addedArray = []
    }

    console.log('ionViewWillEnter------------addedArray', this.addedArray);


    this.ethnicityID = localStorage.getItem('ethnicityID')



    console.log('eth id-->>', this.ethnicityID);


    this.ethnicityArray = this.workService.systemData.ethinicity
    console.log('ethnicityArray---', this.ethnicityArray);


    var hash = Object.create(null);
    this.ethnicityArray.forEach(obj => hash[obj.name] = obj);
    this.addedArray.forEach(obj => Object.assign(hash[obj.name], obj));
    console.log('after mergeee', this.ethnicityArray);

  }

  goBack() {
    this.saveEthnicity()
  }


  ethSelected(val, i) {

    let obj = this.addedArray.find(o => o.system_ethinicity_id == val.system_ethinicity_id);
    if (obj) {
      console.log('delete');
      var aa = {
        system_ethinicity_id: val.system_ethinicity_id,
        name: val.name,
        sort_order: val.sort_order,
        status: val.status,
        added: false
      }
      this.ethnicityArray[i] = aa
      var deleteThisIDPlz = 0
      for (let i = 0; i < this.addedArray.length; i++) {
        if (this.addedArray[i].system_ethinicity_id == val.system_ethinicity_id) {
          console.log('indexxxxxxx id testID--------', i);
          deleteThisIDPlz = i
        }
      }
      this.addedArray.splice(deleteThisIDPlz, 1)
      console.log('delete-------', this.addedArray);
    } else {
      console.log('Add');
      var bb = {
        system_ethinicity_id: val.system_ethinicity_id,
        name: val.name,
        sort_order: val.sort_order,
        status: val.status,
        added: true
      }
      this.ethnicityArray[i] = bb
      this.addedArray.push(bb)
      console.log('added-------111111111', this.addedArray);
    }
    console.log('added-------9999999999', this.addedArray);
    localStorage.setItem('ethnicity', val.name)
    localStorage.setItem('ethnicityID', val.system_ethinicity_id)

    // 

  }

  saveEthnicity() {
    localStorage.setItem('ethnicityArr', JSON.stringify(this.addedArray))
    this.location.back()
  }


}
