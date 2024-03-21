import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-ethnicity',
  templateUrl: './ethnicity.page.html',
  styleUrls: ['./ethnicity.page.scss'],
})
export class EthnicityPage implements OnInit {

  ethnicityID: any
  ethnicityArray: any

  addedArray: any = []

  constructor(public location: Location,
    public workService: WorkService,
    public restService: RestService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    // this.addedArray = JSON.parse(localStorage.getItem('ethnicityArr'))

    // if (this.addedArray) {

    // } else {
    //   this.addedArray = []
    // }


    if (this.workService.userPrefData.user_preferences == null || this.workService.userPrefData.user_preferences == 'undefined') {
      this.addedArray = []
    } else {
      let arr = this.workService.userPrefData.user_preferences_ethinicity

      arr.forEach(val => {

        let fields = {
          name: val.system_ethinicity_name,
          sort_order: "1",
          status: "Active",
          system_ethinicity_id: val.system_ethinicity_id,
          added: true

        }
        this.addedArray.push(fields)
      })

      console.log('hurra', this.addedArray);
    }





    this.ethnicityArray = this.workService.systemData.ethinicity
    console.log('ethnicityArray---', this.ethnicityArray);

    var hash = Object.create(null);
    this.ethnicityArray.forEach(obj => hash[obj.name] = obj);
    this.addedArray.forEach(obj => Object.assign(hash[obj.name], obj));
    console.log('after mergeee', this.ethnicityArray);
  }

  goBack() {
    this.location.back()
  }


  saveEthnicity() {

    this.workService.presentLoading()

    console.log('saveEthnicity-------111', this.addedArray);

    var userID = localStorage.getItem('loggedinUserID')

    var data = JSON.stringify({
      "system_ethinicity_id": this.addedArray
    })
    console.log('system_ethinicity_id-------111', data);
    this.restService.updatePrefAPI('update_ethinicity/', userID, data).subscribe((res: any) => {
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
    // localStorage.setItem('ethnicity', val.name)
    // localStorage.setItem('ethnicityID', val.system_ethinicity_id)

    // 

  }


}
