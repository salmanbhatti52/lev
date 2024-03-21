import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-matchdelete',
  templateUrl: './matchdelete.page.html',
  styleUrls: ['./matchdelete.page.scss'],
})
export class MatchdeletePage implements OnInit {

  constructor(public location: Location,
    public modalCtrl: ModalController,
    public workService: WorkService,
    public restService: RestService) { }

  ngOnInit() {
  }

  hidePopup() {
    var stringy = JSON.stringify({
      add: 0
    })

    this.modalCtrl.dismiss(stringy)
  }


  close() {

    var stringy = JSON.stringify({
      add: 1
    })

    this.modalCtrl.dismiss(stringy)
  }


  closeMatch() {

    var ss = JSON.stringify({
      'users_customers_id': localStorage.getItem('loggedinUserID'),
      'other_users_customers_id': localStorage.getItem('other_users_customers_id')
    })

    this.workService.presentLoading()

    this.restService.delete_matchAPI(ss).subscribe((res: any) => {
      this.workService.hideLoading()

      console.log('resss----', res);


      if (res.status == 'success') {
        this.workService.presentToast(res.message)
        this.close()

      } else {
        this.workService.presentToast(res.message)
      }


    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })

    console.log(ss);

    //
  }

  openChat(event) {
    console.log("event---", event)
    var ss = JSON.stringify({
      'users_customers_id': localStorage.getItem('loggedinUserID'),
      'other_users_customers_id': localStorage.getItem('other_users_customers_id')
    })

    this.workService.presentLoading()

    this.restService.remove_matchAPI(ss).subscribe((res: any) => {

      this.workService.hideLoading()

      console.log('resss----', res);



      if (res.status == 'success') {
        this.workService.presentToast(res.message)
        this.close()
      } else {
        this.workService.presentToast(res.message)
      }
    }, err => {
      this.workService.hideLoading()
      this.workService.presentToast('Network error occured')
    })

    console.log(ss);

  }

}
